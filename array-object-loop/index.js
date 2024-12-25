let arrayLoop = document.querySelector(".array-loop");
let forLoopEl = document.querySelector(".for-loop");
let forOfEl = document.querySelector(".for-of");
let mapEl = document.querySelector(".map");
//let filterEl = document.querySelector(".filter");
let reduceEl = document.querySelector(".reduce");

let forInObjEl = document.querySelector(".for-in");

const fruits = ["apple", "banana", "cherry"];
const person = {
  name: "Ashraf",
  age: "36",
  company: "unilever",
  city: "chittagong",
};

//for loop

for (let i = 0; i < fruits.length; i++) {
  let fruitEl = document.createElement("div");
  //fruitEl.style.border = '1px solid'
  fruitEl.innerHTML = fruits[i];
  forLoopEl.appendChild(fruitEl);
}

//for of loop
for (let fruit of fruits) {
  forOfEl.innerText = fruit;
}

//for in loop at object
for (let key in person) {
  forInObjEl.innerText = `${key} : ${person[key]}`;
}

//applay map function in array
let numbers = [1,2,3,4,5]
let doubled = numbers.map(number => number + 2)
mapEl.innerText = doubled;

//filter
let animals = ['cat', 'dog', 'Elephant', 'Tiger']
