let employees=[
    {id:101,name:"Rahul",sal:45000},
    {id:102,name:"Sonia",sal:55000}
]

let createEmployee = (emp)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
            let db_flag = true;
            db_flag ===true ?  resolve("Data Inserted"):reject("Failed")
            employees.push(emp);

     },4000)
})
}

let displayEmployee=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows = rows +`<tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                          </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    },1000)
}

let lunchTime = async()=>{
    await createEmployee({id:103,name:"Priya",sal:65000})
    displayEmployee()
}
lunchTime()