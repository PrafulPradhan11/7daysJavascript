// The map() method creates a new array by applying a function to each element of the original array
// It doesn't modify the original array

/* Syntax  */
// const newArray = Array.map((element, Index, array) =>{
//     return modifiedElement
// })

// const numbers = [1,2,3,4,5];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);

// const users = [ 
//     {id:1, name:'Akon'},
//     {id:2, name:'Baby'},
//     {id:3, name:'Charlie'},
// ];
// userNames = users.map(user => user.name);
// console.log(userNames);

/*  */
//forEach
//The forEach() method executes a function for each array element
// It does not return a new array (unlike map())

/* Syntax */
// Array.forEach((ekement, index,array) => {

// });

// const numbers =[1,2,3];
// numbers.forEach(num => console.log(num*2));
// Useful when you only need to perform an action (e.g., logging, updating UI).
// Cannot be used for transforming data (since it doesn’t return anything).

// let sum = 0;
// const numbers = [1,2,3,4];
// numbers.forEach(num => {
//     sum += num;
// });
// console.log(sum)

/*  */
//filter 
//The filter method creates a new array containing only elements that match a condition
// Doesn't mdoify the original array

/* Syntax */

// const filteredArray = Array.filter((element, index, araray) => {
//     return CSSConditionRule;
// });

// const numbers =[1,2,3,4,5,6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// const users = [
//     {name:'Akon', active:true},
//     {name:'Billi', active:false},
//     {name:'Charlie', active:true}
// ];
// const activeUsers = users.filter(user => user.active);
// console.log(activeUsers);

/*  */
//Reduce

//The reduce() method reduces an array to a single value(e.g, sum, product, object)
// Tt uses an accmulator that sotres the intermediate result

/* Syntax */
// const result = array.reduce((accumulator, element, index, array) =>{
//     return updatedccumulator;
// }, initialValue);
/* accumulator- Stores teh accumulated result
    element- Current array item
    initialValue- Srearting value for the accumulator */

// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana','apple'];
// const count = fruits.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
// }, {})
// console.log(count);

// const arrays = [[1,2], [3,4],[5,6]];
// const flatArray = arrays.reduce((acc, arr) => acc.concat(arr), []);
// console.log(flatArray);
//Flattens a nested array into a single-level array.


/* Finding Maximum Value */
//array.reduce((accumulator, currentValue, index, array) => { ... }, initialValue);
/* accumulator (max) – Holds the running maximum value.
    currentValue (num) – The current element being processed.
    initialValue (numbers[0]) – The starting value for the accumulator. 
    */
// const numbers = [5,12,8,130,44];
// const maxNumber = numbers.reduce((max,num) => (num > max ? num : max), numbers[0]);
// console.log(maxNumber);


/* Finding Minimum Value */
// const numbers = [5,12,8,130,44];
// const minNumber = numbers.reduce((min,num) => (num < min ? num : min), numbers[0]);
// console.log(minNumber);


/* Grouping Object by property */
// const people = [
//     {name:"Akon",age:25},
//     {name:"Billi",age:27},
//     {name:"Charlie",age:25},
//     {name:"Danny",age:27}
// ];
// const groupedByAge = people.reduce((acc, person) => {
//     acc[person.age] = acc[person.age] || [];
//     acc[person.age].push(person);
//     return acc;
// }, {});
// console.log(groupedByAge);


/* Counting the number occurrences */
// const fruits = ['apple','banana','apple','orange','apple'];
// const fruitCount = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});
// console.log(fruitCount);

/* Summingup values in Array */
const products = [
    {name:"Mobile",price:900},
    {name:"Laptop",price:2000},
    {name:"Projector",price:700}  
];
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);

/* Removing Duplicates from Array */
// const numbers = [1,2,3,4,4,5,2,1];
// const uniqueNumbers = numbers.reduce((acc, num) =>{
//     if(!acc.includes(num))acc.push(num);
//     return acc;
// }, []);
// console.log(uniqueNumbers);

/* Creating Object from Array */
// const users = [ 
//     {id:1,name:"Akon"},
//     {id:2,name:"Billi"},
//     {id:3,name:"Charlie"},
// ];
// const userObject = users.reduce((acc, user) => {
//     acc[user.id] = user;
//     return acc;
// }, {});
// console.log(userObject);


/* Calculating the average of an Array */
const numbers = [10,20,30,40,50];
const average = numbers.reduce((sum,num,index,arr) => {
    sum += num;
    return index === arr.length - 1 ? sum / arr.length : sum;
}, 0);
console.log(average);

/* Merging Multiple Objects */
// const objects = [
//     {a:1,b:2},
//     {c:3,d:4},
//     {e:5,f:6}
// ];
// const mergedObject = objects.reduce((acc, obj) => ({...acc, ...obj}), {});
// console.log(mergedObject);




 /* Purpose 
    map and filter returns new array whereas none of them modifies original
     map() --      Transform elements 
     forEach() --  Execute an action on each element
     filter()--    Select elements based on a condition
     reduce()--    Reduce an array to a single value 
     */

/*  When to use 
    Need to transform elements into a new array	                                      --- map()
    Just want to loop over elements (logging, API calls, modifying external variables --- forEach()
    Want to extract only elements that match a condition                              --- filter()
    Need a single value from an array (sum, count, average, merge objects)	          --- reduce()
    */

 /*
     Use map() when you need a new array with modified values.
     Use forEach() when you need to perform an action (logging, updating UI) but don’t need a new array.
     Use filter() when you need to extract specific elements from an array.
     Use reduce() when you need to combine elements into a single result (sum, count, flattening). 
     */

