let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length);  // 3

fruits.length = 2;
console.log(fruits);         // ["apple", "banana"]

fruits.length = 5;
console.log(fruits);         // ["apple", "banana", <3 empty items>]

fruits.length = 0;
console.log(fruits);         // []


let arr = [10, 20, 30];
console.log(arr.toString());      // "10,20,30"

let mix = [1, "apple", true];
console.log(mix.toString());      // "1,apple,true"

let nested = [1, [2, 3]];
console.log(nested.toString());   // "1,2,3"

console.log(`${arr}`);            // "10,20,30" → Implicit toString call

// let arr = [10, 20, 30];
arr.at(0);   // 10
arr.at(-1);  // 30
arr.at(10);  // undefined


const arr1 = ["a", "b", "c"];

console.log(arr1.join());           // Default → "a,b,c"
console.log(arr1.join(" "));        // Space → "a b c"
console.log(arr1.join(""));         // No space → "abc"
console.log(arr1.join("   "));      // Multiple spaces → "a   b   c"
console.log(arr1.join("-"));        // Hyphen → "a-b-c"
console.log(arr1.join("|"));        // Pipe → "a|b|c"

const nums = [1, 2, 3];
console.log(nums.join(" "));        // "1 2 3"
console.log(nums.join(""));         // "123"
console.log(nums.join("-"));        // "1-2-3"

const bools = [true, false];
console.log(bools.join());          // "true,false"

const mixed = [null, undefined, 0];
console.log(mixed.join());          // ",,0"

const withEmptyStrings = ["a", "", "c"];
console.log(withEmptyStrings.join());      // "a,,c"
console.log(withEmptyStrings.join(" "));   // "a  c"

const sparse = [1, , 3];
console.log(sparse.join());         // "1,,3"
console.log(sparse.join(" "));      // "1  3"

// const nested = [[1, 2], [3, 4]];
console.log(nested.join());         // "1,2,3,4"

const deepNested = [[1], [2, [3]]];
console.log(deepNested.join("-"));  // "1-2,3"

const objects = [{ a: 1 }, { b: 2 }];
console.log(objects.join());        // "[object Object],[object Object]"

const digits = [2, 0, 2, 5];
console.log(digits.join(""));       // "2025"

console.log(arr1.join("   ").trim()); // "a   b   c" — trim extra edge spaces if needed

// let nums = [1, 2, 3];
let popped = nums.pop();
console.log(popped);   // 3
console.log(nums);     // [1, 2]

let empty = [];
let result = empty.pop();
console.log(result);   // undefined
console.log(empty);    // []

// let arr = [10, 20];
let len = arr.push(30);
console.log(arr);     // [10, 20, 30]
console.log(len);     // 3

arr.push(40, 50);
console.log(arr);     // [10, 20, 30, 40, 50]

// Pushing arrays or objects
arr.push([60, 70]);
console.log(arr);     // [10, 20, 30, 40, 50, [60, 70]]

// let arr = [100, 200, 300];
let first = arr.shift();
console.log(first);  // 100
console.log(arr);    // [200, 300]

// let empty = [].shift();
console.log(empty);  // undefined


// let arr = [10, 20];
let newLength = arr.unshift(1);
console.log(arr);        // [1, 10, 20]
console.log(newLength);  // 3

arr.unshift(-2, -1, 0);
console.log(arr);        // [-2, -1, 0, 1, 10, 20]

// let empty = [];
empty.unshift('first');
console.log(empty);      // ['first']


// let arr = [1, 2, 3, 4];
delete arr[2];
console.log(arr);        // [1, 2, <1 empty item>, 4]
console.log(arr.length); // 4

console.log(arr[2]);     // undefined
console.log(2 in arr);   // false (hole exists)

const a = [1, 2];
const b = [3, 4];
const c = [5, [6, 7]];

// const result = a.concat(b);         // [1, 2, 3, 4]
const withValue = a.concat(99);     // [1, 2, 99]
const multi = a.concat(b, c);       // [1, 2, 3, 4, 5, [6, 7]]

console.log(a); // [1, 2] (unchanged)


// let arr = [1, 2, 3, 4, 5];

arr.copyWithin(0, 3);       // [4, 5, 3, 4, 5]
// copies elements from index 3 to end and places at index 0

