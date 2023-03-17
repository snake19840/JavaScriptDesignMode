const func=(a,c,b)=>{
    console.log(this)
    console.log([a,b,c,b]);
}
//第一个参数是函数体内的this指向
func.apply(null,[1,2,3])
func.call(null,1,2,3)

const obj1={
    name:'sven'
}
const obj2={
    name:'anne'
}

this.name='windows'

function getName(){return console.log(this.name)}
// const getName=()=>{return console.log(this.name)}

getName()
getName.call(obj1)
getName.call(obj2)