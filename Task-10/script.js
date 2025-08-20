// Loops

// while (condition) {

// }

// let i = 0;
// while (i < 3) {
//     console.log(i);
//     i++;
// }


//  let b = 10;
// while (b = 20){
//     console.log(b);
//    b++;
// }

// let a = 15;
// while (a <= 45){
//     console.log(a);
//     a++;
// }

// let l = 0;
// while (l<=1000){
// if(l % 5 == 0){
//   console.log(l);
// }
//  l++;
// }


// 0 to 10
// let a = 0;
// while(a <= 10){
//     console.log(a);
//     a++;
// }

// even no. to 1 to 20
// let l = 1;
// do{

//     if(l % 2 == 0){
//         console.log(l);
//     }
//     l++;
// }while(l <= 20)
// Print odd numbers from 15 to 1 (reverse order)
// Output: 15 13 11 9 7 5 3 1

// let num = 8;
// let type = (num % 2 === 0) ? "even" : "odd";
// console.log(type)

// let username = null;
// let msg2 = username ?? "Guest";
// console.log(msg2);

// let a = 1;
// while(a<=11){
//     if(a%1===0 && a%a===0){
//         console.log(a);
//     }
//     a++;
// }

// let a = 20;
// while(a>=1){
//     console.log(a);
//     a--;
// }

// let a = 1;
// let num = prompt("enter the num");
// while(a<=num){
//     console.log(a);
//     a++;
// }

// let a = 1;
// let sum = 0;
// while(a<=10){
//     sum = sum + a;
//     a++;
// }
// console.log(sum);


// USING WHILE LOOP
// let i = 0;
// while (i < fruits_3.length) {
//     console.log(fruits_3[i]);
//     i++;
// }

// let array = [5, 2, 9, 1, 7];
// array.sort((a, b) => b - a); // Sort in descending order
// console.log(array);

// Do While
// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while(i<=5);

// let x = 10;
// do{
//     console.log("this runs even its false x < 10");
//     x++;
// } while(x<10);

// let num = 1;
// let sum = 0;

// do {
//     sum = num + sum;
//     console.log("sum:", num);
//     num++;
// } while (num<=5);

// let i = 1;
// let num = 0;
// do {
//     sum = i + num;
//     console.log(i);
//     i++;
// } while(i<=10);

// let i = 2;
// do {
//     console.log(i);
//     i+=2;
// } while(i<=20);

// let num = 44;
// do{
//     console.log(num);
//     num +=2;
// } while(num<=62);

// let i = 1;
// let sum = 0;

// do{
//     sum = i + sum;
//     i++;
// } while(i<=100);
// console.log(sum);

// let i = 1;
// let sum = 0;
// do{
//     sum = i + sum;
//     i++;
// } while(i<=10);
// console.log(sum);

// let i = 10;
// do{
//     console.log(i);
//     i-=1;
// }while(i>=1);

// let i = 1;
// do {
//     console.log("5 x " + i + " = " + (5 * i));
//     i++;
// } while(i<=10);

// let i = 1;
// do{
//     console.log("6 x " + i + " = " +(6 * i));
//     i++;
// } while(i<=10);

// 1 . Write a while loop to print numbers from 1 to 5.

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// 2 . Write a do...while loop to print numbers from 1 to 5.

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// 3 . What’s the main difference between while and do...while?
//     the difference is that in while it check condition first but in do while it runs the code before cheking the condition.

// 4 . Print all even numbers from 1 to 20 using a while loop.

// let even_num = 1;
// while(even_num<=5){
//     console.log(even_num);
//     even_num++;
// }

// 5 . Print numbers from 10 down to 1 using a do...while loop.
// let i = 10;
// do{
//     console.log(i);
//     i-=1;
// } while(i>=1);

// 6 . Find the sum of numbers from 1 to 50 using a while loop.
// let i = 1;
// let sum = 0;
// while(i<=50){
//   sum = i + sum;
//     i++;
// }
// console.log(i);

// For loop

// for(i = 1; i<=10; i++){
//     console.log(i);
// }

// for(num = 5; num<=15; num++){
//     console.log(num);
// }

// for(let i = 2; i<=10; i += 2){
//     console.log(i);
// }

// let sum = 0;
// for(let i = 1; i<=10; i++){
//     sum += i;
// } console.log(sum);

// let total = 0;
// for(let num = 66; num <= 75; num++){
//     total += num;
// } console.log(total);

// 1 . Print numbers 1 to 10
// Use a for loop to print numbers from 1 to 10.

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// 2 . Print odd numbers between 1 and 20
// Hint: use i += 2 or check with %.

// for(let i = 1; i<=20; i +=2){
//     console.log(i);
// }

// 3 . Multiplication table of 7
// Print the table of 7 (from 7 × 1 up to 7 × 10).

// for(let i = 1; i<= 10; i++)[
//     console.log("7 x " + i + " = " + (7 * i))
// 

// 4 . Factorial of 5
// Use a for loop to calculate 5! = 1 × 2 × 3 × 4 × 5.

// let Factorial = 1;
// for(let i = 1; i<=5; i++){
//     Factorial *= i;
// }
// console.log("Factorial of 5 is:", Factorial);


// factorial of 10
// let factorial = 1;
// for(let i = 1; i<= 10; i++){
//     factorial *= i;
// } console.log("factorial of 10 is :", factorial);


let n = 5; // size

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += "* ";
  }
  console.log(i);
}
