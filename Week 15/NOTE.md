### 学习笔记
#### 1. js动画
- 3种方案
    -  setInterval : 比较不可控， 容易发生积压，不管动作是否执行完，都是每隔16ms执行一次
        ```js
        setInterval(()=>{}, 16)
        ```
    - setTimeout : 比setInterval好，不会产生积压, 但是指定的16ms不一定和浏览器的刷新频率一致
        ```js
        let tick=()=>{
	        setTimeout(tick, 16)
        }
        ```
    - requestAnimationFrame :  现代浏览器推荐用法, 因为它完全根据浏览器的刷新频率来执行， 不需要使用16ms的延迟，
        ```js
        let tick=()=>{
	    requestAnimationFrame(tick)
        }
        //cancelAnimationFrame
        let handler = requestAnimationFrame(tick)
        cancelAnimationFrame(handler)
        ```
- 动画的分类
    -  属性动画： 通过修改dom对象的属性，让浏览器重新渲染产生的动画。
    -  帧动画： 手动绘制页面的每一帧，形成的动画。

