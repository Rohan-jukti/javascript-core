//Objects
//method 1
//accessing the values in an object

// let person = ["sourav",20,"male"]
// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male"
// }

// console.log(person1obj)
// console.log(person1obj.name)      //sourav
// console.log(person1obj.age)       //20
// console.log(person1obj.gender)    //male

//method 2
//accessing the values in an object

// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male"
// }

// console.log(person1obj["name"])    //sourav
// console.log(person1obj["age"])     //20
// console.log(person1obj["gender"])  //male


// let key = "name"
// console.log(person1obj.key)  //undefined
// console.log(person1obj[key])  // sourav


// let person = ["sourav",20,"male"]
// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male",
//     "likesBird" : true, //your key can also be a string
//     "likes Animals" : false,
    
// }


// console.log(person1obj.likesBird)            //true
// console.log(person1obj["likesBird"])         //true
// console.log(person1obj["likes Animals"])     //false


//updating values in obj
// let person = ["sourav",20,"male"]
// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male",
// }

// person1obj.name = "aniket"
// console.log(person1obj)
// person1obj["name"] = "rohan"
// console.log(person1obj)


//task 1 : print the value 8 in points in the below obj
// let person = ["sourav",20,"male"]
// : "male",
//     points : [1,5,8,10]
// }

// console.log(person1obj.points[2])
// console.log(person1obj["points"][2])


// let person = ["sourav",20,"male"]
// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male",
//     points : {
//     first : 100,
//     second : 50,
//     third : 80,
//     }
// }


// console.log(person1obj.points.second)
// console.log(person1obj.points["second"])

//add properties to an empty obj
// let obj = {}
// obj.name = "sourve"
// obj.age = "20"
// obj.gender = "male"
// console.log(obj)   //{ name: 'sourve', age: '20', gender: 'male' }



//delete obj 
// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male",
//     key : "value"
// }

// delete person1obj.key
// console.log(person1obj)



///////////////////*key exceptions*/////////////////

// let obj = {
//     "one" : 1,
//     "two" : 2,
//     "three" : 3
// }
// console.log(obj["one"])   //1
// console.log(obj.one)     //1

// let obj = {
//     1 : 1,
//     2 : 2,
//     3: 3,
// }

// // console.log(obj.1) //error
// console.log(obj["1"]);   //1
// console.log(obj[1]);     //1


/////////////////////////////*in oprator*/////////////////////
//in oprator is used to find a property inside an obj

// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male",
//     key : "value"
// }

// console.log("gender" in person1obj)  //true
// console.log("address" in person1obj) //false


// let obj = {
//     key:undefined;
// }
//console.log(obj.key)    //undefined
// console.log("key" in obj) //true



///////////////////////for in loop/////////////////////////////

// // gives me the keys in the obj
// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male",
//     key : "value"
// }

// for(let key in person1obj){
//     //printing all the key value pairs in an obj
//     console.log(key, person1obj[key])
// }



// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male",
//     key : "value"
// }

//object.keys(obj)--> gives you an array of key
// console.log(Object.keys(person1obj)); //[ 'name', 'age', 'gender', 'key' ]

//object.values(obj)---> gives you an array of values
// console.log(Object.values(person1obj))  //[ 'sourav', 20, 'male', 'value' ]

//to find the length of an object
// console.log(Object.keys(person1obj).length)  //4


//for any given obj display all its values without using for in loop

// let person1obj = {
//     name : "sourav",
//     age : 20,
//     gender : "male",
//     key : "value"
// }

// let value = Object.values(person1obj)
// for(let i=0; i<value.length; i++){
//     console.log(value[i])
// }


//find the sum of elements in the object


// let obj = {
//     marks1: 50,
//     marks2: 30,
//     marks3: 40,
//     marks4: 50,
// }

// let values = Object.values(obj)
// let sum = 0;
// for(let i=0; i<values.length; i++){
//     sum+=values[i]
   
// }
//  console.log(sum)

//insert country: "India" inside the given obj

// let data={
//     address: {
//         city:"pune",
//         pin: 411014
//     }
// }
// data.address.county = "INDIA"
// console.log(data)


////////////////////////*array off object* //////////////////////

// let students = [
//     {id:1, name: 'Aman', marks: 82, gender: "male"},
//     {id:2, name: 'Sara', marks: 91, gender: "female" },
//     {id:3, name: 'Rohit', marks: 25,gender: "male"},
//     {id:4, name: 'Sachin', marks: 100,gender: "male"},
//     {id:5, name: 'Shreya', marks: 30,gender: "female"},
//     {id:6, name: 'Astha', marks: 99,gender: "female"},
// ]

//task1: print the name of all the student

// for(let i=0; i<students.length; i++){
//     console.log(students[i].name)
// }

//task: print the name all female students
// for(let i=0; i<students.length; i++){
//     if(students[i].gender === "female"){
//         console.log(students[i].name)
//     }
// }

//task3: print the name of male student who got below 50

// for(let i=0; i<students.length; i++){
//     if(students[i].marks<50 && students[i].gender === "male"){
//         console.log(students[i].name)
//     }
// }

// let user = {
//     name: "Rohan",
//     age: 23,
//     city: "pune"
// }

//  let {name, age} = user
//  console.log(name); // Rohan
//  console.log(age);  // 23
//  let product = {
//     title: "phone",
//     price: 30000
//  }
//  // destructuring using the name of some other variable

//  let {title: productTitle, price: productPrice} = product;
//  console.log(productTitle, productPrice);



// let people = [
//     {name: "alice" , city:"NYC"},
//     {name: "Bob" , city: "LA"},
//     {name: "charlie" , city:"NYC"}
// ]


// // {
// //     NYC:[{name:"Alice",city:"NYC"},{name:"charlie",city:"NYC"}]
// //     LA:[{name:"Bob",city:"LA"}]
// // }

// let grouped = Object.groupBy(people,({city})=>
//     city==="NYC" ? "NYC" : "LA",
// )
// console.log(grouped)

// let result = {}
// for(let i=0; i<people.length; i++){
//     let city = people[i].city;
//     if(!result[city]){
//         result[city] = []
//     }
//     result[city].push(people[i])
    
// }
// console.log(result)



//wordCount("hello world hello")-->{hello:2,world:1}
//wordcount("The the THE") ---> {the:3}
//wordcount("one") --> {one:1}

// function wordCount(str){
//     str = str.toLowerCase();   
//     let words = str.split(" ");
//     let result = {};

//     for(let i = 0; i < words.length; i++){   
//         if(!result[words[i]]){
//             result[words[i]] = 1;
//         } else {
//             result[words[i]]++;
//         }
//     }

//     console.log(result);
// }

// wordCount("hello world hello");



// {
//     NYC:[{name:"Alice",city:"NYC"},{name:"charlie",city:"NYC"}]
//     LA:[{name:"Bob",city:"LA"}]
// }




// let people = [
//     {name: "alice" , city:"NYC"},
//     {name: "Bob" , city: "LA"},
//     {name: "charlie" , city:"NYC"}
// ]



// let grouped = Object.groupBy(people, ({city})=>
//     city === "NYC" ? "NYC" : "LA"
// )
// console.log(grouped

// )