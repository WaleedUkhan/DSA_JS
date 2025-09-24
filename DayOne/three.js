let num = require("prompt-sync")();
let n = Number(num("Enter your Number: "));

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j<= n-i; j++){
//         process.stdout.write("  ");
//     }
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(" *");
//     }
//     console.log();

// }


// X pattern Logic --Only Possible for Odd Numbers 

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (i == j || i + j == n + 1) {
//             process.stdout.write("* " );
//         }
//         else {
//             process.stdout.write("  ");
//         }
//     }
//     console.log();

// }


// V Pattern 


for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2*n-1; j++) {
        if (i == j || i + j == 2*n) {
            process.stdout.write("* " );
        }
        else {
            process.stdout.write("  ");
        }
    }
    console.log();

}
