### 学习笔记
#### 1. 浏览器原理
实现一个toy browser的简略步骤：
* 开始：URL->HTTP
* HTML->parse
* DOM->CSS computing
* DOM with CSS -> layout
* DOM with position-> render
* 最终：Bitmap

##### URL->HTTP如何实现
###### 第一步：实现一个HTTP请求
* 设计一个HTTP请求类
* content type 是个必要字段，要有默认值
* body是KV格式
* 不同content type 影响body的格式
###### 第二步：send函数总结
* 在Request的构造器中收集必要信息
* 设计一个send函数，把请求真实发送给服务器
* send函数应该是异步的，所以返回Promise
###### 第三步：发送请求
* 设计支持已有的connetion或者自建connection
* 收到数据传递给parser
* 根据parser的状态resolve Promise
###### 第四步：ResponseParser总结
* Response必须分段构建，所以我们要用一个ResponseParser来“装配”
* ResponseParser分段处理ResponseText,我们用状态机来分析文本的结构
###### 第五步：BodyParser总结
* Response的body可能根据Content-Type有不同结构，因此我们会采用子Parser的结构来解决问题
* 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式

#### 2.基础知识
2.1 有限状态机
* 每个状态都是一个机器
    * 每一个机器里，我们可以做计算、存储、输出
    * 所有机器接受的输入是一致的
    * 状态机的每一个机器本身没有状态，如果我们用函数表示的话，应该是纯函数（无副作用），不是闭包函数
* 每个机器都知道下一个状态
    * 每个机器都有确定的下一个状态（Moore）
    * 每个机器根据输入决定下一状态（Mealy）

* JS中的有限状态机（Mealy）
```
// 每个函数是一个状态
function state(input){ //函数参数就是输入
    //处理每个状态的逻辑
    return next //返回值作为下一个状态
}
```
