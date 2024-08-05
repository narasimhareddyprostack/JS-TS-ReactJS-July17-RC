function changeColor1(){
    document.getElementById('btn1').style.backgroundColor="green"
}
function changeColor2(){
    //alert('Test Case 123')
    //document.getElementsByTagName('button')[1].innerHTML="Test Case 123"
    document.getElementsByTagName('button')[1].style.backgroundColor="yellow"
}
function changeColor3(){
    document.querySelector('.alia').style.backgroundColor="blue"
}
function changeColor4(){
    //alert('Test case 123')
    document.getElementById('inputTag').style.backgroundColor="yellow"
}

function changeCase(){
    let userName=document.getElementById('blurEx').value;
    //alert(userName)
    document.getElementById('blurEx').value=userName.toUpperCase();
}