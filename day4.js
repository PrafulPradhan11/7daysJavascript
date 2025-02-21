
// function sayHello(name,callback){
//     console.log(name)
//     callback()
// }

// function sayGoodBye(){
//     console.log("GoodBye")
// }

// sayHello("Manish",sayGoodBye)

// Callback function are functions passed as an argument
// Higher order function is a function that take accept one or more functions(callback) or return a function

// const fruits =['Apple', 'Banana', 'Mango']

//forEach HOF 

// fruits.forEach(function(fruit){
    // console.log(fruit)
// })

// const numbers = [1,2,3,4,5]
// const squaredNumbers = []

// numbers.forEach(function(number){
//     squaredNumbers.push(number ** 2)
// })
// console.log(squaredNumbers)

// const squareNumbers =  numbers.map(function(number){
//     return number ** 2
// })
// console.log(squareNumbers);

const users=[
    {
        id:1, 
        firstName:"Manish",
        lastName: "Basnet",
        address:"Itahari"
    }, 
    {
        id:2, 
        firstName:"Bob",
        lastName: "Marley",
        address:"Itahari"
    },
    {
        id:3, 
        firstName:"Pranjal",
        lastName: "Sharma",
        address:"Itahari"
    }
]

// users.forEach((user)=>{
//     console.log(user.firstName + lastName);
// })

// const result = users.map((user)=>{
//     return{
//         // id : user.id, 
//         // firstName : user.firstName,
//         // lastName: user.lastName
//         ...user,
//         fullName: user.firstName + user.lastName
        
//     }
// })
// console.log(result)


// const numbers2 = [1,2,3,4];


/* Get this data from above array */
// [
//     {
//         number:1,
//         name: "A"
//     },
//     {
//         number:2,
//         name:"B"
//     },
//     {
//         number:3,
//         name:"C"
//     },
//     {
//         number:4,
//         name:"D"
//     }
// ]


// const output = numbers2.map((number)=>{
//    return{
//     number: number,
//     name: "A"
//    }
// })
// console.log(output)


// const number3 = [1,2,3,4,5,6,7,8,9,10]

// const evenNumbers = number3.filter(function(number){
//     return number  % 2 == 0
// })
// console.log(evenNumbers)


const books = [
    {
        title: "Mahabir Pun",
        author: "Mahabir Pun",
        year: 2023
    },
    {
        title: "Think like a monk",
        author: "Jay Shetty",
        year:2020
    },
    {
        title: "Book3",
        author: "Author3",
        year: 2021
    },
    {
        title: "Book4",
        author: "Author4",
        year: 2000
    },
    {
        title: "Book5",
        author: "Author5",
        year: 1990
    },
    {
        title: "Book6",
        author: "Author6",
        year: 1999
    },
    {
        title: "Book7",
        author: "Author7",
        year: 2001
    },
    {
        title: "Book8",
        author: "Author8",
        year: 2002
    },
]

// const output = books.filter(function(book){
//     return book.year > 2000
// })
// console.log(output);

// const files = ["app.js","index.html","script.js","style.css"];
// const jsFiles = files.filter((file)=>{
//     return file.endsWith('.js')
// })
// console.log(jsFiles);

// const data = [10,null,0,"Manish",undefined,null,50]

// const output = data.filter((item)=>{
//     return item !== null && item !== undefined && item !== 0
// })
// console.log(output)

// const authorOnly = books.filter((scan)=>{
//     return scan.author === "Mahabir Pun"
// })
// console.log(authorOnly);


//Reduce

const numbers = [1,2,3,4,5]

const result = numbers.reduce(function(accumulator,currrentValue){
    return accumulator + currrentValue
}, 0)
// console.log(result)


const cartItems = [
    {
        namae: "Product A",
        quantity: 2,
        price: 2
    },
    {
        namae: "Product B",
        quantity: 5,
        price: 5
    },
    {
        namae: "Product C",
        quantity: 4,
        price: 200
    },
]

//total quantity, total kati amount ko product xa

const output = cartItems.reduce(function(accumulator,currentProduct){
    // accumulator.totalPrice = accumulator.totalPrice + (currentProduct.quantity * currentProduct.price)
    accumulator.totalPrice += (currentProduct.quantity * currentProduct.price)
    // accumulator.totalQunatity = accumulator.totalQunatity + currentProduct.quantity
    accumulator.totalQunatity += currentProduct.quantity
    return accumulator
}, {totalPrice:0, totalQunatity:0})
// console.log(output);

const people =[
    {
        name:"Manish", age:22
    },
    {
        name:"Bob", age:20
    },
    {
        name:"Pranjal", age:25
    },
    {
        name:"Pranjal", age:22
    }
]

const grpoupData = people.reduce(function(accumulator,person){
     const age = person.age
     if(!accumulator[age]){
        accumulator[age] = []
     }
     accumulator[age].push(person)
     return accumulator
}, {})

console.log(grpoupData);