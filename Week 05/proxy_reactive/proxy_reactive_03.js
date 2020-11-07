let callbacksMap = new Map()
let usedReactivities = []
let object = {
    a: 1,
    b: 2
}

function reactive(obj) {
    return new Proxy(obj, {
        set(obj, prop, value) {
            if (callbacksMap.get(obj)) // 4.当涉及到属性设置操作时，检查是否有之前注册的callback函数，有则执行
                if (callbacksMap.get(obj).get(prop))
                    for (const callback of callbacksMap.get(obj).get(prop))
                        callback()
            obj[prop] = value
            return obj[prop]
        },
        get(obj, prop) {
            usedReactivities.push([obj, prop]) //  2.当涉及到读取属性操作时，将对象和属性存入usedReactivities变量中
            return obj[prop]
        }
    })
}

let po = reactive(object)

function effect(callback) {
    usedReactivities = [] // 清空
    callback() //1.执行callback函数，因为涉及到Proxy对象属性读取操作，会触发其get。

    //3.根据对象、属性，利用Map对应存储callback函数
    for (let reactivity of usedReactivities) {
        if (!callbacksMap.has(reactivity[0]))
            callbacksMap.set(reactivity[0], new Map()) //第一层，对象为key
        if (!callbacksMap.get(reactivity[0]).has(reactivity[1]))
            callbacksMap.get(reactivity[0]).set(reactivity[1], []) //第二层，属性为key
        callbacksMap.get(reactivity[0]).get(reactivity[1]).push(callback) //最终把callback函数作为val存入

        console.log(callbacksMap)
    }
}

effect(() => {
    console.log("effect", po.a) // callback函数
})