function stringToNumber(str) {
    let hexNumbers = "0123456789abcdef" //十六进制
    let octNumbers = "01234567" //八进制
    let binNumbers = "01" //二进制
    let num = 0


    let type = null
    let typeNumbers = null

    //通过开头前两位来判断是几进制
    if (str.startsWith("0x")) {
        type = 16
        typeNumbers = hexNumbers
    }
    if (str.startsWith("0o")) {
        type = 8
        typeNumbers = octNumbers
    }
    if (str.startsWith("0b")) {
        type = 2
        typeNumbers = binNumbers
    }
    //从最后一位遍历到第三位,把每一位代表的数值累加起来
    for (let i = str.length - 1; i >= 2; i--) {
        const v = str[i]
        num += typeNumbers.indexOf(v) * type ** (str.length - 1 - i) //indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
    }
    return num
}

console.log(stringToNumber("0b101100")) //44
console.log(stringToNumber("0o54")) //44
console.log(stringToNumber("0x2c")) //44


function numberToString(number, type) {
    if (number === 0) return "0"

    let hexNumbers = "0123456789abcdef"
    let result = ""
    let sign = number > 0 ? "" : "-" //正负符号位
    let numb = Math.abs(number)

    while (numb > 0) {
        if (numb % type) {
            result = hexNumbers[numb % type] + result
        } else {
            result = "0" + result
        }
        numb >>= Math.log2(type)
    }
    switch (type) {
        case 16:
            result = "0x" + result
            break
        case 8:
            result = "0o" + result
            break
        case 2:
            result = "0b" + result
            break
        default:
            break
    }
    return sign + result
}

console.log(numberToString(44, 2))
console.log(numberToString(44, 8))
console.log(numberToString(44, 16)) 