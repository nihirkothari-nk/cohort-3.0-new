// Create an array of 5 favorite movies and print all values.

// var movies = Array = ["Marvel","spider_man","Dhurandhar","Dc","Doomsday"]
//     console.log(movies);


// Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

// var array = [18,"virat",true, [2,3,4,5]]
// console.log(array[3]);

// Print the first and last element of an array.
// array=[10,20,30,40]
// console.log(array[0],array[3]);

// Swap the second and second-last element using indexing.
// array=[10,20,30,40]

// var temp = array[1]

// array[1]=array[3]
// array[3]=temp
//     console.log(array);



// Create a 2D array and print all first elements of inner arrays.

// array=[ [1,2,3],
//         [4,5,6] ]
// console.log(array[0][0],array[1][0]);

// Find the sum of all diagonal elements in a 3x3 matrix.
// array=[ [1,2,3],
//         [4,5,6], 
//         [7,8,9] ]

// console.log(array[0][0]+array[1][1]+array[2][2]);

// Find total elements in an array without counting manually.

// array = [10,20,30,40,50]

// console.log(array.length);



// Create a function that checks whether array length is even or odd.
// function len(arr){
//     if(arr.length%2==0){
//         console.log("Length is Even");
//     }else{
//         console.log("Length is Odd");
//     }
// }

// len([1,2,3])
// len([1,2,3,4])

// Add 3 new elements at the end of array.
// array = [1,2]
// array.push(3)
// array.push(4)
// array.push(5)
// console.log(array);


// Add elements dynamically inside loop from another array.

// var a1 = array = [1,2]
// var a2 = array = [3,4,5,6]
// for(i=0;i<=a2.length-1;i++){
//     a1.push(a2[i])
// }

// console.log(a1);


// Remove last element and print removed value.

// array = [3,4,5,6]
// console.log(array.pop());
// console.log(array);


// Keep removing elements until array becomes empty
// var a = array = [10,20,30,40,50]

// while(a.length>0){
//     a.pop()
// }
// console.log(a); 

// Add one username at beginning of array.
// var n = ["Virat","Rohit"]

// n.unshift("MS")

// console.log(n)


// Insert multiple elements at beginning without replacing existing ones.
// array = [9,8,7,6]

// array.unshift(1)
// array.unshift(2)
// array.unshift(3)
// array.unshift(4)

// console.log(array);


// Remove first element from array.
// array = [9,8,7,6]

// array.shift()
// console.log(array);


// Remove first element repeatedly until only 2 elements remain.
// var a = [1,2,3,4,5,6]
// while(a.length!=2){
//         a.shift()
// } 
// console.log(a); 

// Remove 2 elements from middle of array.
// var aa = [1,2,3,4,5,6]
// aa.splice(2,2)
// console.log(aa);

// Replace 3 middle elements with 5 new values.

// hint (splice(start, count, ...items))

// var ab = [1,2,3,4,5,6,77,88]
// ab.splice(3,3,9,78,89,66,99)
// ab.sort((a, b) => a - b);
// console.log(ab);



// Reverse an array using method.


// var arr=[9,8,7,6,5,4,3,2,1]
// arr.reverse(arr)
// console.log(arr);



// Reverse only first half of array.***


// var arrr=[9,8,7,6,5,4,3,2,1]

// var arrr2= arrr.slice(0,5)

// arrr2.reverse()
// for(i=0;i<arrr2.length;i++){
//     arrr[i]=arrr2[i]
// }
// console.log(arrr);



// Sort array so even numbers come first and odd later.***

// hint: array.sort((a, b) => CONDITION);

// var ar=[2,4,3,5,67,88]

// ar.sort((a , b) => (a%2)-(b%2));

// console.log(ar);

// Extract first 4 elements into new array.

// var b = [10,20,30,40,50,60,70]

// var new_var = b.slice(0, 4);

// console.log(new_var)

// Create a copy excluding first and last element.
// var c = [10,20,30,40,50,60,70]

// var new_c = c.slice(1,6)

// console.log(new_c);


// Merge two arrays.

// var d = [10,20,30,40]
// var d2 = [2,3,4,5]

// var d3=d.concat(d2)
// console.log(d3);

// Merge 3 arrays and remove duplicate values.***
// var c1=[1,2,3,4,5];
// var c2=[1,2,7,6,8] ;
// var c3=[1,3,44,4,77];

// var merged = c1.concat(c2,c3);

// var unique = [...new Set(merged)];

// console.log(unique); 

// Check whether "apple" exists in array
// var ary=["mango","Banana","apple","grapes"]
//     if(ary.includes("apple")){
//         console.log("True");
//     }else{
//         console.log("False");
//     }

// 2nd way of doing this is 

// var ary=["mango","Banana","apple","grapes"]
// var result =ary.includes("apple")
// console.log(result);


//  Check if all elements of one array exist inside another.***
//     var hi = [2, 4, "yupp", 18];
// var hii = [2, 4, "yupp", 18];

// var check = true;

// for (var i = 0; i < hii.length; i++) {
//     if (!hi.includes(hii[i])) {
//         check = false;
//         break;
//     }
// }
// console.log(check);

// Find index of "Rahul" in array.
// var array = ["Rohit","Virat","Rahul","Ms"]

// .indexOf("Rahul");

// console.log(array);




// Find all positions of repeated number 5.***

// var arry=[2,3,4,5,6,5,7,5,8,5]
// for(var i=0;i<arry.length;i++){
//     if(arry[i] === 5){
//         console.log(i);
//     }
// }



// Convert array into comma separated string.

