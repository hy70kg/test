var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("123");
var changeColor = function(){
  console.log("asdfa");
  body.style.background = 
  "linear-gradient(to right, " 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
// color2.addEventListener("input", function(){
//   console.log(color2);
// })




let b = 10;
let aa = false;

if (b>0) {
  aa = true;
  console.log("in", aa);
}

console.log("out", aa);


const user = {
  name: "tom",
  age: "189",
  skill: "hello" 
}

const { name, age, skill} = user;
console.log(name);

const greeting = `"hi" ${name} you are good, you are ${age+1000}.`
console.log(greeting);
const add = (a, b) => a + b;

const www = (a) => (b) => a*b;
www(2);




const action = (num) => num+1;
const action2 = (sum) => sum/2;

const avg = (f, g) => (a) => f(g(a));

avg(action, action2)(4);


what else si keed?
const (){
  this rightkey{}is some times 
very fked up}
or I can use end(){