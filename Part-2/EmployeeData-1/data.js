let employees=[
    {id:101,name:"Rahul",sal:45000},
    {id:102,name:"Sonia",sal:55000},
    {id:103,name:"Priya",sal:65000},
    {id:104,name:"Modi",sal:75000},
]
function getEmployees(){
    let  rows=""
    let i=0;
    while(i<=employees.length-1){
            rows = rows + `<tr>
                            <td>${employees[i].id}</td>
                            <td>${employees[i].name}</td>
                            </tr>`
        i++
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
    //document.getElementsByTagName('tbody')[0].innerHTML="GM"
}