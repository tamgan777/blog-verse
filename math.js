function add(a, b) {
  return a + b;   
}
console.log(add(5, 10));
function subtract(a, b) {
   return a - b;
}
 console.log(subtract(10, 5));
function multiply(a, b) {
  return a * b;
}  console.log(multiply(5, 10));
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
   console.log(divide(10, 5));
}
function square(a) {
 return a * a; 
} console.log(square(5)); 
function power(a, b) {
return a ** b;
}   console.log(power(20, 3)); 

export { add, subtract, multiply, divide, square, power };