function hello(num1,str) {
  if (str === "c") {
let x = num1 * 9 / 5 + 32;
console.log(x + "°F");
  } else if (str === "f") {
let x = (num1 - 32) * 5 / 9;
console.log(x + "°C");
  }
  
}

hello(30,"c");