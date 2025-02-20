// console.log(1+1);
// console.log(1+2);
// console.log(1+3);

/* Regular Function */
//  the alphabets inside box are parameters 
// function add(a,b,c=99){
//     console.log(a+b+c)
// }
//the numbers here are argument 
// add(1,3,1);

/* Named Function */
// let add = function(a,b,c){
//     console.log(a+b+c);
// }
// add(1,3,1);

/* Arrow Function */
// let add = (a,b,c)=> {
//     console.log(a+b+c);
//     console.log("Hello")
// }
// add(1,2,1);
// function (a,b,c) {
//     console.log("Hello World")
// }

// const callback = (fn)=>{
//     return fn
// }


//Anonymous Function
// (()=>{
//     console.log("I am anonymous")
// })()


// Function to get the square of a number
// const square = (a) => (a*a);
// const result = square(3);
// console.log(result);



//Loops in Javascript

const friends = ['Manish', 'Bob', 'Pranjal'];
/* For loop */
// for(let i=0; i<3; i++){
//     console.log(i);
// }
//for(initilaization:condition;iteration)
// i++ === i = i+1


/* Example of for loop */
// for(let i=0; i<friends.length; i++){
//     console.log(friends[i])
// }

/* While loop */
// let i=0;
// while(i<friends.length){
//     console.log(friends[i])
//     i++
// }

// for(friend of friends){
//     console.log(friend)
// }


// const person = {
//     names: "Manish Basnet",
//     address: "Itahari"
// }
// for(let key in person){
//     console.log(key,person[key])
// }


/* Hosited */
//var is hoisted and regular functions are hoisted
// console.log(name);
// var name = "Manish Basnet";
// let name = "Mahesh Basnet"


// add();
// function add(){
//     console.log(3+1)
// }
// add()

// add()
// var add = ()=>{
//     console.log(1+1);
// }

// var add = function(){
//     console.log(1+1);
// }

// function example(){
//     console.log(y);
//     var y = 99
// }
// example();