// const names = ['Manish', 'Mahesh']
// names[2] = "Anish";
// console.log(names)

const days = ['Sunday', 'Monday', 'Tuesday']
// days[3] = "Wednesday"
// days.push("Thrusday");
// days.pop();

// days.unshift('Saturday');
// days.shift();
// console.log(days);
// console.log(days.length)

const numbers = [1,2,3,4,5]

//slice ----> used to create a copy of a portion of the array. It doesn't modify the original array
// slice(startIndex, endIndex) --> where startIndex is inclusive, endIndexis exclusive
// const newSlicedArray = numbers.slice(1,4);
// console.log(numbers);
// console.log(newSlicedArray);


//splice --> is used to change the content of an array by removing or replacing existing and / or adding new elements\
// splice(satrtInden, deletCount, item)

// let splicedNumbers = numbers.splice(2,1,10,11)
// console.log(splicedNumbers);
// console.log(numbers);

//split
// let text = "I love Javascript"
// const newArray = text.split(" ")
// console.log(newArray);


// const person = {
//     name : "Manish Basnet",
//     address : "Itahari"
// }

// Object.freeze(person); // This stops the modification in the value of key name.
// person.name = "haha";
// console.log(person)

// console.log(Object.keys(person));
// console.log(Object.values(person));


// CONDITIONAL in Javascript

//    const isRaining = false
//    if(isRaining) {
//     console.log("Carry umbrella")
//    }else{
//     console.log("Don't carry umbrella")
//    }


// // terneary operator 
// const result =  isRaining ? "Carry Umbrella" : "Don't carry umberlla";


// // short circuit ecaluation
// const result = isRaining && "Carry Umbrella" || "Don't carry umberlla"
// console.log(result);

let isLoggedIn =  true
const name = isLoggedIn && "Authenticated"
// console.log(name);


// const tempreature = 30
// if(tempreature > 30){
//     console.log("It is hot outside")
// }else if(tempreature > 25 && tempreature <=30){
//     console.log("It is pleasant outside")
// }else {
//     console.log("IT is cold outside")
// }



//Nulish Coelescing Operator

let age = null
// if(age === null || age === undefined){
//     age = "No age"
// }
let result = age ?? "No age"
console.log(result) 



//Spme additional 
//Array destructing
// let arr = [1,2,3];
// let [a,b,c,d = 6] = arr;
// console.log(b);

// Object destructing 
// let obj = {name: "Michale"};
// let {name:fName} = obj;
// console.log(fName);

//Another way of destructing the object
// let remain = ["baby1", "baby2", "baby3"];
// let { 1: f } = remain;
// console.log(f);
