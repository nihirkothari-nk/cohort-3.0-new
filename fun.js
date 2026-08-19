
// function Num18(a){
//     console.log("Virat Kohli",a);
// }
// Num18(18)

//WRITE ALL THE WAYS OF PRINTING FUNCTION

//FUNCTION DECLARATION

// function play(){
//     console.log("Playing");
// }

// play()

//FUNTION EXPRESSION

// var act = function(){
//     console.log("Acting");
// }

// act()

// ARROW FUN.

// var add = (a,b) => {
//     return (a+b)
// }
// console.log(add(8, 10));

// second way of arrow fun
// also called as single line funtion
// var sub=(a,b) => a-b; console.log(sub(28,10));



// IIFE(Immodeate Invoked Function)

// (function(){
//     console.log("THIS IS IIFE");
// })()

// ONE MORE SHORTER WAY OF IIFE

// (() => console.log('HELLOWWW'))()


// function run(){
//     console.log("running");
// }
// run()


// function abc(){
//     var a= 10 
//     var b=8
//     var c=a+b
//     return c
// }

// console.log(abc());

// function dada(){
//     console.log("i am dada");

//     function papa(){
//         console.log("i am papa");

//         function child(){
//             console.log("i am child");
//         }
//         return child
//     }
//     return papa
// }

// dada()()()



//QUE BASED ON FUNTIONS
// # Part 1 — Functions Basics (1–20)

// ## Beginner Level


// 1. Create a function named `greet` that prints `"Hello World"`.

// function greet(){
//     console.log("Hello World");
// }
// greet()


// // 2. Create a function `add(a, b)` that returns the sum.
// var sum = function(a,b){
//     console.log(a+b);
// }
// sum(8,5)


// // 3. Write a function to calculate the square of a number.
// var sq = function(a){
//     console.log(a*a);
// }
// sq(5)

// // 4. Create a function that checks whether a number is even or odd.
// function check(n){
//     if(n%2==0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }
// check(6)
// check(5)


// // 5. Write a function that converts Celsius to Fahrenheit.
// function CtoF(C){
//     console.log(f = (C * 9 / 5) + 32);
// }
// CtoF(2)

// // 6. Create a function with default parameter `"Guest"`.
// function Welcome(Name = "Guest"){
//     console.log("Welcome" + " " +  Name);
// }
// Welcome(2)
// Welcome("Nihir")


// // 7. Write a function that returns the greater of two numbers.
// // compare = function(a,b){
// //     if(a>b){
// //         console.log( a ,"is greater");
// //         }else{
// //             console.log(b ,"is greater");
// //         }

// //     }
// // compare(5,6)


// compare = function(a,b){
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }    
// }

// console.log(compare(5,6))


// // 8. Create a function to calculate area of rectangle.
// Area = function(L,B){
//     return L*B
// }
// console.log(Area(2,2));

// // 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
// function check(age){
//     if(age>=18){
//         return "Adult";
//     }else{
//         return "Minor";
//     }
// }
// console.log(check(18));
// console.log(check(10));

// // 10. Create a function to reverse a string.
// // ??




// ## Intermediate Level

//  Write a function expression for table
// multi=function(n){
//     for(i=1;i<=10;i++){
//         console.log(`${n} X ${i} =` ,i* n);
//     }
// }
// multi(2)



// 1. Write a function expression for multiplication.
// function multii(a,b){
//     return a*b;
// }
// console.log(multii(2,4));



// 2. Convert a normal function into an arrow function.
// Normal function
// function hello() {
//     console.log("hiii!");
// }

// hello();

// // Arrow function
// hello = () => console.log("hiii!");

// hello();


// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
// function add(...number){
//     var sum = 0
//     for(i=0;i<number.length;i++){
//         sum += number[i];
//     }
//     return sum;
// }
// console.log(add(2,4,5,6,6));


// // 4. Write a function that counts vowels in a string.
// function vovel(str){
//     var count=0
//     for(i=0;i<str.length;i++){
    
//         if("aeiou".includes(str[i])){
//         count++
//         }
    
//     }
//     return count;
// }
// console.log(vovel("Nihir"));

// 5. Create a function that checks if a string is palindrome.
// palindrom = function(num){
    



// 6. Write a callback function example using `setTimeout`.

// setTimeout (function(){
//     console.log("1 second passed");
// },2000);


// function hellooo() {
//     console.log("it will be displayed after 2 second on the console");
// }

// setTimeout(hellooo, 2000);

// 7. Create a higher-order function that executes another function twice.

// 8. Write a function that returns another function.

// 9. Create a pure function for subtraction.

// 10. Create an impure function using global variable modification. 
// hy