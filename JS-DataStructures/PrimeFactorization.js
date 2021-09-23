readline=require("readline-sync")
let num=readline.question("Enter the number : ")

//Method to Get Prime Factors of a Number
function primeFactors(num){
    var factors = [], 
        divisor = 2;
    
    while(num>=2){
      if(num % divisor == 0){
         factors.push(divisor); 
         num= num/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
}
//Function Calling
factors = primeFactors(num);
//Display output
console.log(factors);