// Object syntax

mySym = Symbol("key1")

const User_1 = {
    name: "Lakhvinder",
    [mySym]: "myKey1",
    age: 22,
    location: "haryana",
    email: "lucky@gmail.com",
    isloggedin: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(User_1.name) 
// console.log(User_1["age"])
// console.log(User_1[mySym]) 

User_1.email = "lucky@instagram.com"  
// Object.freeze(User_1)
User_1.email = "lucky@yahoo.com"
// console.log(User_1.email)

// console.log(User_1) 

User_1.greeting = function(){
    console.log("hello user");
}

User_1.greetingtwo = function(){
    console.log(`hello user, ${this.name}`);
}


console.log(User_1.greeting());
console.log(User_1.greetingtwo());
