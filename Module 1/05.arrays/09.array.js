//* Array method
//1.push(),2.pop(),3.unshift(),4.shift

// method        action           where              returns

//push()            add              end              new length
//pop()             remove           end             removed length
//unshift()         add            begining            new length
//shift()           remove         begining           remove element



//1.push: add one or more element at the end of the array and returns the new length 

// let fruits=["apple","banana"]
// fruits.push("chikoo")
// console.log(fruits)

// let returndvalue=fruits.push("orange")
// console.log("returndvalue", returndvalue)
// console.log(fruits)


// let fruits = ["apple", "banana", "chikoo", "orange"]
// let fruits1 = []

// for(let i=0; i<fruits.length; i++){
//     fruits1.push(fruits[i])
// }
// console.log(fruits1)
// console.log(fruits)



// function arr1(arr){
//   for(let i = 0; i <= 10; i++){
//     if(i%2===0){
//     arr.push(i)
//     }
//   }
//   console.log(arr)
// }

// arr1([])


//2.pop: removes the last element front of array and return that element 

// let arr=[1,2,3,4,5]
// let undoelement;

// function removelastelement(array){
//     if(arr.length>0){
//         undoelement = array.pop();
//     }
// }
// function undo(){
//     if(undoelement){
//         arr.push(undoelement);
//     }
//     undoelement = null
// }
// removelastelement(arr)
// removelastelement(arr)
// console.log(arr)
// undo()
// console.log(arr)








//3.shift remove the first element from an array return that element

// let arr = [1,2,3,4,5]
// arr.shift()
// console.log(arr)





//4. unshift adds one or more element to the begining of an array and returns the new length

// let arr = [1,2,3,4,5]
// arr.unshift(0);
// console.log(arr)


//5. slice its an arry method used to extract (copy) elements
// from an array w/o effecting the orignal array 
// returns a new array

// let arr=[1,2,3,4,5]
// console.log(arr.slice(0,3))   // [1,2,3]
// console.log(arr.slice(3))     // [4,5]
// console.log(arr.slice(2,3))   // [3]
// console.log(arr.slice(-3))    // [3,4,5]


// let array = [1,2,3,4,5,6,7,8,9];
// let size = 3;
// function splitarray(arr,size){
//     let result=[];

//     for(let i=0; i<arr.length; i+=size){
//         result.push(arr.slice(i,i+size));

//     }
//     return result;
// }
// console.log(splitarray(array,size))



//6.splice it is used to mutate / chnage the original array
//it return an array of removed element

//use
//remove element from an array 
//add new element to an array
//replace exusting element 
//do all 3 simultaneously

//syntax 
// arr.splice(startindex, delete count, tem1, item2, item3)

// let arr=[1,2,3,4,5,6,7,8]
// arr.splice(6,6)
// console.log(arr)


// task 2 you are give the array of element and your task is to remove all the falsy value from the array
//input --> arr = [1, 2, 0, 5,"a" null, undefined, 10 ," "]
//output arr =[1 ,2 ,3 ," a" ,  10 ]

// let arr = [1, 2, 0, 5,"a", null, undefined, 10 ," "]
// for(let i = 0; i<arr.length;i--){
//     if(!arr[i]){
//     let result = arr.splice(i,1)
// }
// }

// console.log(arr)


// let arr = [1, 2, 0, 5,"a", null, undefined, 10 ," "]
// for(let i = arr.length;i>=0; i--){
//     if(!arr[i]){
//       let result = arr.splice(i,1)
//     }
// }

// console.log(arr)


//adding element 
// let fruits=["apple","banana"]
// fruits.splice(1,0,"kiwi","orange");
// fruits.splice(fruits.length,0,"kiwi","orange")


//negative index

// let colour=["red","blue","green"]
// colour.splice(-1,0,"purple")
// console.log(colour)


//7.index of

//return the 1st index at which a given element is found or -1 if not present 

//syntax
//arr.indexOf (search element,from index)

// let arr = ["apple","banana","kiwi","orange"]
// let index= (arr.indexOf("kiwi"))
// arr.splice(index,1)
// console.log(arr)



//8.includes

// let arr = ["apple","banana","kiwi","orange"]
// console.log(arr.includes("apple"))
// console.log(arr.includes("strawberry"))


//  *                                 index of                                                   include

// 1) return value                   index or -1                                             true or false 

// 2) can find NaN                       no                                                       yes

// 3)checkinng relaiability           less relaible                                          more relaible 
 
// 4)use case                         to find index                                         to see if element exists



//9.concat()

//merges 2 or more arrays into a new array w/o effecting the orignal array
//syntax
//arr.concat(arr1,arr2,arr3....value1,value2,value3,.....)

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]    //or we can also use another method let result = arr1.concat(arr2,7,8,9) it will also merge the array
// let arr3 = [7,8,9] 
// let result = arr1.concat(arr2,arr3)
// console.log(result)  // [  1, 2, 3, 4, 5, 6, 7, 8, 9 ]


//10 reverse()

//used to reverse the order of element in an array in place
//it effect the original array
//syntax
//arr.reverse() 


// let arr = [1,2,3,4,5,6]
// arr.reverse()
// console.log(arr)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//array declaration methods
//1.
// let arr = [1,2,3,4,5];



//2.using constructor function
//this is how you declare an array constructor function 
// let arr = new Array();

// let fruits = new Array("apple","banana","orange");
// console.log(fruits);