const makeSound=(animal)=>{
if(animal instanceof Duck) console.log('gagaga')
else if (animal instanceof Chicken) console.log('gegege')

}

const Duck = function(){}
const Chicken = function(){}

makeSound(new Duck())
makeSound(new Chicken())

