//1.the if statement

// the is statement evaluates the condition in '()' inside the parantheses.
// the condition is true if exicutes the code inside the block
 
//*syntx

// if(condition){
    //condition is true exicutes the if block.
    // otherwise not exicutes this block
//}

// let age = 22;
// if(age>=18){
//     console.log("You can vote")
// }

//this is also another way to write if statement but not recomended
//please use the below if you only want to execute a single line of block code

//if(age>=18) console.log("You can vote")

///////////////////////////////////////////////////////////////////////////////////////////////////////

//2.else statement 

//the statement contains an optaional else block. if exicutes when the condition is false

// let age = 28

// if (age>=18){
//     console.log("You can vote")
// }else{
//     console.log("You can not vote")
// }

////////////////////////////////////////////////////////////////////////////////////////////////////

//3. elseif statement

//the block have multiple connditions inside our if statement.

// quation which year did india get its independence

// let year = 1947;

// if (year > 1947){
//     console.log("Year you have entered is greater")
// }else if (year < 1947){
//     console.log("Year you have entered is less")
// }else{
//     console.log("You are right")
// }


//4.nested if statements

// let age = 17;

// if (age){
//     console.log("user has entered valid inputes");
//     if(age >= 18){
//         console.log("You can vote");
//     }else{
//         console.log("You cannot vote")
//     }
//     }else{
//         console.log("user has not enterred valid input")
//     }



// let marks = -12

// if (marks>=90 && marks<=100){
//     console.log("+A")
// }else if (marks>=80 && marks<=89){
//     console.log("A")
// } else if (marks >= 70 && marks<= 79){
//     console.log("B")
// }else if (marks>=60 && marks<=69){
//     console.log("C")
// }else if (marks>=50 && marks<=59){
//     console.log("D")
// }else if(marks<=40 && marks>=49){
//     console.log("E")
// }else if (marks<40 && marks>=
//     0){
//     console.log("F")
// }else{
//     console.log("valid input")
// }