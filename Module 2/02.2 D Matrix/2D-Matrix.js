//*2D-Matrix

// let arr = [1, {name:"rohan"}]
// console.log(arr[1].name)

// let arr = [1,["rohan","jukti"]]
// console.log(arr[1][1])


// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(arr[0][0])
// console.log(arr[0][1])
// console.log(arr[0][2])

// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[1][2])

// console.log(arr[2][0])
// console.log(arr[2][1])
// console.log(arr[2][2])

//Q1.
//task below is the given array insert elements into it so the result look like arr2
// let arr1 = [[1,2,3],[4,5,6],[7,8,9]];

// let arr1 = [[1,2,3],[4,5,6],[7,8,9]];
// let arr2 = [];

// let count = 0;

// for(let i=0; i<3; i++){
//     let innerarr = []
//     for(let j=0; j<3; j++){
//         count ++;
//         innerarr.push(count)
//     }
//     arr2.push(innerarr)
// }
// console.log(arr2)



//  ______________________________________
// |             |            |           |       
// |             |            |           |
// |             |            |           | 
// |             |            |           |
// |_____________|____________|___________| 
// |             |            |           |       
// |             |            |           |
// |             |            |           | 
// |             |            |           |
// |_____________|____________|___________| 
// |             |            |           |       
// |             |            |           |
// |             |            |           | 
// |             |            |           |
// |_____________|____________|___________|




//task1: print the element row wise : 1,2,3,4,5,6,7,8,9
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     for(j=0; j<arr.length; j++){
//         console.log(arr[i][j])
//     }
// }


//task2: print the element coloumn wise: 1,4,7,2,5,8,3,6,9
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         console.log(arr[j][i])
//     }
// }


//task3: print the daigonal element of the square matrix: 1,3,5,7,9
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(i==j || i+j==2){
//             console.log(arr[i][j])
//         }
//     }
// }


//task4: print the non daigonal element of the square matrix: 2,4,6,8
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(i==j || i+j==2){
//             continue;
//         }else{
//             console.log(arr[i][j])
//         }
//     }
// }


//task5: find the center element of the square matrix:5
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(i==j && i+j==2){
//             console.log(arr[i][j])
//         }
//     }
// }