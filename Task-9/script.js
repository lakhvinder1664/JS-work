// Logical Operators

// OR Example
// let hour = 24;
// let isweekend = true;

// if(hour > 12 || hour < 18 || isweekend){
//     console.log("office is closed")
// }

// AND Example
// let hour = 12;
// let minute = 30;

// if(hour == 12 && minute ==30){
//     console.log( 'The time is 12:30' );
// }
// if (1 && 0) { // evaluated as true && false
// alert( "won't work, because the result is falsy" );
// }

// console.log(null  || 2 && 3 || 4);


// Write an if condition to check that age is between 14 and 90 inclusively. Inclusively” means that age can reach the edges 14 or 90.

let age = 25;
 if(!(age >= 14 && age <= 90)){
    console.log(Boolean("not in range"));
 }
 