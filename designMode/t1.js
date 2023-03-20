//借用其它对象的方法
var A=function(name){
    this.name=name;
}


var B =function(){
    A.apply(this,arguments);
}


 B.prototype.getName=function(){
    return this.name
}

var b=new B('seven')
console.log(b.getName())
