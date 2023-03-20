//往argument中添加一个新的元素

(function(){
    Array.prototype.push.call(arguments,3)
    console.log(arguments) //输出[1,2,3]
})(1,2); 