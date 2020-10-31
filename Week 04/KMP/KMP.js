function kmp(source, pattern) {
    // 利用pattern，计算跳转表格next，主要确定当pattern某位出现不匹配时，确定从pattern哪位开始重新比较匹配
    let next = new Array(pattern.length).fill(0)
    {
      let i = 1, j = 0;// i表示自重复串开始的位置（0都重复，不考虑），j表示已重复的字符数
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
    // source一直向后遍历即可，出现不匹配时，确定pattern重新开始比较的位置后，再次进行二者对比
    {
      let i = 0, j = 0
      while(i < source.length) {
        if(pattern[j] === source[i]) {
          ++i, ++j
        } else {
          if(j > 0) {
            j = next[j]
          } else {
            ++i //pattern第0位都步匹配，则source向后移动一位
          }
        }
        if(j === pattern.length) return true
      }
      return false
    }
  }
  
  console.log(kmp("acefacadf", "ae"))
  console.log(kmp("acefacadf", "aca"))
  console.log(kmp("aca", "aca"))
  
  