// Changing the color of body with timing.

// document.body.style.background = 'skyblue';
// setTimeout(()=> document.body.style.background = '', 2000);


// Query selector
// let byTag = document.querySelector("p");
// console.log(byTag.textContent);

// let byId = document.querySelector("#first-heading");
// console.log(byId.textContent);

// let byclass = document.querySelector(".btn");
// console.log(byclass.textContent);


// Changing something with it
// let heading = document.querySelector("h1");
// heading.textContent = "it is first heading!";
// heading.style.color = "white";

// 
// let btn = document.querySelector(".btn p");
// btn.textContent = "click it";
// btn.style.color = "white";


// Using nested selectors
// let insideBtn = document.querySelector(".btn");
// console.log(insideBtn.textContent);
// console.log(insideBtn.innerHTML);

// let insideBtn = document.querySelector(".btn");
// console.log(insideBtn.innerText);
// console.log(insideBtn.textContent);
// console.log(insideBtn.tagName);

// const name = "lakhvinder";
// const git_rep = 13;

// console.log(`hello my name is ${name} and my git repo is ${git_rep}`);

// const game_name = new String (`lakhvinder`);
// function add(a,b){
//     return a+b;
// }
// console.log(add(3,4));
// const greet = () => {
//     console.log("Hello!");
//     console.log("Welcome to JavaScript!");
// };

// greet();

// Write an arrow function called double that takes one number and returns it multiplied by 2.
// const double = (num) =>{
//     return num * 5;
// }; 
// console.log(double(5));

// const double = a=> a*2;
// console.log(double(3));
// const double = (a) =>{
//     return a * 6;
// };
// console.log(double(7));

// Write an arrow function called isEven that takes a number and returns:
// true if the number is even
// false if the number is odd

    // const isEven = (num) =>{
    //     return num % 2 === 0;
    // };

    // console.log(isEven(1));

//   Write an arrow function called greetUser that takes a name and prints:
// const greetname = (name)=>{
//     console.log("hey! "+ name);
// };
// greetname("lakhvinder");

const greetname = (name) => console.log(`hello ${name}!`);
greetname("lucky")

