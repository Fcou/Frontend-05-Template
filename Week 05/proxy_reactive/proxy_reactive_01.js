let object = {
    a: 1,
    b: 2
}

function reactive(object) {
    return new Proxy(object, {
        set(obj, prop, val) {
            obj[prop] = val //对原对象属性进行修改
            console.log(obj, prop, val)
            return obj[prop]
        },
        get(obj, prop) {
            console.log(obj, prop)
            return obj[prop]
        }
    })
}

let po = reactive(object) //封装原对象为Proxy对象