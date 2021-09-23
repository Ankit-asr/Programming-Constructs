readline=require("readline-sync")
let number = readline.question("Enter a Number ")
let result;
for(let i=1; i<=number; i++)
{
    result = Math.pow(2, i)
    console.log("2 ^ "+ i +" : " + result)
}