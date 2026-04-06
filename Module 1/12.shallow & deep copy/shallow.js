//*shallow copy

// let obj = {
//     a: "a",
//     b: "b",
//     c:{
//         see: "c"
//     }
// }

// let obj2={...obj}; // shallow copy
// obj2.a="A"
// console.log(obj)  //{ a: 'a', b: 'b', c: { see: 'c' } }
// console.log(obj2)  //{ a: 'A', b: 'b', c: { see: 'c' } }

// obj.c.see = "C"
// console.log(obj)  //{ a: 'a', b: 'b', c: { see: 'C' } }
// console.log(obj2) //{ a: 'A', b: 'b', c: { see: 'C' } }

//use spread oprator to make copy only when the obj/array and not complex


//method 1 of making deep copy

// let obj = {
//     a: "a",
//     b: "b",
//     c:{
//         see: "c"
//     }
// }
// let obj2 = JSON.parse(JSON.stringify(obj))
// obj.c.see = "C"
// console.log(obj)    //{ a: 'a', b: 'b', c: { see: 'C' } }
// console.log(obj2)   //{ a: 'a', b: 'b', c: { see: 'c' } }

//method 2

// let obj3 = structuredClone(obj);
// obj3.c.see = "C"
// console.log(obj)  //{ a: 'a', b: 'b', c: { see: 'c' } }
// console.log(obj3)  //{ a: 'a', b: 'b', c: { see: 'C' } }




