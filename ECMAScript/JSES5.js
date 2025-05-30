// 1. "use strict"

// Definition:
// "use strict" is a directive introduced in ES5 to enable strict mode, which helps catch common mistakes in JavaScript and makes debugging easier.

// Why it was introduced (Usage)?
// Before ES5, JavaScript allowed many bad coding practices, such as:
// Using undeclared variables.
// Assigning values to read-only properties.
// Using duplicate parameter names in functions.
// Strict mode was introduced to prevent these mistakes.

// How it was handled before ES5?
// There was no strict mode, and developers had to be careful manually.

// Syntax:
"use strict";
x = 10; // ❌ Error: 'x' is not defined


// Example:
// Without strict mode:
function test() {
    y = 20;  // JavaScript allows this (creates a global variable)
    console.log(y); // 20
}
test();
console.log(y); // 20 (exists in global scope)


// With strict mode:
"use strict";
function test() {
    y = 20;  // ❌ Error: 'y' is not defined
}
test();



// 2. String[number] Access

// Definition:
// ES5 allows accessing characters of a string using array-like indexing.

// Why it was introduced (Usage)?
// Before ES5, the only way to access a character was using .charAt(index).

// How it was handled before ES5?
// let str = "Hello";
// console.log(str.charAt(1)); // "e"


// Syntax & Example:
// With ES5:
let str = "Hello";
console.log(str[1]); // "e"



// 3. Multiline Strings

// Definition:
// Before ES5, JavaScript did not support multi-line strings natively.

// Why it was introduced (Usage)?
// To allow writing strings in multiple lines without using escape sequences (\n).

// How it was handled before ES5?
// let text = "This is line 1\n" + 
//            "This is line 2";
// console.log(text);

// Syntax & Example:
// With ES5:
let text = "This is line 1 \
This is line 2";
console.log(text);



// 4. String.trim()

// Definition:
// Removes whitespace from both ends of a string.

// Why it was introduced (Usage)?
// Before ES5, developers had to manually remove spaces.

// How it was handled before ES5?
// let str = "  Hello World  ";
// let trimmed = str.replace(/^\s+|\s+$/g, ""); // Complicated regex
// console.log(trimmed); // "Hello World"

// Syntax & Example:
// With ES5:
// let str = "  Hello World  ";
console.log(str.trim()); // "Hello World"


// 5. Array.isArray()
// 📘 Definition:
// Checks whether the passed value is an actual array.

// 🧠 Why introduced:
// Before ES5, to check if something is an array, developers used:
Object.prototype.toString.call(arr) === "[object Array]"


// 😵 Confusing, right? Hence, ES5 added Array.isArray().

// 🧪 Syntax:
Array.isArray(value)

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("Hello"));  // false


// 6. Array.forEach()
// 📘 Definition:
// Executes a function once for each array element (used for iteration, doesn't return anything).

// 🧠 Why introduced:
// To avoid traditional for loops.
// Before ES5, we used traditional for loops:
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  

// 🧪 Syntax:
array.forEach(function(element, index, array) {
    // logic
  });
  

// ✅ Example:
let nums = [1, 2, 3];
nums.forEach((num) => {
  console.log(num * 2); // 2, 4, 6
});
// 📌 Note: It does not return a new array.


// 7. Array.map()
// 📘 Definition:
// Creates a new array by transforming each element using a callback.

// 🧠 Why introduced:
// To allow functional transformations over arrays.
// Before ES5, to transform an array:
let newArr = [];
for (var i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2);
}


// 🧪 Syntax:
const newArray = array.map(function(element, index, array) {
    return transformedElement;
  });

//   🧪 Example:
// let nums = [1, 2, 3];
let doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
// 🎯 Returns a new array. Original remains unchanged.


// 8. Array.filter()
// 🧠 Why introduced:
// Before ES5, filtering required manual logic:
let result = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 2) result.push(arr[i]);
}

// 📘 Syntax:
const filteredArray = array.filter(function(element, index, array) {
    return condition; // must return true or false
  });
//   🧪 Example:
// let nums = [1, 2, 3, 4];
let even = nums.filter(num => num % 2 === 0);
console.log(even); // [2, 4]


