const Plan=function(){
    this.blood=100
    this.attackLevel=1
    this.defenseLevel=1
}

const plan=new Plan()
plan.blood=500
plan.attackLevel=10
plan.defenseLevel=7

const clonePlan=Object.create(plan)

//#region 在不支持Object.create方法的浏览器中,可以使用下面的代码:
// 
// Object.create=Object.create||function(obj){
//     const F=function(){}
//     F.prototype=obj
//     return new F()
// }
//#endregion

console.log(clonePlan.blood)
console.log(clonePlan.attackLevel)
console.log(clonePlan.defenseLevel)


class Person{
    //构造函数
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name
    }
}



const a= new Person('seven')

console.log(a.name)
console.log(a.getName())
console.log(Object.getPrototypeOf(a)===Person.prototype)

class Hobby extends Person{
    constructor(name){
        super(name)
        this.play='我要玩'
    }
    getPaly(){
        return this.play
    }
}
const b=new Hobby('six')
console.log(b.name)
console.log(b.getPaly())