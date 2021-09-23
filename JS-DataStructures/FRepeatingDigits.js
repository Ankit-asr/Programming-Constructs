let repeatedNumbers = new Array();
let index = 0;
for(let i=10; i<=100; i++){
    let rem = i.toString()[0];     
    let quo = i.toString()[1];
    
    if(rem == quo){        
        repeatedNumbers[index] = i;
        index++;
    }   
}
console.log(repeatedNumbers);