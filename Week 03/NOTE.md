### 学习笔记
#### 1.学习理解 BNF范式（巴科斯范式）相关知识
- `::=` 表示定义。
- `<>` 尖括号中的内容是必选内容。
- `[]` 方括号中的内容是可选项。
- `“”` 双引号中的内容是字符串。
- `|` 竖线两边的内容是可选内容。它相当于or。
- `*` 表示零个或者多个。
- `+` 表示一个或者多个。
#### 2.学习js相关知识 yield、正则表达式等

```
yield 关键字用来暂停和恢复一个生成器函数（(function* 或遗留的生成器函数）。
[rv] = yield [expression];
expression:定义通过迭代器协议从生成器函数返回的值。如果省略，则返回undefined。
rv:返回传递给生成器的next()方法的可选值，以恢复其执行。
```

#### 3.使用LL算法构建AST，先进行词法分析，再进行语法分析，最终得到抽象语法树。
- TokenNumber:
    - 1 2 3 4 5 6 7 8 9 0 的组合
- Operator: + - * / 
- Whitespace: `<SP>`
- LineTerminator: `<LF> <CR>`

```
<Expression> ::=
    <AdditiveExpression><EOF>

 <AdditiveExpression> ::=
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression> ::=
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>
 ```
 
#### 4.如果有括号，根据优先级，修改语法分析代码逻辑即可

