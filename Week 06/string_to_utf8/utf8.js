// 把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行编码。
function UTF8_Encoding(string) {
    let array = []
  
    for (let c of string) {
      let charCode = c.charCodeAt(0) //指定 index 处字符的 UTF-16 代码单元值的一个数字
        
      //根据大小来区分格式
      if (charCode < 0x7f) { // 0x7f换算成二进制是0111 1111
        //一个字节 0*******
        array.push(charCode)
      } else if (charCode < 0x07ff) { //换算成二进制是0000 0111 1111 1111
        //二个字节 110***** 10******
        array.push((charCode >> 6) | 0x11000000) //前5位 拼上110
        array.push((charCode & 0x111111) | 0x10000000) //后6位 拼上10
      } else if (charCode < 0xffff) { //换算成二进制是1111 1111 1111 1111 
        //三个字节 1110**** 10****** 10******
        array.push((charCode >> 12) | 0x11000000) //前4位 拼上1110
        array.push(((charCode >> 6) & 0x111111) | 0x10000000) //中间6位 拼上10
        array.push((charCode & 0x111111) | 0x10000000) //最后6位 拼上10
      }
    }
    return array
  }
  
  console.log(UTF8_Encoding("一"))