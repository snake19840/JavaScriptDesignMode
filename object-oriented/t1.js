var extent=function(){
    var value=0
    return {
        call:function(){
            value++
            console.log(value)
        }
    }
}

console.log('------------------------------使用面向对象的方式写----------------------------------')
var extent=extent()
extent.call()
extent.call()
extent.call()

//面向对象的写法

class extent2{
    value=0
    call(){
        this.value++
        console.log(this.value)
    }
}
extent2=new extent2()
extent2.call()
extent2.call()
extent2.call()

console.log('------------------------------或是使用----------------------------------')

class extent3{
    value=0
}

extent3.prototype.call=function(){
    this.value++
    console.log(this.value)
}
extent3=new extent3()
extent3.call()
extent3.call()
extent3.call()