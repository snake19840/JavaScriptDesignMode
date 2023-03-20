// var let const 在函数外是访问不到的

var func=function(){
    var a=1
    let b=2
    const c=3
    console.log(a)
    console.log(b)
    console.log(c)
}
func()
console.log('----------------------------------------------------')

var a=1
var func1=function(){
    var b=2
    var  func2=function(){
        var c=3
        console.log(b)
        console.log(a)
    }
    func2()
    // console.log(c)
}
func1()