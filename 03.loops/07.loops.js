// *loops

//*1. While loop

// if is a way to repeat the same code multiple times.
// eg. while,dowhile,forloop

// let i = 20

// while(i<=40){
//     if(i%2===0){
//         console.log(i)
//     }
//     i++
// }

// let i = 0
// while(i<=10){
//     console.log(i)
//     i++
// }


//*2. Do while loop

// if is similar to while loop except to the condition checking is done at the end.
// another word the body runs first and then we check the condition

//Syntax 

// do {
//     loop body
//  }while(condition)


// let i = 0
// do {
//     console.log(i)
//     i++
// } while(i<5)

// let i = 2
// do{
//     if(i%2===0)
//     console.log(i)
//     i++
// }while(i<=10)


//*3. For loop

//Syntax

//for(begin; condition ; stop){
//  loop body
//}

// for (let i=0; i<3; i++){
//     console.log(i)
// }

// let i = 0;
// for(; i<3; i++){
//     console.log(i)
// }

// let i = 0;
// for(; i<3; ){
//     console.log(i)
//     i++
// }

// for(let i=2; i<=20; i+=2){
//     console.log(i)
// }

//*Break and continue


//*Break
//use to control the iteration on of a running loop
// Break the execution of loop 
// for (let i=0; i<10; i++){
//     console.log(i)
//     if(i==5){
//         break
//     }
// }



//*Continue
//used to skip itration of loop
// for (let i=0; i<10; i++){
//      if(i==5){
//     continue;
//     }
//     console.log(i)
//    }

// Note: for vs while

// use for loop when you know how many times you want to  run a loop
// use while loop when you dont know how many times you want to run the loop but you known when to end it

// Q1. return count
// let num = 1;
// let count = 0;

// while (num > 0) {
//   num = Math.floor(num / 10);
//   count++;
// }

// console.log(count);


// let n = 1234;
// let count = 0
// while(nse)
// Let reminder = n % 10;
// n = n - reminder
// ก = n / 10;
// count++
// console.10g(count)


//Q2. given a number n find the sum of its digits

// let n = 1234;
// let sum = 0;

// while (n > 0) {
//     let remainder = n % 10;
//     sum = sum + remainder;
//     n = Math.floor(n / 10);
// }

// console.log(sum);


//given number n print its table till 10

// let n=3
// for (let i=1; i<=10; i++){
// console.log("3 x " + i + " = " + (n * i))
// }

// for  (let i=0; i<5;){
//     console.log(i++)
// }0 1 2 3 4

// for(let i=0; i<5;){
//     console.log(++i)
// } 1 2 3 4 5






// for (let i=1; i<=500; i++){
//     if (i%7===0 && i%5===0){
//         console.log(i)
//         break;
//     }
// }


// let n = 5
// let sum = 0

// for (let i=0; i<=n; i++){
//     sum=sum+i
    
// }
// console.log(sum)

// let n=5

// for (let i=1; i<=10; i++){
//     console.log("5 x "+ i + "=" +(n*i))
// }

