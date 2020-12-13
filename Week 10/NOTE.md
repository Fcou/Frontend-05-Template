### 学习笔记
#### 回顾实现一个toy browser的简略步骤：
* 开始：URL->HTTP
* HTML->parse
* DOM->CSS computing
* DOM with CSS -> layout
* DOM with position-> render
* 最终：Bitmap

##### 如何排版
###### 第一步：根据浏览器属性进行排版
* 浏览器排版技术大概分成三代
    * 1.正常流（Normal Flow），代表是 display: block、display: inline-block、display: inline、position: absolute、position: relative、float、clear。
    * 2.弹性布局（Flexiable Box Layout），就是 display: flex。
    * 3.网格布局（Grid Layout），就是 display: grid。
* 这几代的排版方式都是以 display 的不同值来控制的。然后我们实现了 flex 的排版方式，是以 element 为单位给每个 element 都计算了具体的位置，其实在 CSS 中排版的基本单位是「文字」和「Box（盒）」。
###### 第二步：分行，收集元素进row
* 根据主轴尺寸，把元素分进行
* 若设置了no-wrap，则强行分配进第一行 当元素所有子元素的尺寸超过父元素的主轴尺寸的时候，就会进行分行。把flex容器的子元素flex item，把它收进各个行里
###### 第三步：计算主轴
* 找出所有flex元素
* 把主轴方向的剩余尺寸按比例分配给这些元素
* 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
###### 第四步：计算交叉轴
* 根据每一行中最大元素尺寸计算行高
* 根据行高flex-align和item-align，确定元素具体位置

##### 如何渲染
###### 第一步：绘制单个元素
* 绘制需要依赖一个图形环境
* 采用npm包images
* 绘制在一个viewport上进行
* 与绘制相关的属性：background-color、border、background-image等。gradient需要WebGL相关的库来处理
###### 第二步：绘制DOM树
* 递归调用子元素的绘制方法完成DOM树的绘制
* 忽略一些不需要绘制的节点
* 实际浏览器中，文字绘制是难点，需要依赖字体库，把字体变成图片去渲染
* 实际浏览器中，还会对一些图层做compositing