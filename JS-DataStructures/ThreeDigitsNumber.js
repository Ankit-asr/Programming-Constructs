const MAX_RANDOM_NUMBERS = 10;
let numbers = new Array()

//Generate 10 random numbers and  store into Array
for(let index = 0; index < MAX_RANDOM_NUMBERS; index++){
    var number = Math.round(Math.random() * 100) + 1;
    numbers[index] = number;    
}
console.log(numbers)

//Variables
let maximumNumber = 0
let second_max_num = 0
let smallest = numbers[0]
let secondSmallest = numbers[0]
let tempNum = 0
let tempNum1 = 0

//Find Largest and Smallest
for(let index=0; index<MAX_RANDOM_NUMBERS; index++){
    if(maximumNumber < numbers[index] ){
        maximumNumber = numbers[index]
        tempNum = index
    }
    if(smallest > numbers[index]){
        smallest = numbers[index]
        tempNum1 = index
    }
}
//Find Second Largest and Second Smallest
for(let index=0; index<MAX_RANDOM_NUMBERS; index++){
    if(index == tempNum){
        //Ignoring Maximum Number
    } else if(second_max_num < numbers[index] ){
            second_max_num = numbers[index]                    
    }

    if(index == tempNum1){
        //Ignoring Smallest Number
    } else if(secondSmallest > numbers[index] ){
            secondSmallest = numbers[index]                    
    }
}
//Display Output
console.log("------------------------------");
console.log("Largest Number : " + maximumNumber);
console.log("Second Largest Number : " + second_max_num);
console.log("------------------------------");
console.log("Smallest Number : " + smallest);
console.log("Second Smallest Number : " + secondSmallest);
console.log("------------------------------");