// 9. Array.reduce()
// 🧠 Why introduced:
// Before ES5, summing up elements:
let sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

// 📘 Syntax:
// const result = array.reduce(function(accumulator, currentValue, index, array) {
//     return updatedAccumulator;
//   }, initialValue);

// 🧪 Example:
// let nums = [1, 2, 3, 4];
let total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10



// 10. Array.reduceRight()
// Same as reduce, but works from the end of the array toward the beginning.

// 🧪 Example:
let letters = ['a', 'b', 'c'];
let reverse = letters.reduceRight((acc, curr) => acc + curr);
console.log(reverse); // "cba"




// ### 11. Array.every()

// 🧠 Why introduced:  
// To check if all items in an array meet a condition. Before ES5, we had to loop and break manually.

// 📘 Syntax:
// ```js
// array.every(callbackFn(currentValue, index?, array?))
// ```

// 🧪 Example:
// ```js
// let numbers = [2, 4, 6];
// let allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); // true
// ```

// 🔁 Returns true only if all elements satisfy the condition.



// ### 12. Array.some()

// 🧠 Why introduced:  
// To check if at least one item meets a condition. Previously, done via manual loop with break.

// 📘 Syntax:
// ```js
// array.some(callbackFn(currentValue, index?, array?))
// ```

// 🧪 Example:
// ```js
// let nums = [1, 3, 5, 8];
// let hasEven = nums.some(num => num % 2 === 0);
// console.log(hasEven); // true
// ```

// 🔁 Returns true if any one element satisfies the condition.

// ---

// ### 13. Array.indexOf()

// 🧠 Why introduced:  
// Before ES5, we had to manually loop and compare each value.

// 📘 Syntax:
// ```js
// array.indexOf(searchElement, fromIndex?)
// ```

// 🧪 Example:
// ```js
// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits.indexOf("banana")); // 1
// console.log(fruits.indexOf("orange")); // -1
// ```

// 🔁 Returns the first index of a matching value or -1 if not found.

// ---

// ### 14. Array.lastIndexOf()

// 🧠 Why introduced:  
// Same as indexOf but finds the last match.

// 📘 Syntax:
// ```js
// array.lastIndexOf(searchElement, fromIndex?)
// ```

// 🧪 Example:
// ```js
// let numbers = [1, 2, 3, 2, 1];
// console.log(numbers.lastIndexOf(2)); // 3
// ```

// ---

// ### 15. JSON.parse() and JSON.stringify()

// 🧠 Why introduced:  
// To convert between JSON strings and JavaScript objects.

// 📘 Syntax:
// ```js
// JSON.stringify(obj) → string
// JSON.parse(string) → object
// ```

// 🧪 Example:
// ```js
// let obj = { name: "Alice", age: 25 };
// let json = JSON.stringify(obj);
// console.log(json); // '{"name":"Alice","age":25}'

// let parsed = JSON.parse(json);
// console.log(parsed.name); // "Alice"
// ```

// ---

// ### 16. Date.now()

// 🧠 Why introduced:  
// To get current timestamp directly. Previously:
// ```js
// new Date().getTime()
// ```

// 📘 Syntax:
// ```js
// Date.now()
// ```

// 🧪 Example:
// ```js
// console.log(Date.now()); // e.g. 1711977112345
// ```

// ---

// ### 17. Date.prototype.toISOString()

// 🧠 Why introduced:  
// To get date in ISO 8601 format (e.g., for APIs, JSON, etc.)

// 📘 Syntax:
// ```js
// new Date().toISOString()
// ```

// 🧪 Example:
// ```js
// let now = new Date();
// console.log(now.toISOString()); // e.g. 2025-04-01T08:34:56.123Z
// ```

// ---

// ### 18. Date.prototype.toJSON()

// 🧠 Why introduced:  
// Used automatically when a Date is stringified in JSON.

// 📘 Example:
// ```js
// let now = new Date();
// let json = JSON.stringify({ date: now });
// console.log(json); 
// // {"date":"2025-04-01T08:34:56.123Z"}
// ```

// ---

  
