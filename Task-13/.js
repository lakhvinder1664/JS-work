// singlton Object
// const tinderUser = new Object()

// object literals
const InstaUser = {}

InstaUser.id = "13acbee"
InstaUser.name = "Lucky"
InstaUser.isloggedin = false

// console.log(InstaUser);

const newUser = {
    email: "random@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Lakhvinder",
            lastname: "Singh"
        }
    }
}

// console.log(newUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "l@gmail.com"
    },
  
    {
        id: 1,
        email: "l@gmail.com"
    },
  
    {
        id: 1,
        email: "l@gmail.com"
    },
  
    {
        id: 1,
        email: "l@gmail.com"
    },
  
]

user[1].email
// console.log(InstaUser);

// console.log(Object.keys(InstaUser));
// console.log(Object.values(InstaUser));
// console.log(Object.entries(InstaUser));

// console.log(InstaUser.hasOwnProperty('islogged'));


