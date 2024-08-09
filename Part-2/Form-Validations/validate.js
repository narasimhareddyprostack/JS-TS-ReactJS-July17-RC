function validate(){
    //alert('Test Case 123')
    let userName= document.getElementById('uName').value;
    let password= document.getElementById('password').value;

    if(userName ===''){
        //alert('Please Enter User Name')
        //update span tag
        document.getElementById('unMsg').innerHTML="Please Enter Name"
    }
    if(password===""){
        //update span tag
        document.getElementById('upMsg').innerHTML="Please Enter Password"
    }
    console.log({name:userName,password:password})
    return false;
}