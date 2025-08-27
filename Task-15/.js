// Function and Parameter



function myname(){
    console.log("l")
    console.log("u")
    console.log("c")
    console.log("k")
    console.log("y")   
}

// myname()

function plusTwonum(num1, num2){
   
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = plusTwonum(5, 8)
// console.log("result:", result);



// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("lucky"));
// console.log(loginUserMessage());



// function loginUserMessage(username){
function loginUserMessage(username = "lucky"){
    // if(username === undefined){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("lucky"));
// console.log(loginUserMessage());
console.log(loginUserMessage("newUsser"));