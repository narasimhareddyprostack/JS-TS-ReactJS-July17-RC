let numbers=[1,2,3,4,5,6,7,8,9,10]

let even_Numbers=[]
for( num of numbers){
    if(num%2 ===0)
        even_Numbers.push(num)
}

console.log(even_Numbers)