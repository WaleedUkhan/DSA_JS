// Array Left Ratation By one element 

let myArr = [11, 12, 13, 14, 15]; 
let startIndex = myArr[0];

for(let l =0; l < myArr.length-1; l++){
    myArr[l] = myArr[l + 1];
}

myArr[myArr.length-1]= startIndex; 
console.log(myArr);


//Right Ratation by One element 

let myArr = [11, 12, 13, 14, 15]; 
let lastIndex= myArr[myArr.length-1];


for(let l =myArr.length-1; l>0; l--){
    myArr[l] = myArr[l - 1];
}

myArr[0]= lastIndex; 
console.log(myArr);