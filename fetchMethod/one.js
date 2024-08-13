fetch('https://dummyjson.com/carts')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    //console.log(typeof data)
    console.log(data)
})
.catch((err)=>{
    console.log(err.message)
})