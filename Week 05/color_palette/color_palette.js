let reactivities = new Map() //缓存对象和其proxy对象
let callbacksMap = new Map()
let usedReactivities = []
var object = {
    r: 100,
    g: 100,
    b: 100,
}

function reactive(obj) {
    if (reactivities.has(obj)) { //如果缓存有此对象，则直接从缓存返回其proxy对象
        return reactivities.get(obj)
    }

    let po = new Proxy(obj, {
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
            if (typeof obj[prop] === 'object') { //如果是对象，则再调用一次reactive
                return reactive(obj[prop])
            }
            return obj[prop]
        }
    })

    reactivities.set(obj, po) //将对象和其proxy对象添加到缓存

    return po
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

//双向绑定，实现调色盘功能
effect(() => {
    document.getElementById("r").value = po.r
})
effect(() => {
    document.getElementById("g").value = po.g
})
effect(() => {
    document.getElementById("b").value = po.b
})
effect(() => {
    document.getElementById("color").style.backgroundColor = `rgb(${po.r},${po.g},${po.b})`
})

document.getElementById("r").addEventListener("input", e => po.r = e.target.value)
document.getElementById("g").addEventListener("input", e => po.g = e.target.value)
document.getElementById("b").addEventListener("input", e => po.b = e.target.value)