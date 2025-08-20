// let fruits_3 = ["apple", "grapes", "banana"];

// PRINT VALUES
// console.log(fruits_3);
// console.log(fruits_3[2]);
// console.log(fruits_3.length);

// ADD OR REMOVE
// fruits_3.push("orange");
// fruits_3.pop();
// fruits_3.unshift("grapes");
// fruits_3.shift();
// console.log(fruits_3);


// ------------------------ //

// 1 . Odd/Even find in array.

let num_7 = [5, 2, 9, 1, 7, 4, 6];

// even
console.log("Even numbers:");
for (let i = 0; i < num_7.length; i++) {
    if (num_7[i] % 2 === 0) {
        console.log(num_7[i]);
    }
}

// odd
console.log("Odd numbers:");
for (let i = 0; i < num_7.length; i++) {
    if (num_7[i] % 2 !== 0) {
        console.log(num_7[i]);
    }
}

// 2 . Find the uniqe element in array.

let array = [1, 2, 2, 3, 4, 4, 5];

for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            count++;
        }
    }
    if (count === 1) {
        console.log("Unique element:", array[i]);
    }
}
