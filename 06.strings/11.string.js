// String
// it represent any textual data


// eg. let str = "hello"

//      or

// let str = "hello"

//     or 

// let world = "world"
// let str = `hello ${world}`

// if you want to display the string in a particular format use backticks 
// using "" or  '' will not work here
// let fruits = `fruits :
//         * apple 
//         * banana
//         * kiwi`
//     console.log(fruits);



// ///////////////////// *special charectar*///////////////////////


// \n ---> denotes line breake
// let fruits  = "fruits: \n * apple \n * banana \n * kiwi"
// console.log(fruits)
    

// both are same 
// let str1 = "hello\nworld";
// let str2 = `hello
//  world`

// /this is how you print backslash

// console.log("backslash : \\")


// when you want to use 'or " inside '' or ""
// console.log("hi i'm \"pranav\"   ")
// console.log('hi i\'m pranav')


// ///////////////////*tab*///////////////////

// this is how you print tabs (multiple space)
// console.log("hi\tmy\tname\tis")   


// /////////////////////////////////////////////////////////////

// let str = "hello"
// let arr = ['h','e','l','l','o']
// console.log(str[0])
// console.log(str[[str.length - 1]])


// note = do not use .length() as length is not a method its a property

// console.log(str.at(0))
// console.log(str.at(-1))

// note = you cannot use -ve index in str[] but you  can use it in str.at()



// /////////////////////////////*intracting through the string*////////////////////////////////

// let str = "hello";

// for(let i=0; i<str.length; i++){
//     console.log(str[i])
// }

// for(let char of str){
//     console.log(char)
// }


// /////////////////////////////*string are not mutable*////////////////////////////////

// let str = "hello"
// let arr= ['h','e','l','l','o']

// arr[0] = 'H'
// str[0] = 'H'
// console.log(str) 

// .toUppercase() converts the string into uppercase
// let result = str[0].toUpperCase() + str.slice(1)
// console.log(result);

// let STR = "HELLO"
// .tolowercase() converts the strig into lower case
// console.log(STR.toLocaleLowerCase())


// let input1 = hello          // ---> hello
// inpute2 = jAVAscript    //----->javascript
// input3 = the            //--->   The

// let string = "JAVAscript"
// camelcase(string)
// function camelcase(str){
//     console.log(str[0].toUpperCase() + str.slice(1).toLowerCase())
// }

// /////////////////////*indexOf*//////////////////////////

// let str  = "hello";
// console.log(str.indexOf('h'))

// give the starting index of word
// let str2 = "Widget with id"
// console.log(str2.indexOf("Widget"))   //0
// console.log(str2.indexOf("with"))     //7
// console.log(str2.indexOf('id'))       //1


// //////////////////////*includes*////////////////

// to search a substring inside a string
// syntax str.includes  (substring, index(optional))
// let str2 = "Widget with id"

// console.log(str2.includes('Widget'))  //true
// console.log(str2.includes('widget')) //false



// /////////////////////*startWith and endWith*//////////////////////////

// let str2 = "Widget with id"
// console.log(str2.startsWith("id")) // true
// console.log(str2.endsWith("id"))  //true






// //////////////////////////*substring*/////////////////////////////

// 1.slice
// let str = 'stringify'
// console.log(str.slice(0,5)); //strin
// console.log(str.slice(5))  // gify
// console.log(str.slice(-4,-1))//gif


// 2.substring
// let str = 'stringify'
// console.log(str.substring(0,5)) //strin

// in substring if the 1st index is greater thean 2nd index
// it wil interchange them to give the right answer
// substring does not support -ve index
// // // // // console.log(str.substring(6,2)) //ring
// console.log(str.substring(-4,-1))//""

// 3.substr

// let str = 'stringify'

// console.log(str.substr(2,4))   //ring 
// console.log(str.substr(2,5))  //ring
// console.log(str.substr(-4,2)) //gi

