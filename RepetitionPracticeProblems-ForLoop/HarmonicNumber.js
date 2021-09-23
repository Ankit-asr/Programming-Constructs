readline=require("readline-sync")
let n =readline.question("Enter a number" )
let sum=0
for (let i=1; i <= n; i++ )
    div=1/i;
    sum=sum + div
console.log("Sum is : " +sum);