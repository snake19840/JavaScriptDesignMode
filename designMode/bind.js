Function.prototype.bind=function(context){
    const self = this
    return function () {
        return self.apply(context, arguments)
    }
}

const obj={
    name:'seven'
}

const func=function(){
console.log(this.name)
}.bind(obj)

func()