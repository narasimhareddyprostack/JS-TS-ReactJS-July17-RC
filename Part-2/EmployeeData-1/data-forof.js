let employees=[
    {id:101,name:"Rahul",sal:45000},
    {id:102,name:"Sonia",sal:55000},
    {id:103,name:"Priya",sal:65000},
    {id:104,name:"Modi",sal:75000},
]
function getEmployees(){
    let rows=""
    for(emp of employees){
        rows= rows + `<tr>  
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
                      </tr>`
    }
   
    document.getElementsByTagName('tbody')[0].innerHTML=rows
    //document.getElementsByTagName('tbody')[0].innerHTML="GM"
}