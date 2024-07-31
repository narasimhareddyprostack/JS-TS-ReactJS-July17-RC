function outer(){
    console.log("GM")
    function inner(){
        console.log("GA")
    }
    inner()
}
outer();
