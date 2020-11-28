### 学习笔记
#### 1. 浏览器原理总论
1.1 实现一个toy browser的简略步骤：
* 开始：URL->HTTP
* HTML->parse
* DOM->CSS computing
* DOM with CSS -> layout
* DOM with position-> render
* 最终：Bitmap

1.2 
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

2.2 HTTP的协议解析