//把argument了转为真正的数组

var a={}
class A {
    constructor(){
        this.a=1
    }
    getA(){
        return this.a
    }
    setA(a){
        this.a=a
    }
}

Array.prototype.push.call(a,new A())
Array.prototype.push.call(a,'second')
console.log(a.length)
// a[0].setA(34)
console.log(a[0].getA())
