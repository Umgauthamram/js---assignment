//recursive function to find factorial of a number
const number = prompt("enter the value:");
function factorial(x) {
    if (x === 0 ) {
        return 1;
    }
    return x * factorial(x - 1);
}
console.log(factorial(number));


//recursive function to find sum series
const number2 = prompt("enter the value: ")
function sum(z){
    if  (z === 0){
    return 0 
}
return z+sum(n-1)
}
console.log(number2)

// anyonomous function to sort the array in ascending order
const input = prompt("enter the value: ")
const array = input.split('.');
array.sort(function(a,b){
    return a-b;
});
console.log(array)

//IIFE to take two numbers and return sum
const sum = (function(){
    const x = parseFloat(prompt("enter first value: "))
    const y = parse(prompt("enter second value: "))
    return x+y;
})();
console.log(sum)