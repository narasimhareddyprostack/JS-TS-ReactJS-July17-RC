class Parent{
    m1(){
        console.log("Parent class  -m1 method");
    }
    m2(){
        console.log("Parent class  -m2 method");
    }
}
class Child {
    m3(){
        console.log("Child class  -m3 method");
    }
}
let c1 = new Child();
c1.m1()
c1.m2()
c1.m3()
