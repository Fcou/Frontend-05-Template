class People {
    constructor(){
        this.HP = 100
    }
    hurt(damage){
        this.HP -= damage
    }
}

class Dog{
    constructor(){
        this.damage = 10
    }
    doHurt(){
        return this.damage
    }
}

const zhangsan = new People()
const duoduo = new Dog()
zhangsan.hurt(duoduo.bite())



