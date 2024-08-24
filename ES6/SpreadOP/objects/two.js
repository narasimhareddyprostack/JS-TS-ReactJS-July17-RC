let emp={ id:101,name:"Rahul",email:"rahul@gmail.com"}
let details={email:"rahul@ibm.com",loc:'wayanad'}
let emp_Details={}

for(key in emp){
    //console.log(key, emp[key])
    emp_Details[key] = emp[key]
}
for(key in details){
    emp_Details[key] = details[key]
}
console.log(emp_Details)