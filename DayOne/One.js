let fruits = ["Apple", "Banana", "Mango", "Lemon"]; 
fruits.push("Orange", "WaterMelon"); 
for(let i=0; i < fruits.length; i++){
    // console.log(i + " "); // printing with new line. 
    process.stdout.write(i + " "); // printing in One line 
}
console.log(fruits[1]); 
console.log(fruits.length); 
console.log(fruits.indexOf("Orange")); 
console.log(fruits.indexOf("Orange")); 
fruits.pop();
console.log(fruits);

//Console.log is a window function 
// while process.stdout.write is NodeJs function 
// ctrl + ~ Opens terminal for NodeJS 
// Prompt() Opens box for windows but what for NodeJS? 
// for opening that input box in terminal we need to install this package: prompt-sync and wil need to require it in code

let inputBox = require('prompt-sync')();
let myBox = inputBox("Enter your Age: "); 
// console.log(myBox);
 process.stdout.write("Your Age is  ", myBox);
