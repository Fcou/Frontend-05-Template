export function createElement(type,attributes,...children) {
    let element;
    if(typeof type === "string"){
        element = new ElementWrapper(type);
    }else{
        element = new type;
    }

    for(let name in attributes){
        element.setAttribute(name,attributes[name]);
    }

    for (const child of children) {
        if(typeof child === "string"){
            child = new TextWrapper(child);
        }
        element.appendChild(child);
    }
    
    return element;
}

export class Component{
    constructor(){
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    appendChild(child){
        child.mountTo(this.root);
    }
    mountTo(parent){
        //this.root = this.render();
        parent.appendChild(this.root);
    }
}

class TextWrapper extends Component{
    constructor(content){
        this.root = document.createTextNode(content);
    }
   
}

class ElementWrapper extends Component{
    constructor(type){
        this.root = document.createElement(type);
    }
    
}