// var arrayy = ["Nihir","Kothari"]
// var n_array = arrayy.join(",")
// console.log(n_array);

// // Convert array into sentence format.

// var arraay = ["Hy","my name", "is" ,"Nihir Kothari" ]

// var result = arraay.join(" ")

// console.log(result);


// Print all array elements using loop.
// var x = [10,20,30,40]
// for(var i=0;i<x.length;i++){
//     console.log(x[i]);
    
// }



// Print elements at only even indexes.

// var y = [10,20,30,40,50,60]
// for(var i=0;i<y.length;i+=2){
//     console.log(y[i]);
    
// }




// Print all values using for...of.


// var z = [10,20,30,40,50,60]

// for(var value of z)
//     console.log(value);


// Count vowels from array of characters.***

// var v =["a","v",'e','b','i','o','z']

// var vowel = ['a','e','i','o','u'] 

// var count = 0;

// for (var characters of v){
//     if(vowel.includes(characters)){
//         count++

//     }
// } 
// console.log(count);

// Assign one array to another variable and modify second one.

// var n = [10,20,30,40,50,60]

// var k=n

// k.push(27)

// console.log(n);
// console.log(k);

// Create true copy so original array does not change.

// var A = [10,20,30,40,50,60]

// var B = [...A]

// B.push(27)

// console.log(A);
// console.log(B);

// Copy array into new array.

// var C = [1,2,4,5,6]

// var New =[...C]

// console.log(New);


// Merge arrays and add extra values in between.***

// var D = [1,2,4,5,6]

// var F =[9,8,7,6,5]

// var merge = [...D,100,200,...F]
// console.log(merge);







// FOR EACH
// You are given an array of prices.

// Print each price with `"₹"` before it.




// var prices = [100, 250, 399, 499];

// prices.forEach(function(elem){
//     console.log('₹'+ elem);
    
// })




//[ Q. You are given an array of students.

// Print:

// - `"Pass"` if marks are greater than 50
// - `"Fail"` otherwise ]


// sol:
// var students =[
// { name: "Anubhav", marks: 85 },
// { name: "Rahul", marks: 42 },
// { name: "Aman", marks: 90 },
// ]

// students.forEach(function(elem){

//     if(elem.marks>50){
//     console.log(elem.name,"pass");
//     }else{
//         console.log(elem.name,"fail");

//     }
// })






// # `map()`

// Convert all names into uppercase.


// var names = ["anubhav", "rahul", "aman"];

// names.map(function(elem){
//     console.log(elem.toUpperCase());
// })



// Create a new array where:***

// - Every product has a new property `discountPrice`
// - Discount is 10%

// var products = [
// { name: "Laptop", price: 50000 },
// { name: "Phone", price: 20000 },
// ];

// var new_products = products.map(function(elem){
//     return{
//         name: elem.name,
//         price:elem.price,
//         discountedPrice: elem.price-elem.price*(10/100)

//     }
// })
// console.log(new_products);







// #Filter

// Filter all even numbers.

// var num = [1,2,3,4,5,6,7,8];
// var even_num=num.filter(function(even){
//     return even%2==0;
// })
// console.log(even_num);


// You are given users.

// Return only active users.

// let users = [
//     { name: "Anubhav", active: true },
//     { name: "Rahul", active: false },
//     { name: "Aman", active: true },
// ];
// var active_user=users.filter(function(el){
//     return el.active
// })
// console.log(active_user);






// # `reduce()`

// Find total sum of array.


// let nums = [10,20,30,40];
// var sum = nums.reduce(function(sum,elem){
//     return sum= sum+elem
// },0)
// console.log(sum);


// Count frequency of elements.***


// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// var freq=fruits.reduce(function(acc,elem){
//     if(acc[elem]){
//         acc[elem]++;
//     }else{
//         acc[elem]=1;
//     }
//     return acc
// },{})
// console.log(freq);




// # `find()`

// Find first number greater than 50.


// let num = [20, 35, 60, 80];
// var greater_num=num.find(function(elem){
//     return elem>50
// })
// console.log(greater_num);



// Find a user with username `"admin"`.


// let user = [
//     { username: "rahul" },
//     { username: "admin" },
//     { username: "aman" }
// ];

// var username = user.find(function(elem){
//     return elem.username ==="admin"
// })
// console.log(username);





// findIndex()

// Find index of number `90`.

// let n = [10, 40, 90, 50];
// var index=n.findIndex(function(elem){
//     return elem===(90)
// })
// console.log(index);  


// Find index of first failed student.


// let students = [
//     { name: "A", marks: 90 },
//     { name: "B", marks: 30 },
//     { name: "C", marks: 70 },
// ];
// var idx_faild=students.findIndex(function(elem){
//     return elem.marks<33
// })
// console.log(idx_faild);




// # `some()`
// Check if any number is negative.


// let x = [10, 20, -5, 40];
// var Nev=x.some(function(elem){
//     return elem<0
// })
// console.log(Nev);


// Check if any product is out of stock.


// let products = [
//     { name: "Laptop", stock: 5 },
//     { name: "Phone", stock: 0 },
// ];
// var out_of_stock=products.some(function(elem){
//     return elem.stock===0
// })
//     console.log(out_of_stock);




// # `every()`

// Check if all numbers are positive.


// let A = [10, 20, 30, 40];

// var posi= A.every(function(elem){
//     return elem>0
// })
// console.log(posi);


// Check if all students passed.


// let student = [
//     { name: "A", marks: 80 },
//     { name: "B", marks: 45 },
//     { name: "C", marks: 60 },
// ];
// var pass= student.every(function(elem){
//     return elem.marks>=40
// })
// console.log(pass);

