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

// const addtwo = (num1, num2) => ({username: "lakhvinder"})


// console.log(addtwo(3,6));



// Immediately Invoked Function Expressions (IIFE)

(function newtea(){
    // name IIFE
    // console.log('DB CONNECTED');
})();

( (name) => {
    // console.log(`DB CONNECTED TWO ${name}`)
} ) ('lucky')

const isuserloggedIn = true
const temperature = 41

// if (temperature === 40){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50")
// }


// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`)
// } 
// console.log(`user power: ${power}`)

// const balance = 1200

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedinFromGoogle = false
// const loggedinFromEmail = true

// if (userLoggedIn && debitCard && 2==3){
//     console.log("allow to buy course");
// }

// if (loggedinFromGoogle || loggedinFromEmail){
//     console.log("user logged in")
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 7

// switch (month) {
//     case 1:
//         console.log("janurary")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;

//         default:
//             console.log("default case match")
//         break;
// }

const userEmail = []

if (userEmail) {
    // console.log("got email");
} else {
    // console.log("didn't get it");
}


// falsy value 
// false, 0, -0, 0n, null, undefined, NaN

// trutht value
// "0", 'false', "", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("objec is empty");
// }

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <=80 ? console.log("lesss than 80") : console.log("more than 80")

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);

}

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and inner loop ${i}`)
//     console.log(i + '*' + j + ' = ' + i * j);
//     }
// }

let myArray = ["Spiderman", "Superman", "Zoro"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// for (let index = 1; index  <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }
for (let index = 1; index  <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}