//* Two Sum Problem

// Brute Force
// function existsElement(arr, target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(existsElement([2,6,5,8,11], 10))

// // Optimized (Two Pointer)
// function twoSum(arr, target){
//     arr.sort((a,b) => a-b)

//     let left = 0
//     let right = arr.length - 1

//     while(left < right){
//         let sum = arr[left] + arr[right]

//         if(sum === target){
//             return true
//         }else if(sum < target){
//             left++
//         }else{
//             right--
//         }
//     }

//     return false
// }

// console.log(twoSum([0, -1, 2, -3, 1], -2))