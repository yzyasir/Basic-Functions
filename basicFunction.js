// BIGGEST NOTES:
// NOTHING RUNS IN A FUNCTION AFTER THE FIRST RETURN
// NEED CONSOLE.LOG OR PRINT TO SHOW WHAT IS RETURN IN THE OUTPUT

// // #1 WRONG
// function a(){
//     return 5
// }
// // console.log(a())
// // Expected: Nothing since the function was not called
// // Actual: 5

// // #2 Correct!
// function a(){
//     return 5
// }
// // console.log(a()+a())
// // Expected: 10
// // Actual: 10

// // #3 Correct!
// function a(){
//     return 5
//     return 10
// }
// // console.log(a())
// // Expected: 5
// // Actual: 5
// // NOTE: Nothing runs after the first return!!!
 
// // #4 CORRECT
// function a(){
//     return 6
//     console.log(10)
// }
// // console.log(a())
// // NOTE: Nothing runs after return
// // Expected: 6
// // Actual: 6

// // #5 HALF AND HALF
// function a(){
//     // console.log(5)
// }
// // x = a()
// // console.log(x)
// // Expected: 5
// // Actual: 5, and then undefined
// // Note: X is not defined because nothing was returned
 
// // #6 HALF AND HALF
// function a(b,c){
//     console.log(b+c)
// }
// // console.log(a(1,2) + a(2,3))
// // Expected: 3, 5
// // Actual: 3, 5, NaN

// // // #7 INCORRECT
// // function a(b,c){
// //     return str(b)+str(c)
// // }
// // console.log(a(2,5))

// // #8
// function a(){
//     b = 100
//     console.log(b)
//     if (b < 10){
//         return 5
//     }
//     else{
//         return 10
//     }
//     return 7
// }
// // console.log(a())
// // Expected: 100, 10
// // Actual: 100, 10

// // #9
// function a(b,c){
//     if (b<c){
//         return 7
//     }
//     else{
//         return 14
//     }
//     return 3
// }
// // console.log(a(2,3))
// // console.log(a(5,3))
// // console.log(a(2,3) + a(5,3))
// // Expected: 7, 14, 21
// // Actual: 7, 14, 21

// // #10
// function a(b,c){
//     return b+c
//     return 10
// }
// // console.log(a(3,5))
// // Expected: 8
// // Actual: 8

// // #11 HALF AND HALF
// // b = 500
// // console.log(b)
// function a(){
//     // b = 300
//     // console.log(b)
// }
// // console.log(b)
// a()
// // console.log(b)
// // Expected: 500, 500, 300, 500 because I did not think the scope of b in the function was global, nothing was returned either
// // Actual: 500, 500, 300, 300

// #12 CORRECT!
// b = 500
// console.log(b)
// function a(){
//     b = 300
//     console.log(b)
//     return b
// }
// console.log(b)
// a()
// console.log(b)
// Expected: 500, 500, 300, 300
// Actual: 500, 500, 300, 300

// #13
// b = 500
// console.log(b)
// function a(){
//     b = 300
//     console.log(b)
//     return b
// }
// console.log(b)
// b=a()
// console.log(b)
// Expected: 500, 500, 300, 300
// Actual: 500, 500, 300, 300

// #14
// function a(){
//     console.log(1)
//     b()
//     console.log(2)
// }
// function b(){
//     console.log(3)
// }
// a()
// Expected: 1, 3, 2
// Actual: 1, 3, 2

// #15
function a(){
    console.log(1)
    x = b()
    console.log(x)
    return 10
}
function b(){
    console.log(3)
    return 5
}
y = a()
console.log(y)
// Expected: 1, 3, 5, 10
// Actual: 1, 3, 5, 10