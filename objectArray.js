let gitBaba={name:"git baba",age:19,drinks:false}
console.log(gitBaba.name);
console.log(gitBaba.age);
console.log(gitBaba.drinks);    

let flower=["jasmine","marigold","tulip"]
console.log(flower[1])
let num=[1,2,3,4,5,6]
let square=num.map((num)=>num*num);
console.log(square);
let even=num.filter((num)=>num%2==0);
console.log(even);
let sum=num.reduce((acc,cur)=>acc+cur,0);
console.log(sum);
let arr=[{name:"git baba",age:19,drinks:false},{name:"satya",age:20,drinks:true},{name:"ram",age:18,drinks:false}];
console.log(arr);
let aged=arr.filter((person)=>person.age>17);
console.log(aged);