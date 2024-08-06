//document.getElementById('abc').innerHTML=new Date()
//document.getElementById('abc').innerHTML=new Date().toLocaleTimeString()

setInterval(function(){
    document.getElementById('abc').innerHTML=new Date().toLocaleTimeString()
},1000)