// // Array Left Ratation By one element 

// let myArr = [11, 12, 13, 14, 15]; 
// let startIndex = myArr[0];

// for(let l =0; l < myArr.length-1; l++){
//     myArr[l] = myArr[l + 1];
// }

// myArr[myArr.length-1]= startIndex; 
// console.log(myArr);


// //Right Ratation by One element 

// let myArr = [11, 12, 13, 14, 15]; 
// let lastIndex= myArr[myArr.length-1];


// for(let l =myArr.length-1; l>0; l--){
//     myArr[l] = myArr[l - 1];
// }

// myArr[0]= lastIndex; 
// console.log(myArr);



// for(let j = 1; j <= 3; j++){
//     console.log(j  + " Time Execution ");

//     for(let i = 1; i <= 2; i++){
//         console.log("Han G");

//     }

// }


// // Left  Ratation by K elements 

// let arr = [1, 2, 3, 4, 5];
// let input = require('prompt-sync')();
// let num = Number(input("Enter num: "));
// // console.log(num);
// num = num % arr.length  // check for input num and array lenght if equal return no Loop 
// let count = 0; 

// for (let j = 0; j < num; j++) {
//     count++
//     let copy = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }

//     arr[arr.length - 1] = copy;
// }

// console.log(arr);
// console.log(count);



// // Right Ratation by K elements 

// let arr = [1, 2, 3, 4, 5];
// let input = require('prompt-sync')();
// let num = Number(input("Enter num: "));

// num = num % arr.length  
// let count = 0; 

// for (let j = 0; j < num; j++) {
//     count++
//     let copy = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }

//     arr[0] = copy;
// }

// console.log(arr);
// console.log(count);


// By using Better Alogorithm 
//  rotates the array to the left by num positions.
// let arr = [1, 2, 3, 4, 5];
// let input = require('prompt-sync')();
// let num = Number(input("Enter num: "));
// let temp = new Array(arr.length);

// num = num % arr.length

// for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i + num) % arr.length];
// }

// console.log(temp);


//  rotates the array to the Right by num positions.

let arr = [1, 2, 3, 4, 5];
let input = require('prompt-sync')();
let num = Number(input("Enter num: "));
let temp = new Array(arr.length);

num = num % arr.length

for (let i = 0; i < arr.length; i++) {
    // temp[i] = arr[(i - num) % arr.length]; 
    temp[(i + num) % arr.length] = arr[i] ;
}

console.log(temp);