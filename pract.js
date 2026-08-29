// BASIC QUE ON VARIABLES

// 1. Create a variable called `studentName` and store your name in it.

// var studentName = prompt("Enter your name");
// console.log(studentName);



// 3. Create two variables and swap their values.
// let a=10;
// let b=20;
// let temp;

// temp = a
// a = b;
// b = temp;

// console.log(`value of a is ${a}`);
// console.log(`value of a is ${b}`);


// 4. Create a constant variable for `PI` and print it.
// const pi = 3.14
// console.log(pi);

// 5. Declare a variable without assigning a value and print it.
// var a
// console.log(a);


// 6. Create a variable `score` and increase it by 10.
// var score =0
// score += 10
// console.log(score);

// 7. Create three variables for first name, last name, and full name.
// var first_name = prompt("Enter your first name")
// var middle_name = prompt("Enter your middle name")
// var last_name = prompt("Enter your last name")

// var full_name = first_name +" "+ middle_name +" "+ last_name
// console.log(full_name);




// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
// var  a ="50"
// var a2 = Number(a)
// console.log (a2);
// console.log(typeof(a2));




// 2. Convert the number `100` into a string.

// 3. Convert `"true"` into a boolean.
// var a= "true"
// a=Boolean(a)
// console.log(a);

// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`

// var a = "5"+2
// var b = "5"-2
// var c = true+1

// console.log(a);
// console.log(b);
// console.log(c);


// 1. Create a variable with value `"123abc"` and convert it into a number.
// var a = "123abc"
// var num = Number(a)

// console.log(num);

// 2. Use `parseInt()` on `"500px"`.
// var a = "500px";
// var num = parseInt(a);

// console.log(num);



// ## Strings

// 1. Create a string and print its length.
// 2. Convert a string into uppercase.
// 3. Convert a string into lowercase.

// var a = "Nihir"
// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());


// 4. Check if a string includes the word `"JavaScript"`.
// var text = " I Love JavaScript"
// console.log(text.includes("JavaScript"));


// 5. Extract the word `"World"` from `"Hello World"`.
// var a = "Hello World"
// console.log(a.substring(5,11));


// 6. Replace `"apple"` with `"mango"` in a sentence.
// var a = "apple"

// console.log(a.replace("apple","mango"));

// 7. Split `"HTML,CSS,JS"` into an array.

// 8. Remove extra spaces from a string.

// 9. Repeat the word `"Hi"` 5 times.

// 10. Print the first character of a string.

// 11. Use template literals to print:`"My name is Aman and I am 20 years old"` 




// EXTRA PRACTICE SESSION QUE 

// Arrays
// Question 1 (Easy) — Find Expensive Products
// Create a new array containing only prices greater than 300.



// let prices= [100,250,500,150,700];

// var arr2= prices.filter(function(prices){
//     return prices>300
// })

//     console.log(arr2);      
    

// Question 2 (Moderate) — Student Average
// Calculate the average marks of all students.

// let marks= [80,90,70,85,95];


// var total_marks = marks.reduce(function(acc,elem){
//     return acc + elem   
// },0)

// var avg = total_marks/marks.length

// console.log(avg);



// Question 3 (Hard) — Most Frequent Number
// Find the number that appears the most.


// var numbers= [1,2,3,2,4,2,5,1,1,1];

// var repeated = numbers.reduce(function(acc,elem){
//     if(acc[elem]){
//     acc[elem]++
//     }else{
//     acc[elem]= 1
//     }
//         return acc;
// },{});

// var max = 0;
// var highest;

// for (var key in repeated) {
//     if (repeated[key] > max) {
//         max = repeated[key];
//         highest = key;
//     }
// }

// console.log(highest);



// 🟢 Objects
// Question 4 (Easy) — Update User Age


// letuser= {
// name:"Ritik",
// age:20
// };

// letuser.age=21

// console.log(letuser);


// Print User Information using loop


// with using for...in
// var user= {
// name:"Ritik",
// age:20,
// city:"Bhopal"
// };

// for(var details in user){
//     console.log(details,user[details]);
// }


// second way with using for...of
// var user = {
//     name: "Ritik",
//     age: 20,
//     city: "Bhopal"
// };

// for (var [key, value] of Object.entries(user)) {
//     console.log(key, value);
// }




// highest paid employee

// let employees = {
//     aman:25000,
//     ritik:50000,
//     priya:45000
// }
// var highest_salary = Object.entries(employees).reduce(function(acc,elem){
//     if (acc[1]>elem[1]){
//         return acc
//     }else{
//         return elem
//     }

// },["",0])
// console.log(highest_salary);






// 🟢 Functions
// Question 7 (Easy) — Greeting Function
// Create a function:


// var greet = function(g){
//     console.log(g);
    
// }
// greet("Hello MR.Nihir")



// Discount Calculator
// Create a function:
// calculateDiscount(price)

// function calculateDiscount(price) {
//     return price - price * 0.1;
// }

// var p = Number(prompt("Enter your price:"));

// console.log(calculateDiscount(p));




// Dynamic Sum Function(****)
// Functions
// Rest Parameters
// reduce()

// function sum(...elem) {
//     return elem.reduce(function(acc, value) {
//         return acc + value;
//     }, 0);
// }

// console.log(sum(2, 3));





// Arrays + Objects + Functions Together
// These are the most important because real projects use all three together.

// 🟢Arrays 7

// Question 10 (Easy) — Find Adult Users
let users= [
{ name:"Ritik", age:20 },
{ name:"Aman", age:16 },
{ name:"Priya", age:25 }
];


var Adult = users.filter(function(users){
    return users.age>18

})

console.log(Adult);




// Shopping Cart Total
// Array of objects
// Functions
// reduce()

let cart= [
{ name:"Mouse", price:500, qty:2 },
{ name:"Keyboard", price:1000, qty:1 },
{ name:"Monitor", price:10000, qty:1 }
];



var bill = cart.reduce(function(acc,elem){
        return acc + elem.price * elem.qty
    },0)

console.log(bill)




// Question 12 (Hard) — Student Grade Report

// [
// {
// name:"Ritik",
// average:85,                                     
// grade:"A"
// },
// {
// name:"Aman",
// average:50,
// grade:"C"
// }
// ]




// Arrays
// Nested Arrays
// Objects
// Functions
// map()
// reduce()
// Conditional Logic


let students= [

{
    name:"Ritik",
    marks: [80,90,85]
},

{
    name:"Aman",
    marks: [50,40,60]
}

];

var result = students.map(function(students)){
    return result
}

console.log(map(result));
