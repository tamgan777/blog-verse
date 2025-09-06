let marks=59;
if(marks>90){
    console.log("A+");
}  
else if(marks>80){
    console.log("A");
}   
else if(marks>70){
    console.log("B+");
}   
else if(marks>60){
    console.log("B");
}
else if(marks>50){   
    console.log("C");
}
else{
    console.log("Fail");
}
let day=7;
switch(day){
    case 1:
        console.log("Monday");  
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");    
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
let i=10,j=10,n;
n=5;
for(i=1;i<=n;i++){
    let str="git baba is on the way";
    console.log(str);
}
while(j<=10)
{
    console.log("git baba rock on the floor ");
    j++;
}
do{
    console.log("git baba is the best");
    j++;
}
while(j<=10);
//array of string
 let colors=["red","blue","green","yellow"];
 for(let color of colors){
    console.log(color);     
 }
 let git_baba={name:"git baba",age:19,drinks:false};
 for(let key in git_baba){
    console.log(key,git_baba[key]);
 }
 