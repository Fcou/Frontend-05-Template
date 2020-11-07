  
let object = {
    a: 1, 
    b: 2
}

let po = new Proxy(object, {
    set(obj, prop, val){
        console.log(obj, prop, val)
    }
})

po.a=10  //看似简单的赋值操作，但可能重新定义了其具体操作，可预测性降低
