// let arr = [1,2,15]
 //if only write arr.sort() if will convert the number into string amd compare them.
 //ie. sort() by default does string comparision
//  arr.sort()
//  console.log(arr);  //[ 1, 15, 2 ]


//to use your own sorting order  we need to supply function as the arg of arr.sort()

// let arr = [1,2,15]
//ascending order
// function compare(a , b){
    // if(a>b) return 1;  //if the first value is greater than the second
    // if(a==b) return 2; //is value are equal
    // if(a<b) return -1; //if first value is equal to the second
// }

// arr.sort(compare);
// console.log(arr);



// let arr = [1,2,15]
// //descending order
// function compare(a , b){
//     if(a<b) return 1;  
//     if(a==b) return 2; 
//     if(a>b) return -1; 
// }

// arr.sort(compare);
// console.log(arr);


// let arr = [1,-2,15,2,8,0,6];
// arr.sort(function(a,b){
//     return a-b;
// })
// console.log(arr)


// let arr = ["banana",'apple',"mango"]

// arr.sort(function (a,b){
//     if(a>b) return 1;
//    if (a<b) return -1;
//     return 0;
// })
// console.log(arr)



// let student = [
//     {name: "pranav",marks: 50},
//     {name: "sourav",marks: 100},
//     {name: "ansh", marks: 5},
//     {name:"pragya", marks: 80},
// ]
// student.sort(function(a,b){
//     return a.marks - b.marks
// })
// console.log(student)


//sort the array in ascending order of number of skills known to a student
// let students = [
//   { name: "pranav", marks: 50, skills: { arr: ["js", "html", "python"] } },
//   { name: "sourav", marks: 100, skills: { arr: ["js", "python"] } },
//   { name: "ansh", marks: 5, skills: { arr: ["js"] } },
//   { name: "pragya", marks: 80, skills: { arr: ["js", "html", "python", "c++"] }},
//   { name: "swathi", marks: 45, skills: { arr: ["js", "html", "python"] } },
// ];




// students.sort(function(a,b){
//     return a.skills.arr.length - b.skills.arr.length
// })
// console.log(students)