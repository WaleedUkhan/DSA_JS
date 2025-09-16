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

