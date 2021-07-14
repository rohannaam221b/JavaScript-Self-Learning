let arr = ["Rohan", "Rao"]
let object = {
  name: "rohan",
  city: "Mumbai",

  getIntro: function () {
    console.log(this.name + " from " + this.city)
  },
}

let object2 = {
  name: "Jordan",
}
// Never Do this
// object2.__proto__ = object

//whenever you create a JS object, JS engine automatically attaches your object with
//some hidden properties and function and attaches a object to your original
//object .
//Prototype of array prototype is object prototype
//and object prototype is null
//Everything in javascript is object

// if you bind any method to function using proptype you can use it
//whenever in your code.
//example in that mybind()
//Function.prototype.mybind()= function(){
//console.log("bweub");
//}
//function fun(){

//}
//in console i can use like fun.mybind() also.. thats what prototype is

// and inheritance is like one object can access method of another object...
