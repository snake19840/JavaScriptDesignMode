var mult=function(){
    var a=1
    for(var i=0,l=arguments.length;i<l;i++){
        a=a*arguments[i]
    }
    return console.log(a)
}
    
mult(1,2,3,4,5)

console.log('------------------------')
var cache={}
var mult2=function(){
    var args=Array.prototype.join.call(arguments,',')
    
    if(cache[args]){
        return console.log(cache[args]) 
    }
    console.log(args)
    var a=1
    for(var i=0,l=arguments.length;i<l;i++){
        a=a*arguments[i]
    }
      cache[args]= a
      return console.log(cache[args])

}

mult2(1,2,3)
mult2(1,2,3)

// 防止cache被其它代码修改
console.log("================防止cache被其它代码修改================")
var mult3 =(function(){
    var cache={}
    return function(){
    var args=Array.prototype.join.call(arguments,',')
    
    if(cache[args]){
        return console.log(cache[args]) 
    }
    console.log(args)
    var a=1
    for(var i=0,l=arguments.length;i<l;i++){
        a=a*arguments[i]
    }
      cache[args]= a
      return console.log(cache[args])

}
})()

mult3(1,2,3)
mult3(1,2,3)

console.log("================封装calculate函数================")

var mult4=(function(){
    var cache={}
    var calculate=function(){
        var a=1
    for(var i=0,l=arguments.length;i<l;i++){
        a=a*arguments[i]
    }
    return a
    }

    return function(){
    var args=Array.prototype.join.call(arguments,',')
   
    if(args in cache){
        return console.log(cache[args]) 
    }
    console.log(args)
    cache[args]= calculate.apply(null, arguments)
    return console.log(cache[args])
    }

})()

mult4(1,2,3)
mult4(1,2,3)

