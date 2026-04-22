// let count = 0
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         count++;
//     }
// }
// console.log(count);
//if outer loop is  running n number of times and inner loop is running a number of times
//then the whole nested loop runs n*m number of times

//Q1. print the below pattern
// #####
// #####
// #####
// #####
// for (let i=1;i<4;i++){
//     let p=""
//     for(let j=0;j<=4;j++){
//         p+="#"
//     }
//     console.log(p)
// }


//Q2. print rectangle
// ###########
// ###########
// ###########
// let a = 4
// let b = 10
// for (let i=1;i<a;i++){
//     let p=""
//     for(let j=0;j<=b;j++){
//         p+="#"
//     }
//     console.log(p)
// }


//Q3. print matrix table 
// 00 01 02 03 
// 10 11 12 13 
// 20 21 22 23 
// 30 31 32 33 
// for (let i=0;i<4;i++){
//     let p=""
//     for(let j=0;j<4;j++){
//         p+=`${i}${j} `
//     }
//     console.log(p)
// }


//Q4.print the below pattern
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
// for (let i = 5; i > 0; i--) {
//     let p = "";
//     for (let j = 0; j < i; j++) {
//         p += "* ";
//     }
//     console.log(p);
// }


//Q5.print the below pattern
// A 
// A B 
// A B C 
// A B C D 
// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for (let i = 0; i < 4; i++) {
//     let p = "";
//     for (let j = 0; j <= i; j++) {
//         p += alphabet[j] + " ";
//     }
//     console.log(p);
// }


//Q.6 print diamond pattern
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// for(let i=1; i<=4; i++){
//     let space = ""
//     for(let j=1; j<=4-i; j++){
//         space += " "
//     }
// for(let k=1; k<=2*i-1; k++){
//     space += "*"
// }
// console.log(space)
// }
// for(let i=3; i>=1; i--){
//     let space = ""
//     for(let j=1; j<=4-i; j++){
//         space += " "
//     }
// for(let k=1; k<=2*i-1; k++){
//     space += "*"
// }
// console.log(space)
// }


//Q7.print Hollow Square
// *****
// *   *
// *   *
// *   *
// *****

// for(let i=1; i<=5; i++){
//     let line = ""
//     for(let j=1; j<=5; j++){
//         if(i===1 || i===5 || j===1 || j===5){
//             line+="*"
//         }else{
//             line+=" "
//         }
//     }
//     console.log(line)
// }