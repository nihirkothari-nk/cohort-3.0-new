//  1. Create an Object

// Create an object for a student with:

// - name
// - age
// - course

// Then print all values.

// var student = {
//     name:"Nihir",

//     age:19,

//     course:"Cohort3"
// };
    
// console.log(student); 



// ### 2. Access Properties

// Print:
// - brand
// - model


// const car = {
//     brand: "BMW",
//     model: "M4",
//     year: 2022
// }
// console.log(car.brand,car.model);



// ### 3. Update Object Value

// Change the age of a user from 20 to 25.
// Add a new property:

// const user = {
//     name: "Anubhav",
//     age: 20
// }
// user.age=25

// user.isAdmin=true

// console.log(user);



// ### Delete Property

// Remove the `password` property from the object.

// const account = {
//     username: "john",
//     password: "12345"
// }
// delete account.password
// console.log(account); 


// ### Count Properties

// Write a function that returns how many properties an object has.

// countProperties({a:1,b:2,c:3})
// console.log(property);

// const prop = {
//     username: "john",
//     password: "12345"
// }

// console.log(Object.keys(prop).length);




// ### Loop Through Object

// Print all keys and values from this object.


// const person = {
//     name: "Rahul",
//     age: 22,
//     city: "Delhi"
// }
// for (var key in person){
// console.log(key,person[key]);
// }



// ### Check Property Exists

// Check whether `"email"` exists inside an object or not.
// const details = {
//     name: "Rahul",
//     age: 22,
//     city: "Delhi"
// }
// console.log('email'in details);


// ### Merge Two Objects

// Merge these two objects into one.***


// var obj1 = { a: 1, b: 2 }
// var obj2 = { c: 3, d: 4 }

// var merged = {...obj1,...obj2}

// console.log(merged);



// ### Convert Object to Array

// Convert this object into an array of key-value pairs.


// var user = {
//     name: "Aman",
//     age: 21
// }

// var arr=Object.entries(user)
// console.log(arr);


    // ### Find Highest Value

    // Find the student with highest marks.***


    // const marks = {
    //     Rahul: 82,
    //     Aman: 90,
    //     Anubhav: 95
    // }
    // console.log(Object.entries(marks).reduce(function(acc,elem){
    //     return elem[1]>acc[1]?elem:acc;
    
    // }));



    // Find total salary.


// const salaries = {
//     john: 1000,
//     alex: 2000,
//     bob: 1500
// }

// console.log(Object.entries(salaries).reduce(function (sum , elem ){
//     return sum + elem[1];

//     },0)
// );


// another way to solve is by using for...in

// const salaries = {
//     john: 1000,
//     alex: 2000,
//     bob: 1500
// }

// total=0
// for(var person in salaries){
//     total += salaries[person]
// }
// console.log(total);



// ### Nested Object Access

// Print:

// - city
// - pincode

// const user = {
//     name: "Anubhav",
//     address: {
//     city: "Bhopal",
//     pincode: 462001}
// }

// console.log(user.address.city,user.address.pincode);





// ### Object Method Practice

// Create an object with:

// - name
// - marks
// - method called `getResult`

// If marks > 40:pass 
    // else : fail

// var student={
//     nam:"kavy",
//     marks:75,


// getResult(){
//     if(this.marks>40){
//         return "pass";
//     } else {
//         return "fail"
//         }
//     }
// };
// console.log(student.getResult());



// ### Convert Array to Object

// Convert this array into an object.***

// var arr = ["name", "Anubhav", "age", 24];

// var obj = Object.fromEntries([
//     [arr[0], arr[1]],
//     [arr[2], arr[3]]
// ]);

// console.log(obj);



// ### Frequency Counter

// Count frequency of each character.

// var str = "banana"

// var Frequency = [...str].reduce(function(acc,elem){
//     if(acc[elem]){
//         acc[elem]++;
    
//     }else{
//         acc[elem]=1
//     }
//         return acc;
// },{});
// console.log(Frequency);


// ### Group By Property

// Group users by age.[HARDEST QUE TILL ******]


// const users = [
//     { name: "A", age: 20 },
//     { name: "B", age: 21 },
//     { name: "C", age: 20 }
// ]

// const result = users.reduce(function(acc, elem) {

//     if (!acc[elem.age]) {
//         acc[elem.age] = [];
//     }

//     acc[elem.age].push(elem);

//     return acc;

// }, {});

// console.log(result);




// TOO DIFICULT QUE(18,19,20)
// ### 18. Deep Property Check

// Check whether this property exists:

// ```jsx
// "user.address.city"
// ```

// inside an object dynamically.

// Hint:

// Use:

// ```jsx
// split(".")
// ```





// ### 19. Object Comparison

// Check if two objects have same keys and values.

// Example:

// ```jsx
// {a:1,b:2}
// {a:1,b:2}
// ```

// Expected Output:

// ```jsx
// true
// ```




// ### 20. Remove Duplicate Objects

// Remove duplicate objects from array based on `id`.

// ```jsx
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"},
//   {id:1,name:"A"}
// ]
// ```

// Expected Output:

// ```jsx
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"}
// ]
// ```