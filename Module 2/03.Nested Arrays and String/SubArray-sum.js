//* SubArrays
// Creating Subarrays
// arr = [1,2,3,4,5]
// [1] [2] [3] [4] [5]
// [1,2] [2,3] [3,4] [4,5]
// [1,2,3] [2,3,4] [3,4,5]
// [1,2,3,4] [2,3,4,5]

// Formula for total subarrays = n(n+1)/2

// let arr = [1,2,3,4,5]

// // Method 1
// for(let i=0; i<arr.length; i++){
//     let sub = []
//     for(let j=i; j<arr.length; j++){
//         sub.push(arr[j])
//         console.log(sub)
//     }
// }

// // Method 2
// for(let i=0; i<arr.length; i++){
//     for(let j=i; j<arr.length; j++){
//         console.log(arr.slice(i, j+1))
//     }
// }

//* Given a target, check if any subarray sum equals target

// function hasSubarrayssum(arr, target){
//     for(let i=0; i<arr.length; i++){
//         let sum = 0
//         for(let j=i; j<arr.length; j++){
//             sum += arr[j]
//             if(sum === target){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(hasSubarrayssum([1,2,3,4,5], 5))