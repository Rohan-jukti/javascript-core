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


// -------------------------------------------ASCI values-----------------------------------------------

// let char ="A" // char-->asci values
// console.log(char.charCodeAt(0)) 

// let ascicode =65 //ascicode--->char
// console.log(String.fromCharCode(ascicode))

// ------------------------------------------------replace methods--------------------------------------------

// let message = "javascript is fun. javascript is prowerfull"
// console.log(message.replace("javascript","JS")) //JS is fun. javascript is prowerfull
// console.log(message.replaceAll("javascript","JS")) //JS is fun. JS is prowerfull

// ---------------------------------------------------------------------------------------------------------------------

// let input = "hi.I.am.sourav.,.nice.to.meet.you"
// console.log(input.replaceAll("."," "))

// --------------------------------------split and join---------------------------------------------------------
// *split
// 1)string as input ---> array as output
// 2)splits the string accordiging to the given char
// let input =  "hi.I.am.raj.,.nice.to.meet.you"
// console.log(input.split("."))
// console.log(input.split("")) //this will give you in char
// let input2="hi I am raj nice to meet you"
// console.log(input2.split(" ")) //this will give you in words


//*join
//1. array ---> string
//join the array of string according to the given character
// let result ="hi I am raj nice to meet you"
// console.log(result.split("").join("-"))
// console.log(result.split().join("")) 



//task create a acronym genrator
//eg.input --> national aeronautics space administraction
//output ---> NASA
// let name ="national aeronautics space administraction"
// function acronym(str){
//   let result=str.split(" ")
//   let tom="";
//   for(let char of result){
//     tom+=char[0].toUpperCase()
//   }
//   return tom
// }
// console.log(acronym(name))

/////////////////////////*trim()*////////////////////////////////////

//remove spaces from the start and end of the string
// let name = "  Rohan  "
// console.log(name);

//remove space from both ends
// let name = "  Rohan  "
// console.log(name.trim());

//remove space from start
// let name = "  Rohan  "
// console.log(name.trimStart())

//remove space from end
// let name = "  Rohan  "
// console.log(name.trimEnd())


////////////////////////////*padding*//////////////////////////////////

//used to masking value
//syntax str.padstart(length of the string,char you want to mask)
//this will mask(hide) at the begining of the str
// let code = "56"
// console.log(code.padStart(10,"*")) //********56

//

// let code = "56"
// console.log(code.padEnd(10,"*")) //56********

///////////////////////////////////////////////////////////////////////////////////
//task1. : print the reverse of a string
//input --> "hello"
//output ---> "olleo"

//ans--> method 1
// let str = "hello"
// function reversestr(){
//     let store = ""
// for(let i=str.length-1; i>=0; i--){
//     store+=str[i]
// }
// return store
// }
// console.log(reversestr())


//ans--> method 2
// function reverseStr(str){
//      return str.split("").reverse().join("")
// }
// console.log(reverseStr("Hello"));


//task2: for a given string count the number of  vowels

// function vowels(){
//     let result = 0
//     let vowels = "aeiouAEIOU"
//     for(let i=0; i<vowels.length; i++){
//         if(vowels.includes(vowels[i])){
//             result++
//         }
        
//     }
//     return result;
// }
// console.log(vowels())


//task3 : for a givin string palidrom 


// ans--> method 1

// function reversestr(str){
//     let store = ""
// for(let i=str.length-1; i>=0; i--){
//     store+=str[i]
// }
//     if(store === str){
//        return "palidrome"
//     }else{
//         return "not"

//     }
    
// }
// console.log(reversestr("nayan"))
 

//task4: convert the scentence into camel case
//input = "hello world"

// function capitalizeWords(str){
//     let result = str[0].toUpperCase()

//     for(let i = 1; i < str.length; i++){
//         if(str[i-1] === " "){
//             result += str[i].toUpperCase()
//         } else {
//             result += str[i]
//         }
//     }

//     return result
// }

// console.log(capitalizeWords("hello world"))