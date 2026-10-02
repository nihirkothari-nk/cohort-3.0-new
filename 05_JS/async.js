// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// setTimeout (()=>{
//     greet("Nihir")
// },2000)




// function welcome(team) {
//     console.log(`Hello ${team}`);
// }
// const ID = setTimeout(()=>{
//     welcome("India")
// },5000)

// clearTimeout(ID)





// let Stoptimer = setTimeout(()=>{
//     console.log("Never print this");
// },2000)

// clearTimeout (Stoptimer)




// let count =5

// const id = setInterval(()=>{
//     console.log(count);  
//     count--
//     if(count===0){
//         clearInterval(id)
//     console.log("Done");
//     }
// },500)


// function fetchUser(callback){
//     id:1,
//     Name: "Nihir"
// }
// setTimeout(()=>{
    
// },2000)




// PRACTICE ON CALLBACK 

// function greet(){
//     console.log("Hello Nihr");
// }

// function execute(callback){
//     callback()
// }

// execute(greet)




// function sq(num){
//     console.log(`sq of ${num} is ${num*num} `);
// }

// function execute(callback,value){
//     callback(value)
// }
// execute(sq,5)




// function delayedGreet(){
//     setTimeout(()=>{
//         console.log("Hello Nihir");
// },2000)
// }

// function execute(callback){
//     callback()
// }

// execute(delayedGreet)






// function delayedMessage(mess){
// setTimeout(()=>{
//     console.log(`${mess}`);
// },2000)
// }

// function execute(callback,message){
//     callback(message)
// }

// execute(delayedMessage,"Hello Nihir")



// function add(a, b) {
//     console.log(a + b);
// }


// function sub(a, b) {
//     console.log(a - b);
// }

// function multi(a,b) {
//     console.log(a*b);
// }


// function calculate(a, b, callback) {
//     callback(a, b);
// }

// calculate(10, 20, add);
// calculate(10, 20, sub);
// calculate(10, 20, multi);





// function processData(data,callback){
//     setTimeout(()=>{
//         callback(data)
//     },2000)
// }
// function showData(data){
//     console.log(`Data received:${data}`)
// }

// processData("JavaScript",showData)


// PROMISE PRACT

// const myPromise = new Promise((resolve,reject)=>{
//     resolve("Task completed")
// })
// .then((result)=>{
//     console.log(result);
// })



// const login = new Promise((resolve,reject)=>{
//     reject("Login failed")
// })
// .catch((error)=>{
//     console.log(error);
// })


// let age = 26;
// const verify = new Promise ((resolve, reject)=>{
//     if(age>=18){
//         resolve("You can enter")
//     }else{
//         reject("You cannot enter")
//     }
// })
// .then((eligible)=>{
//     console.log(eligible);
// })
// .catch((ineligible)=>{
//     console.log(ineligible);
// })



// let download = new Promise ((resolve , reject) =>{
//     setTimeout(()=>{
//         resolve("Download Completed")
//     },3000)
// })
// .then((downloaded)=>{
//     console.log(downloaded);
// })




// Q5 — Basic chaining

// Write a Promise that:

// Resolves with 10
// First .then() multiplies it by 2
// Second .then() adds 5
// Third .then() prints the final result


// let sol = new Promise((resolve,reject)=>{
//     resolve(10)
// })
// .then((value)=>{
//     return value * 2 
// })
// .then((Nvalue)=>{
//     return Nvalue + 5    
// })
// .then((result)=>{
//     console.log(result);
// })





// Q6 — Async Promise Chain

// Create a Promise that:

// Starts with "Task 1"
// After 2 seconds, resolves "Task 1 completed"
// First .then() should print it
// Then return another Promise
// That second Promise waits 2 seconds
// Resolves "Task 2 completed"
// Second .then() prints it


// let Task = new Promise((resolve, reject)=>{
//     console.log("After 2 seconds:");
//     setTimeout(()=>{
//         resolve("Task 1 completed")
//     },2000)  
// })
// .then((print)=>{
//     console.log(print);

//     return new Promise((resolve)=>{
//         console.log("After another 2 seconds:");

//         setTimeout(()=>{
//             resolve("Task 2 completed")
//         },2000)
//     })
// })
// .then((final)=>{
//     console.log(final);
// })






// Write a Promise that:

// Waits 2 seconds
// If age >= 18, resolves "Access granted"
// Otherwise rejects "Access denied"
// Handle the result using .then()
// Handle the error using .catch()


// let age = 20

// let user = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if (age>=18){
//             resolve("Access granted")
//         }else{
//             reject("Access denied")
//         }
//     },2000)
// })
// .then((eligible)=>{
//     console.log(eligible);
// })
// .catch((ineligible)=>{
//     console.log(ineligible);
// })




