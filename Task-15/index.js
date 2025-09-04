// Function and Parameter

// const { use } = require("react")





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
// console.log(loginUserMessage("newUsser"));


// function name(){
//     console.log ("hello world");
// }

// name()


function hello(name){
    // console.log("hi"+ name);
    // console.log(`hi ${name}`)
}
hello("Lucky");

function add(num1,num2){
    return num1 + num2;
}
// console.log(add(5,7));

function multiplies(one, two, three){
    return one * two * three;
} 
const total = multiplies(4, 5, 5);
// console.log(`Total is: ${total}`);


function checkOddEven(number){
    if(number%2=== 0){
        // console.log(number + " is even");
    }
    else{
        // console.log(number + " is odd");
    }
}

checkOddEven(-5);


function squar(num){
    return num * num;
} 
// console.log(squar(5));

function sumofallarranum(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum;
}
    // console.log(sumofallarranum([1,2,3,4,5,6,7,8,9,10]));

function touppercase(str){
    return str.toUpperCase();
}
//  console.log(touppercase("hello"));

function capitalwords(capital){
    return capital.toUpperCase();
}

// console.log(touppercase("heyyy"));

function checkLargerNum(a,b){
    if(a<b){
        return b;
    } else{
        return a;
    } 
}
// console.log(checkLargerNum(8,4));


function sumofarr(num){
  let sum = 0;
    for(let i = 0; i < num.length; i++ ){
        sum+= num[i];
    }
    return sum;
}
// console.log(sumofallarranum([1,3,4,6]));


function one(num){
    const username = "lakhvinder"

    function two(){
        const website = "portfolio"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true){
    const username = "lakhvinder"
    if (username === "lakhvinder"){
        const website = " portfolio"
        //console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// console.log(addone(5));

// function addone(num){
//     return num + 1
// }


// addtwo(5)
// const addtwo = function(num){
//     return num + 2
// }



const user = {
    username: "lucky",
    price: 888,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "lakhvinder"
// user.welcomeMessage()

// console.log(this);


// function tea(){
//     let username = "lucky"
//     console.log(this.username);
// }

// tea()


// const tea = function(){
//     let username = "lucky"
//     console.log(this.username);
// }

// tea()


const tea = () => {
    let username = "lucky"
    console.log(this);
}

// tea()


// const addtwo = (num1,num2) =>  {
//     return num1 + num2
// }


// const addtwo = (num1,num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "lakhvinder"})


console.log(addtwo(3,6));