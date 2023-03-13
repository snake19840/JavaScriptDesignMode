//对象的多态

const makeSound=(animal)=>{
animal.sound()

}

const Duck = function(){}

Duck.prototype.sound=()=>{
    console.log('gagagaga')
}

const Chicken=function(){}  

Chicken.prototype.sound=()=>{
    console.log('gegegege')
}


makeSound(new Duck())
makeSound(new Chicken())