// Waits 2 seconds
// Checks marks
// If marks >= 40 → resolve "You passed"
// Otherwise → reject "You failed"
// .then() should print the result
// .catch() should print the error
// After the first .then(), return another Promise that waits 2 seconds and resolves "Result saved"


// let marks= 42

// let Marks = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if (marks>=40){
//             resolve("You passed")
//         }else{
//             reject("You failed")
//         }
//     },2000)
// })
// .then((pass)=>{
//     console.log(pass);
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Result saved")
//         },2000)
//     })
// })
// .catch((fail)=>{
//     console.log(fail);
// })
// .then((final)=>{
// console.log(final);

// })




// Write this yourself:

// Create a Promise.
// After 2 seconds, reject it with "Server error".
// Use .catch() to print the error.
// Inside .catch(), return "Using backup server".
// Use .then() after .catch() to print that returned message.

// let user = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("Server error")
//     },2000)
// })
// .catch((error)=>{
//     console.log(error);
//     return "Using backup server"
// })
// .then((result)=>{
//     console.log(result);
// })



// function getuser(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve("User data received")
//         },2000)
//     })
// }
// async function showUser(){
//     let result = await getuser();
//     console.log(result);
// }


// showUser()



// Create a function login() that:

// Returns a Promise
// Waits 2 seconds
// Rejects with "Login failed"

// Then create an async function checkLogin() that:

// Uses try
// Uses await login()
// Prints the result
// Uses catch to print the error

// function Login(){
//     return new Promise((resolve, reject )=>{
//         setTimeout(()=>{
//             reject("Login failed")
//         },2000)
//     })
// }
// async function checkLogin(){
//     try{let result = await Login()
//         console.log(result);

//     }catch(failed) {
//         console.log("failed");
//     }
// }

// checkLogin()




// Write task1() and task2() yourself, each taking 2 seconds, and then create an async function that:

// Awaits task 1
// Prints its result
// Awaits task 2
// Prints its result


// function task1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("TASK 1");
//         },2000)
//     })
// }

// function task2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("TASK 2 🔥");

//         },2000)
//     })
// }

// METHOD 1(USING NORMAL ASYNC AND AWAIT FUN) 

// async function runtask(){
//     let result1= await task1()
//         console.log(result1);

//     let result2= await task2()
//         console.log(result2);
// }



// METHOD 2(USING PROMISE.ALL)


// async function runtask(){
//     let result = await Promise.all([
//         task1(),
//         task2()
//     ]);
//         console.log(result);
// }
// runtask()




// Using your previous task1() and task2():

// Keep task1() resolving "TASK 1"
// Make task2() reject with "TASK 2 failed" after 2 seconds
// Create async function runTasks()
// Use try/catch
// Inside try, use Promise.all()
// Print the results if successful
// Inside catch, print the error


// function task1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("TASK 1");
//         },2000)
//     })
// }

// function task2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject("TASK 2 🔥");
            
//         },2000)
//     })
// }

// async function runtask(){
//     try{
//     let results= await Promise.all([
//         task1(),
//         task2()
//     ])
//         }catch(error){
//             console.log(error);
//     }
// }
// runtask()


// TEST ON COMBINED CONCEPT ( CALLBACK, ASYNC AND AWAIT ETC)

// Question 1 — Callback

// Create a function:

// processData(data, callback)

// It should:

// Wait 2 seconds using setTimeout
// Then call the callback with data
// Create another function showData(data) that prints:


// function processData(data,callback){
//     setTimeout(()=>{
//         callback(data);
//     },2000)
// }
// function showData(data){
//     console.log(data);
// }
// processData("22",showData)



//  Question 2 — Promise

// Create a Promise that:

// Waits 2 seconds
// Resolves with "Download completed"
// Handle it using .then()

// let user = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Download completed")
//     },2000)
// })
// .then((result)=>{
//     console.log(result);
// })


//  Question 3 — Promise Chaining

// Create a Promise that immediately resolves with:

// 10

// Then chain:

// 10 → ×2 → +5 → print


// let chain = new Promise((resolve, reject) => {
//     resolve(10)
// })
// .then((value)=>{
//     return value*2
// })
// .then((newVal)=>{
//     return newVal+5
// }).then((result)=>{
//     console.log(result);
    
// })



// Question 4 — async/await + try/catch

// Create a function login() that:

// Returns a Promise
// Waits 2 seconds
// Rejects with "Login failed"
// Then create:

// async function checkLogin()

// Use try/catch and await to handle the rejection.

// function login(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject("Login faild")
//         },2000)
//     })
// }
// async function checkLogin(){
//     try{
//         let result = await login()
//             console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }

// checkLogin()


