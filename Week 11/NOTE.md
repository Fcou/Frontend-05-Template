### 学习笔记
##### 1. CSS语法的研究
Css 2.1总体结构
* @charest
* @import
* rules
    * @media
    * @page
    * rule
##### 2. CSS @规则的研究
* At-rules
    * @charset: css字符集相关, 一般采用utf-8
    * @imoprt: 外部资源
    * @page: 分页媒体相关。常用得分页媒体只有打印机,浏览器不做分页处理
    * @media: 查询媒体
    * @counter-style: 列表前缀、序号样式
    * @keyframes: 动画相关
    * @fontface: 字体相关
    * @support: css特性支持，兼容性不好，不做推荐
    * @namespace: 命名空间
##### 3.CSS规则的结构
* 选择器
* 声明
    * key: Properties、Variable
    * value
* 选择器语法
    * 简单选择器
    * 复合选择器
    * 复杂选择器
* 选择器优先级
* 伪类
    * 链接/行为
        * :any-link
        * :link :visited
        * :hover
        * :active
        * :focus
        * :target
    * 树结构
        * :empty
        * :nth-child()
        * :nth-last-child()
        * :first-child :last-child :only-child
    * 逻辑型
        * :not伪类
        * :where :has
* 伪元素
    * ::before
    * ::after
    * ::first-line 排版后得第一行
    * ::first-letter