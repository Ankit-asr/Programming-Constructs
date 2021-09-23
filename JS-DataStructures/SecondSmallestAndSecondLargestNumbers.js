const MAX_RANDOM_NUMBERS = 10;
let numbers = new Array()

//Generate 10 random numbers and  store into Array
for(let index = 0; index < MAX_RANDOM_NUMBERS; index++){
    var number = Math.round(Math.random() * 100) + 1;
    numbers[index] = number;    
}
//Display Without Sorting
console.log("Without Sorting");
console.log("---------------");
console.log(numbers)

numbers.sort();
//Display After Sort
console.log("After Sorting");
console.log("---------------");
console.log(numbers)

let max = Math.max.apply(null, numbers);
numbers.splice(numbers.indexOf(max), 1); //removing largest

let small = Math.min.apply(null, numbers);
numbers.splice(numbers.indexOf(small), 1); //removing smallest

//Variables
let largestNumber = max;
let second_lar_num = Math.max.apply(null, numbers);
let smallest = small;
let secondSmallest = Math.min.apply(null, numbers);
//Display Output
console.log("------------------------------");
console.log("Largest Number : " + largestNumber);
console.log("Second Largest Number : " + second_lar_num);
console.log("------------------------------");
console.log("Smallest Number : " + smallest);
console.log("Second Smallest Number : " + secondSmallest);
console.log("------------------------------");