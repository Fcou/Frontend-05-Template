//字符串“abcabx”的解析
function match(string) {
    let state = start
    for (let c of string) {
        state = state(c)         
    }
    return state === end
}

function start(c) {
    if (c === "a")
        return foundA
    else
        return start
}

function foundA(c) {
    if (c === "b")
        return foundB
    else
        return start(c)
}

function foundB(c) {
    if (c === "c")
        return foundC
    else
        return start(c) //找到ab之后，如果不是c,则只可能从头开始判断
}

function foundC(c) {
    if (c === "a")
        return foundA2
    else
        return start(c)
}

function foundA2(c) {
    if (c === "b")
        return foundB2
    else
        return start(c)
}

function foundB2(c) {
    if (c === "x")
        return end
    else
        return foundB(c) //如果不是x，还要处理可能是abcab之后接c的状态
}
function end(c) {
    return end
}

console.log(match("xxabcabcxx"))   //false
console.log(match("abcabx"))  //true

