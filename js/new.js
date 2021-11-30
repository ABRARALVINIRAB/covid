var fruitObject = { 'a': 'apple', 'b': 'banana', 'c': 'carrot' };
const x = Object.keys(fruitObject); // this returns all properties in an array ["a", "b", "c"]
console.log(x);
const z = fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - 1]];
console.log(z)