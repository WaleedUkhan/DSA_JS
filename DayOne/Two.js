let num = require("prompt-sync")();
let myNum = Number(num("Enter your Number: "));
console.log(`My entered num is : ${myNum}`);

for(let i = 1 ; i<= myNum; i++){
    for(let j=1; j<=myNum; j++){
        process.stdout.write("*  "); 
    }
    console.log();
}