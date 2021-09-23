const lengthOfArray = 5;
let numbers = new Array();
for (let i = 0; i < lengthOfArray; i++)
{
    numbers[i] = Math.floor(Math.random() * 100) + 1 ;
}
console.log("Random generated numbers are :" +numbers);

let minimumNumber = numbers[0];
let maximumNumber = numbers[0];

for (let j = 0; j < lengthOfArray; j++)
{
    if(minimumNumber > numbers[j])
    {
        minimumNumber = numbers[j];
    }
    if(maximumNumber < numbers[j])
    {
        maximumNumber = numbers[j];
    }        
}
console.log("Maximum Number is " + maximumNumber);
console.log("Minimum Number is " + minimumNumber);