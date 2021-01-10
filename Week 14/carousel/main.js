import { Component, createElement } from "./framework.js";

class Carousel extends Component {
    constructor() {
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    render() {
        this.root = document.createElement("div");
        this.root.classList.add("carousel");
        for (const record of this.attributes.src) {
            let child = document.createElement("div");
            child.style.backgroundImage = `url('${record}')`;
            this.root.appendChild(child);
        }

        let position = 0;

        this.root.addEventListener("mousedown", event => {
            let children = this.root.children;
            let startX = event.clientX;

            let move = event => {
                let x = event.clientX - startX;

                let current = position - ((x - x % 500) / 500);
                for (const offset of [-1, 0, 1]) {
                    let pos = current + offset;
                    pos = (pos + children.length) % children.length;

                    children[pos].style.transition = "none";
                    children[pos].style.transform = `translateX(${- pos * 500 + offset * 500 + x % 500}px)`;
                }
            }
            let up = event => {
                let x = event.clientX - startX;
                position = position - Math.round(x / 500);
                for (const offset of [0, - Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]) {
                    let pos = position + offset;
                    pos = (pos + children.length) % children.length;

                    children[pos].style.transition = "";
                    children[pos].style.transform = `translateX(${- pos * 500 + offset * 500}px)`;
                }
                document.removeEventListener("mousemove", move);
                document.removeEventListener("mouseup", up);
            }

            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);
        })
        // 手动拖放
        let position = 0;

        this.root.addEventListener("mousedown", event => {
            let children = this.root.children;
            let startX = event.clientX;

            let move = event => {
                let x = event.clientX - startX;
                for (const child of children) {
                    child.style.transition = "none";
                    child.style.transform = `translateX(${- position * 500 + x}px)`;
                }
            }
            let up = event => {
                let x = event.clientX - startX;
                position = position - Math.round(x / 500);
                for (const child of children) {
                    child.style.transition = "none";
                    child.style.transform = `translateX(${- position * 500}px)`;
                }
                document.removeEventListener("mousemove", move);
                document.removeEventListener("mouseup", up);
            }

            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);
        })


        //自动播放
        let currentIndex = 0;
        setInterval(() => {
            let children = this.root.children;
            let nextIndex = (currentIndex + 1) % children.length;

            let current = children[currentIndex];
            let next = children[nextIndex];

            next.style.transition = "none";
            next.style.transform = `translateX(${100 - nextIndex * 100}%)`;

            setTimeout(() => {
                next.style.transition = "";
                current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
                next.style.transform = `translateX(${- nextIndex * 100}%)`;

                currentIndex = nextIndex;
            }, 16);
            console.log("currentIndex", currentIndex);
            console.log("nextIndex", nextIndex);

        }, 3000);
        return this.root;
    }
    mountTo(parent) {
        parent.appendChild(this.render());
    }
}


let d = [
    "https://static001.geekbang.org/resource/image/00/af/0034bb08ffe2cc55d6db7dd00c792faf.jpg",
    "https://static001.geekbang.org/resource/image/89/cc/89670d0668f9560e29af3a104d4255cc.jpg",
    "https://static001.geekbang.org/resource/image/92/c3/92403cb1e86cb793c93502ae7ee0b0c3.jpg",
    "https://static001.geekbang.org/resource/image/0c/ae/0c372f5f0a366d9e310b58b88f6912ae.jpg"
]

let a = <Carousel src={d} />

a.mountTo(document.body);