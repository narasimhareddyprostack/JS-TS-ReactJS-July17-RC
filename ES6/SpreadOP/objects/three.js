let emp={ id:101,name:"Rahul",email:"rahul@gmail.com"}
let details={email:"rahul@ibm.com",loc:'wayanad'}
let emp_Details={...emp, ...details}


console.log(emp_Details)