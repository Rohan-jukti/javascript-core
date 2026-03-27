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

