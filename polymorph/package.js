const myObject=(()=>{
    let _name='seven' //私有变量private
    return {
        getName:()=>_name,
    }
})()

console.log(myObject.getName())
console.log(myObject._name)