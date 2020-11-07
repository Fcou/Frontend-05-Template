### 学习笔记
#### 1.学习Proxy，Proxy 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。
```
语法
const p = new Proxy(target, handler)
target：要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。handler 对象是一个容纳一批特定属性的占位符对象。它包含有 Proxy 的各个捕获器（trap）。所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

handler.set() ----属性设置操作的捕捉器。
        语法
        const p = new Proxy(target, {
            set: function(target, property, value, receiver) {
            }
        });
handler.get() -----方法用于拦截对象的读取属性操作。
        语法
        var p = new Proxy(target, {
            get: function(target, property, receiver) {
            }
        });
```
#### 2.调色盘编程练习，学习使用Proxy实现双向绑定

#### 3.拖拽编程练习
- Range 接口表示一个包含节点与文本节点的一部分的文档片段。
```
可以用 Document 对象的 Document.createRange 方法创建 Range，也可以用 Selection 对象的 getRangeAt 方法获取 Range。另外，还可以通过 Document 对象的构造函数 Range() 来得到 Range。
```
- Range.getBoundingClientRect() 返回一个 DOMRect 对象，该对象将范围中的内容包围起来；即该对象是一个将范围内所有元素的边界矩形包围起来的矩形

