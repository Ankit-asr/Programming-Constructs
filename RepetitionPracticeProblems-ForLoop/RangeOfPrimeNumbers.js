readline=require("readline-sync")
let low=readline.question("Enter the lower limit :")
let up=readline.question( "Enter the upper limit :")
console.log( "The  prime  numbers are :" );            
for (let i=low; i <= up; i++ )
{
    let flag=0;
    for ( let j=2; j <= i; j++ )
    {
        if ( i % j == 0 )
            flag = flag+1;
    }
    if  (flag == 1 )
    console.log(i);
}