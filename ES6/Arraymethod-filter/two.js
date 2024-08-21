let numbers=[1,2,3,4,5,6,7,8,9,10]

let even_Numbers=numbers.filter((num)=>{
    return num % 2 ===0;
})

console.log(even_Numbers)