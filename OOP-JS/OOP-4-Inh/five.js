class Parent{
    constructor() {
        console.log("Parent Class -constructor")
    }
    m1(){
        console.log("Parent class - m1() method")
    }
}
class Child extends Parent{
    constructor(){
        super();
        console.log("Child Class - constructor method")
    }
    m2(){
        console.log("Child class m2() method");
    }
}
let c1=new Child()