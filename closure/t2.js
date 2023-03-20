//变量的生命周期
//var 关键字声明的局部变量会随着函数调用的结束而被销毁

var func=function(){

    var a=1
    console.log(a)
}
func()

console.log('--------------------------------')

var func1=function(){
    var a=1
    return function(){
        a++
        console.log(a)
    }
}
var f=func1()
f()
f()
f()
f()