arr = [1, 2, 3, 4, 5];
arr.copyWithin(1, 0, 2);    // [1, 1, 2, 4, 5]
// copies [1,2] to start at index 1

arr = [10, 20, 30, 40, 50];
arr.copyWithin(-2, 0, 2);   // [10, 20, 30, 10, 20]
// negative target index: start copying from beginning and paste at 3rd index from last


[1, 2, [3, 4]].flat();                   // [1, 2, 3, 4]

[1, 2, [3, [4, 5]]].flat();             // [1, 2, 3, [4, 5]]
[1, 2, [3, [4, 5]]].flat(2);            // [1, 2, 3, 4, 5]

[1, [2, [3, [4]]]].flat(Infinity);      // [1, 2, 3, 4]

['a', ['b', ['c']]].flat(3);            // ['a', 'b', 'c']


// Array.splice() - All Key Use Cases

// 1. Removing elements
const a1 = [10, 20, 30, 40];
const removed = a1.splice(1, 2); // Remove 2 items from index 1
console.log('After remove:', a1);         // [10, 40]
console.log('Removed items:', removed);   // [20, 30]

// 2. Inserting elements (without deleting)
const a2 = [1, 4];
a2.splice(1, 0, 2, 3); // Insert 2, 3 at index 1
console.log('After insert:', a2);         // [1, 2, 3, 4]

// 3. Replacing elements (delete + insert)
const a3 = [1, 2, 3, 4];
const replaced = a3.splice(1, 2, 99, 100); // Remove 2,3 and add 99,100
console.log('After replace:', a3);        // [1, 99, 100, 4]
console.log('Replaced items:', replaced); // [2, 3]

// 4. Using negative index to delete from end
const a4 = [10, 20, 30, 40, 50];
const tailRemoved = a4.splice(-2, 2); // Remove last two items
console.log('After negative delete:', a4);     // [10, 20, 30]
console.log('Tail removed:', tailRemoved);     // [40, 50]

// 5. Insert at beginning without deletion
const a5 = [5, 6];
a5.splice(0, 0, 1, 2, 3, 4); // Insert multiple at start
console.log('Insert at beginning:', a5);       // [1, 2, 3, 4, 5, 6]

// 6. Delete all from a specific index
const a6 = [100, 200, 300, 400, 500];
a6.splice(2); // Remove all from index 2 to end
console.log('After truncate:', a6);            // [100, 200]


// Array.toSpliced()

// 1. Basic usage: replace elements without mutating original array
const original1 = [10, 20, 30, 40];
const newArray1 = original1.toSpliced(1, 2, 'a', 'b');
console.log(newArray1); // [10, 'a', 'b', 40]
console.log(original1); // [10, 20, 30, 40] (original unchanged)

// 2. Remove elements only
const original2 = [1, 2, 3, 4, 5];
const newArray2 = original2.toSpliced(2, 2);
console.log(newArray2); // [1, 2, 5]

// 3. Insert elements without deletion
const original3 = [100, 200, 300];
const newArray3 = original3.toSpliced(1, 0, 150);
console.log(newArray3); // [100, 150, 200, 300]

// 4. Using negative index
const original4 = [9, 8, 7, 6];
const newArray4 = original4.toSpliced(-2, 1, 'x');
console.log(newArray4); // [9, 8, 'x', 6]

// 5. No operation when deleteCount is 0 and no items added
const original5 = [1, 2, 3];
const newArray5 = original5.toSpliced(1, 0);
console.log(newArray5); // [1, 2, 3]

// let arr = [10, 20, 30, 40, 50];

// 1. Remove elements
// let removed = arr.splice(1, 2); // remove 2 items from index 1
console.log(removed);  // [20, 30]
console.log(arr);      // [10, 40, 50]

// 2. Insert elements without deleting
arr.splice(1, 0, 25);  // insert 25 at index 1
console.log(arr);      // [10, 25, 40, 50]

// 3. Replace elements
arr.splice(2, 1, 35, 36); // replace 1 item at index 2 with 35, 36
console.log(arr);         // [10, 25, 35, 36, 50]

// 4. Delete all from a certain index
arr.splice(3);            // remove from index 3 to end
console.log(arr);         // [10, 25, 35]

// 5. Negative index
arr.splice(-1, 1, 100);   // replace last element with 100
console.log(arr);         // [10, 25, 100]




