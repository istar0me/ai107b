// loop
var sum = 1;
function factorial(n) {
    for(i = 1; i <= n; i++) {
       return sum * n; 
    }
}
console.log(factorial(3)) // 6

// recursion
function factorialR(n) {
    if(n <= 1) {
        return 1;
    } else { 
        return n*factorialR(n-1);
    }
}
console.log(factorialR(5)) // 120