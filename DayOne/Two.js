let num = require("prompt-sync")();
let myNum = Number(num("Enter your Number: "));
console.log(`My entered num is : ${myNum}`);

// for(let i = 1 ; i<= myNum; i++){
//     for(let j=1; j<=myNum; j++){
//         process.stdout.write("*  "); 
//     }
//     console.log();
// }


// for(let i = 1 ; i<= myNum; i++){
//     for(let j=1; j<=i ; j++){
//         process.stdout.write("*  "); 
//     }
//     console.log();
// }


// for(let i = 1 ; i<= myNum; i++){
//     for(let j=1; j<=i ; j++){
//         process.stdout.write(j + " "); 
//     }
//     console.log();
// }

// for(let i = 1 ; i<= myNum; i++){
//     let char = 65; 
//     for(let j=1; j<=i ; j++){
//         process.stdout.write(String.fromCharCode(char) + " "); 
//         char++
//     }
//     console.log();
// }

// for(let i = myNum ; i >= 1 ; i--){
//     console.log(i); 
// }


// Method ONE

for(let i = 1 ; i <= myNum ; i++){
    for(let j = myNum; j >= i ; j--){
         process.stdout.write("*  "); 
    }
    console.log(); 
}


