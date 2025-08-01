
//Arrow Functions -- Arrow functions provide a shorter syntax for writing functions.
//No own this, arguments, or super.

const greet = name => console.log(`Hello, ${name}`);
greet("Akash"); 



// Destructuring --
// Destructuring allows unpacking values from arrays or properties from objects.

const arr=[1,4,5]
const [a,b,c] =arr;
console.log(a,b);

// Object Destructuring
const user = { name: "Akash", age: 22 };
const { name, age } = user;
console.log(name);             // Akash




//  Array Methods: map(), filter(), reduce()
// map() – transform each element

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); 

// filter() – filter items by condition
const ages = [12, 18, 25, 14];
const adults = ages.filter(age => age >= 18);
console.log(adults); 


// reduce() – accumulate values
const nums = [10, 20, 30];
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 60