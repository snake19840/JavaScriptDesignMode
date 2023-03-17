
const  div='-'*10
console.log(div)
class MyClass {
    name='seven'
}

const obj=new MyClass()
console.log(obj.name)

class MyClass2 {
    constructor(){
        this.name='seven'
        return {name:'anne'}
    }
}
const obj2=new MyClass2()
console.log(obj2.name)


class MyClass3 {
    constructor(){
        this.name='seven'
        return 'anne'
    }
}
const obj3=new MyClass3()
console.log(obj3.name)

//#region  call的使用
const obj4={
name:'seven',
getName(){return this.name}
}

var obj5={
    name:'anne'
}

console.log(obj4.getName())
console.log(obj4.getName.call(obj5))
//#endregion


//#region 丢失的this

console.log(`${div}丢失的this${div}`)
const obj6={
    name:'seven',
    getName(){return this.name}
    }
console.log(obj6.getName())
const getName2=obj6.getName
console.log(getName2())
//#endregion