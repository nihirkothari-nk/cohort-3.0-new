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
