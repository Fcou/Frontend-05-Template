//生成跳转表格next
function genNext(pattern) {
    let next = new Array(pattern.length).fill(0)
    {
      let i = 1, j = 0// i表示自重复串开始的位置（0都重复，不考虑），j表示已重复的字符数
      //把j视为前缀子串开始位置，把i视为后缀子串开始位置，也好理解
      while(i < pattern.length) {
        if (pattern[i] === pattern[j]) {
          ++j, ++i
          next[i] = j
        } else {
          if (j > 0) {
            j = next[j]
          } else {
            ++i
          }
        }
      }
    }
    console.log(next)
    return next
}


  
//利用跳转表格next生成状态函数
function genStateFuncs(pattern) {
    if (pattern.length === 0) {
      return false
    }
  
    const funcs = Array(pattern.length)
    const next = genNext(pattern)
    for (let i = 0; i < pattern.length; i++) {
      const c = pattern[i]

      //中间状态机逻辑要代码生成
      funcs[i] = function(w) {
        if (w === c) {
          return i === pattern.length - 1 ? end : funcs[i + 1] //如果不是最后一个字符，则返回下一状态
        } else {
          if (i === 0) {
            return funcs[0] //返回开始状态
          }
          if (next[i]){ 
            return funcs[next[i]](w)  //返回之前可能重复状态
          }
          return funcs[0](w) //相当于start(c)
        }
      }
    }
    return funcs
}
  
function end() {
    return end
}
  
function match(str, pattern) {
    const funcs = genStateFuncs(pattern)
    if (!funcs) return false
    let state = funcs[0]
    for (let c of str) {
      state = state(c)
    }
    return state === end
}

console.log(match("xxabababababxcc", "abababx")) // true
console.log(match("xxababababcxx", "abababx")) // false