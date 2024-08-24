let state={
    emp:{ 
        id:101,
        name:"Rahul",
        sal:45000
    },
    product:{
        p_Name:"Samsumg Galaxy",
        price:65000
    }
}

let {emp} = state;
let {name} = emp
console.log(name)  //read object property like a variable

//console.log(state.emp.name)
