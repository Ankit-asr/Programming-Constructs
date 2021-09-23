var numbers = [0, -1, 2, -3, 1];
var numbersLength = numbers.length; //length of an array
findTriplets(numbers, numbersLength);

function findTriplets(numbers, numbersLength){        
    for (let i = 0; i < numbersLength-2; i++)
    {
        for (let j = i+1; j < numbersLength-1; j++)
        {
            for (let k = j+1; k < numbersLength; k++)
            {
                if (numbers[i] + numbers[j] + numbers[k] == 0)
                {
                    console.log("--------------------");
                    console.log(numbers[i]+" + "+numbers[j]+" + "+numbers[k] +" = 0");
                    console.log("--------------------");                    
                   
                }
            }
        }
    }
}