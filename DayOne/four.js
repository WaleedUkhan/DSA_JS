let prompt = require("prompt-sync")();
let num = Number(prompt("Enter your Num:"));
// console.log(num);

// for (let i = 0; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")

//     }
//     console.log();
// }


//Centered triangle 

// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num - i; j++) {
//         process.stdout.write("  ")
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();

// }



// reverse Triangle 
// for(let i = num; i >= 1; i--) {
//     for(let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }



// Diamond Triagle 

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
        process.stdout.write("  ")
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        process.stdout.write("* ")
    }
    console.log();

}

for (let i = num - 1; i >= 1 ; i-- ) {
    for (let j = 1; j <= num - i; j++) {
        process.stdout.write("  ")
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        process.stdout.write("* ")
    }
    console.log();

}