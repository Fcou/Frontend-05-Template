// 代表该字符节点是否是一个单词的最后一个字符。Symbol 可以创建一个全局唯一的值（但并不是字符串）。
const $ = Symbol()

class Trie {
    constructor() {
        this.root = Object.create(null)
    }

    insert(word) {
        let node = this.root
        for (const char of word) {
            if (!node[char]) {
                node[char] = Object.create(null)
            }
            node = node[char]
        }
        // 利用最后node来判断，如果该字符节点没有 $，代表第一次生成该单词
        if (!node[$]) node[$] = 0
        // 记录单词出现总次数
        node[$]++
    }

    most() {
        let max = 0
        let maxWord = ''
        const findLongest = (node, word) => {
            // 确定是单词 并且 单词出现总次数目前最多，则记录
            if (node[$] && node[$] > max) {
                max = node[$]
                maxWord = word
            }
            // 相当于对Trie树深度优先遍历
            for (const char in node) {
                findLongest(node[char], word + char)
            }
        }
        findLongest(this.root, "")
        return { max, maxWord }
    }
}

// 产生len长度的随机单词
const randomWord = (len) => {
    let word = ''
    for (let i = 0; i < len; i++) {
        word += String.fromCharCode(Math.random() * 26 + "a".charCodeAt(0))
    }
    return word
}

const t = new Trie()
// 随机产生10万个长度为4的单词
for (let i = 0; i < 100000; i++) {
    t.insert(randomWord(4))
}
console.log(t.most())