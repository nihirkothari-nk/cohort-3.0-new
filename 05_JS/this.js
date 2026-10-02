// # The `this` Keyword

// ## Problem 1: Global vs Function `this`

// Create a function `showThis()` and print the value of `this` when:

// - Called normally
// - Called in strict mode



// function showthis(a){
//     var add = a
//     return this
// }

// console.log(showthis(5));

// // with strict

// "use strict" 

// function showthis(a,b){
//     var add = a+b
//     return this
// }

// console.log(showthis(2,5));


// ## Problem 2: Object Method Context

// Create an object: Add a method that prints:Hello Nihir


// let user = {
//     name:"Nihir",
    
//     greet(){
//             console.log("Hello" +" "+ this.name);
//     }

// };
// user.greet();




// Create an object with:

// Implement:
// - One regular method
// - One arrow method

// Print `this.name` from both.

// let details ={
//     name: "Rahul",

//     greett(){
//         console.log("Hello"+" "+ this.name);

//     },
//     greetArrow:()=>{
//         console.log("Hello"+" "+ this.name);
//     }
// }
// details.greett( )
// details.greetArrow()




// let details ={
//     name: "Rahul",

//     greett(){
//         const greetArrow =() =>{
//         console.log("Hello"+" "+ this.name);
//     }
//     return greetArrow();
// }
// };

// console.log(details.greett())    




// ## Problem 4: Nested Callback Problem

// Create an object:

// Print:
// ```
// Rahul likes Coding
// Rahul likes Gaming
// Rahul likes Reading
// ```


// var user = {
//     name:"Rahul",  
//     hobbies: ["Coding", "Gaming", "Reading"],
//     likes(){
//         var arrow = () =>{
//             this.hobbies.forEach(hobby => {
//                 console.log(`${this.name} likes ${hobby}`);    
//     });
//         }
//         return arrow ();
//     }
// };
// user.likes();





//more simplyfied version 

// var user = {
//     name: "Rahul",
//     hobbies: ["Coding", "Gaming", "Reading"],

//     likes() {
//         var printHobbies = () => this.hobbies.forEach(hobby => {
//             console.log(`${this.name} likes ${hobby}`);
//         });

//         return printHobbies();
//     }
// };

// user.likes();


// ## Problem 5: Event Handler Simulation

// Create an object representing a button.

// Write:

// - One regular function handler
// - One arrow function handler

// Compare the value of `this`.


// let button = {
//     name: "Click Me",

//     regularHandler() {
//         console.log(this.name);
//     }
// };

// button.regularHandler();




// # 2️⃣ call(), apply(), bind()


// ## Problem 6: Borrow a Method using call()
// Create a method that introduces a person and use call() to borrow it.


// const person1 = { name: "Anubhav" };
// const person2 = { name: "Rahul" };  
// var introduce = function(person){
//     console.log(`Hi, I am ${this.name} `);
// }
// introduce.call(person1)
// introduce.call(person2)





// ## Problem 7: apply() with Array Arguments

// Create a function:

// Pass values using `apply()`.

// ### Expected Output

// I am Rahul from Indore, India


    // var user = {
    //     name:"Nihir",
    //     introduce(city, country){
    //         console.log(`I am ${this.name} from ${city},${country}`);

    // }
    // }
    // user.introduce.apply(user,["Banswara","India"])



// ## Problem 8: bind() for Delayed Execution

// Create a function that prints a user's name after 2 seconds using:

// setTimeout()
// and `bind()`.

// var callback=setTimeout(()=>{
//     console.log("nihri");
    
// },2000)