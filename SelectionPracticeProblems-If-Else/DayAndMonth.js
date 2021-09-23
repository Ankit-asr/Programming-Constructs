readline = require("readline-sync");
let day = readline.question("Enter the Day : ")

let month = readline.question("Enter the Month : ")

if ( day > 20 && day <= 31 && month == "March" || month == "march")
{
    console.log("True");
}

else if ( day >= 1 && day <= 30 && month == "April" || month == "april")
{
    console.log("True");
}
else if ( day >= 1 && day <= 31 && month == "May" || month == "may")
{
    console.log("True");
}
else if ( day >= 1 && day <= 20 && month == "June"  || month == "june")
{
    console.log("True");
}
else 
    console.log("False");