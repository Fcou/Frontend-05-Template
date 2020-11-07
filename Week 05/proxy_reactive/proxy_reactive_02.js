let callbacks = []

let object = {
    a: 1,
    b: 2
}

function effect(callback) {
    callbacks.push(callback)
}

effect(() => {
    console.log(po.a) //将此函数存入callbacks中
})


function reactive(object) {
    return new Proxy(object, {
        set(obj, prop, val) {
            obj[prop] = val
            for (let callback of callbacks) { //遍历全部函数方法，效率低
                callback()
            }
            return obj[prop]
        },
        get(obj, prop) {
            return obj[prop]
        }
    })
}

let po = reactive(object)