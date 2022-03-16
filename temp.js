const Stack = require('./stackStructure.js');

const stack = new Stack();
stack.push("James");
stack.push("Steven");
console.log(stack.top);
console.log(stack.dataStore[0]);