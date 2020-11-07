var dragable = document.getElementById('dragable')
var baseX = 0,
    baseY = 0

//mousedown后再去监听mousemove 和 mouseup 
dragable.addEventListener('mousedown', event => {
    var startX = event.clientX
    var startY = event.clientY
    const move = event => {
        var nearest = getNearest(event.clientX, event.clientY)
        nearest.insertNode(dragable) // 3.将元素插入到该节点中，默认移除原元素
    }
    const up = event => {
        baseX = baseX + event.clientX - startX
        baseY = baseY + event.clientY - startY
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
    }
    //使用document，移出浏览器也能监听到
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
})

var container = document.getElementById('container')
var ranges = [] //存储ragne节点
// 1.遍历文字内容，找到所有的range节点
for (var i = 0; i < container.childNodes[0].textContent.length; i++) {
    var range = document.createRange()
    range.setStart(container.childNodes[0], i)
    range.setEnd(container.childNodes[0], i)
    ranges.push(range)
}
// 2.通过坐标(x,y)，找到所有节点中离其最近的range节点
function getNearest(x, y) {
    let min = Infinity
    let nearest = null
    for (var range of ranges) {
        var rect = range.getBoundingClientRect() //Range.getBoundingClientRect() 返回一个 DOMRect 对象，该对象将范围中的内容包围起来；即该对象是一个将范围内所有元素的边界矩形包围起来的矩形
        var distance = (rect.x - x) ** 2 + (rect.y - y) ** 2
        if (distance < min) {
            min = distance
            nearest = range
        }
    }
    return nearest
}

document.addEventListener('selectstart', event => event.preventDefault())