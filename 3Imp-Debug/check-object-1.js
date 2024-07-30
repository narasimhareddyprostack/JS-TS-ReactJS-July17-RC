let user={}
let emp={ id:101,name:"rahul"}
//how to check given object is empty or not?
console.log(Object.keys(user))  //[]
console.log(Object.keys(emp))   //[id,name]

console.log(Object.keys(user).length)  //0
console.log(Object.keys(emp).length)   //2

console.log(Object.keys(user).length > 0)  //false
console.log(Object.keys(emp).length > 0)   //true