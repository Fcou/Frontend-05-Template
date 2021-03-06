### 学习笔记
#### 1.泛用语言分类方法: 
- 非形式语言：中文、英文
- 形式语言：是用精确的数学或机器可处理的公式定义的语言

形式语言，按照乔姆斯基谱系划分:
```
乔姆斯基谱系：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次：
0- 型文法（无限制文法或短语结构文法）包括所有的文法。
1- 型文法（上下文相关文法）生成上下文相关语言。
2- 型文法（上下文无关文法）生成上下文无关语言。
3- 型文法（正规文法）生成正则语言。
```
按照用途划分
```
1.数据描述语言：JSON、HTML、SQL、CSS等
2.编程语言:C、C++、Python、JS、Golang等
```
按照表达方式划分
```
1.声明式语言语言：JSON、HTML、SQL、CSS等
2.命令式语言:C、C++、Python、JS、Golang等
```
按照是否需要编译划分
```
1.编译型：C、C++、Java、Golang等
2.解释型: Pyton、JS、PHP等
```
#### 2.编写带括号的四则运算产生式，产生式相关知识学习
- 产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句

- 巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。

- 终结符： 最终在代码中出现的字符

```
带括号的四则运算产生式
<Exp> ::= <Bra> | <Bra> <+> <Bra>  | <Bra> <-> <Bra> | <Bra> <*> <Bra> | <Bra> </> <Bra>
<Bra> ::= <Add> | <(> <Add> <)>
<Add> ::= <Mul> | <Add> <+> <Mul> | <Add> <-> <Mul>
<Mul> ::= <Num> | <Mul> <*> <Num> | <Mul> </> <Num>
 ```

#### 3.编程语言的性质
- 图灵完备性：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。
```
命令式——图灵机(goto if while)
声明式——lambda(递归)
```
- [静态语言和动态语言的区别](https://www.cnblogs.com/raind/p/8551791.html)
```
静态语言（强类型语言）
静态语言是在编译时变量的数据类型即可确定的语言，多数静态类型语言要求在使用变量之前必须声明数据类型。 
例如：C++、Java、Delphi、C#等。

动态语言（弱类型语言）
动态语言是在运行时确定数据类型的语言。变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型。 
例如PHP/ASP/Ruby/Python/Perl/ABAP/SQL/JavaScript/Unix Shell等等。
```

- 类型系统
    - 动态类型系统和静态类型系统
    - 强类型与弱类型
    - 复合类型
    - 子类型
    - 范型
#### 4.一般命令语言设计层级
- Atom原子级
- Expression表达式
- Statement语句
- Structure结构化
- Program组织代码
#### 5.JS类型
- Number
```
单精度是1位符号，8位指数，23位小数。
双精度是1位符号，11位指数，52位小数。
小数用源码，并且隐藏小数最高位；指数用移码表示（+127/+1023）
```
- String
- Boolean
- Object
```
1.对象三要素:唯一标识、状态、行为
2.在设计对象的状态和行为时，我们总时遵循“行为改变状态”的原则。
class Human{
  hurt(damage){
  //根据对象的行为改变对象的状态原则，狗咬人，人的状态发生变化，人的行为抽象为受到伤害
 }
3.JavaScript 中的对象分类
宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。
内置对象（Built-in Objects）：由 JavaScript 语言提供的对象。
固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。
原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。
普通对象（Ordinary Objects）：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。

```
- Null
- Undefined
- Symbol