function find(source, pattern) {
    // 计算出*号的总个数 
    let starCount = 0
    for (let i = 0; i < pattern.length; i++)
        if (pattern[i] === '*')
            starCount++

    // 如果没有*号，则严格匹配
    if (starCount === 0) {
        for (i = 0; i < pattern.length; i++)
            if (pattern[i] !== source[i] && pattern[i] !== '?')
                return false
    }

    // 开始分段处理
    // 1.匹配第一个*号之前的字符串
    let i = 0 // 代表pattern中的位置
    let lastIndex = 0 // 代表source中的位置
    for (i = 0; pattern[i] != '*'; i++) {
        if (pattern[i] !== source[i] && pattern[i] !== '?') {
            return false
        }
    }
    lastIndex = i

    // 2.匹配最后一个*号之前的字符串
    for (p = 0; p < starCount - 1; p++) {
        let subPattern = ''
        i++
        while (pattern[i] !== '*') {
            subPattern += pattern[i]
            i++
        }
        
        let reg = new RegExp(subPattern.replace(/\?/g, '[\\s\\S]'), 'g')  //将两个*号之间的字符替换成正则语法
        reg.lastIndex = lastIndex
        let ret = reg.exec(source)
        console.log(ret, reg)
        if (!ret) {
            return false
        }
        lastIndex = reg.lastIndex
    }

    // 3.匹配最后一个*号之后的字符串
    for (i = 0; i < pattern.length - lastIndex && pattern[pattern.length - 1] !== '*'; i++) {
        if (pattern[pattern.length - i] !== source[source.length - i] && pattern[pattern.length - i] !== '?') {
            return false
        }
    }
    return true
}


console.log(find("dfdfdfdfebbrytht6dv43fvbxzqdvgfe", "d*e*y??t*z*fe"))
