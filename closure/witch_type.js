var Type={}
for (var i=0 ,type;type=['String','Number','Array'][i++];){
    (function(type){
        Type['is'+type] = function(obj){
            return Object.prototype.toString.call(obj) === '[object '+type+']';
        }
    })(type)
}

// 测试Type对象的isArray方法
console.log(Type.isArray([]))//true
console.log(Type.isArray([1,2,3]))
//true
console.log(Type.isArray({}))//
//false
console.log(Type.isArray('str'))//
//false
console.log(Type.isArray(123))//false
console.log(Type.isArray(true))//false
console.log(Type.isArray(null))//
// false
console.log(Type.isArray(undefined))//
// false





