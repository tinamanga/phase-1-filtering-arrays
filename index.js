// //different ways to use filter
// 1. Filtering an Array
// The basic concept of filtering is selecting elements based on a condition. For example, given an array of numbers, we can filter out only the numbers greater than 3.

// js
// Copy code
// const numbers = [1, 2, 3, 4, 5];

// const filteredNumbers = numbers.filter(function(num) {
//   return num > 3;
// });

// console.log(filteredNumbers);
// // Output: [4, 5]
// In this example, filter() returns a new array containing only the numbers greater than 3.

// 2. Building Our Own filter() Method
// Let's go ahead and write our custom filter() function, step by step:

// js
// Copy code
// function filter(collection, cb) {
//   const newCollection = [];

//   for (const item of collection) {
//     if (cb(item)) {
//       newCollection.push(item);
//     }
//   }

//   return newCollection;
// }
// This function:

// Takes in a collection (an array) and a callback function (cb).

// It iterates through each item in the collection and applies the callback function.

// If the callback function returns true, that item gets added to the newCollection array.

// Finally, it returns the newCollection containing only the elements that passed the condition in the callback.

// Example Usage:
// js
// Copy code
// const users = [
//   { firstName: "Niky", favoriteColor: "Blue", favoriteAnimal: "Jaguar" },
//   { firstName: "Tracy", favoriteColor: "Yellow", favoriteAnimal: "Penguin" },
//   { firstName: "Josh", favoriteColor: "Blue", favoriteAnimal: "Penguin" },
//   { firstName: "Kate", favoriteColor: "Red", favoriteAnimal: "Jaguar" },
// ];

// const bluePenguinUsers = filter(users, function(user) {
//   return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
// });

// console.log(bluePenguinUsers);
// // Output: [{ firstName: "Josh", favoriteColor: "Blue", favoriteAnimal: "Penguin" }]
// 3. Pure Functions
// A pure function is a function where the output is determined only by its input values, and it has no side effects (like modifying external variables or objects).

// Pure Function Example:


// function multiplyAndFloor(num) {
//   return Math.floor(num * 100);
// }

// const randNum = Math.random();
// console.log(multiplyAndFloor(randNum)); // Always returns the same output for the same input
// Impure Function Example:


// let arr = [];
// function addToArray(val) {
//   arr.push(val); // This function changes the external `arr` variable, which makes it impure.
// }

// addToArray(1);
// addToArray(2);
// console.log(arr); // [1, 2]
// 4. Making the filter() Method Pure
// We want to refactor our filter() method to ensure it is pure. The previous version of filter() was impure because it had side effects, such as logging to the console. Now, we'll return a new array without modifying the original array:


// function filter(collection, cb) {
//   const newCollection = [];

//   for (const item of collection) {
//     if (cb(item)) {
//       newCollection.push(item);
//     }
//   }

//   return newCollection; // This is a pure function: no side effects, no mutation of the original collection.
// }

// 5. Using Array.prototype.filter()
// The built-in filter() method in JavaScript works exactly like our custom version. It iterates over the array and returns a new array with only the items that satisfy the condition provided by the callback.

// Here's an example:


// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(function(num) {
//   return num > 3;
// });

// console.log(filteredNumbers); // [4, 5]
// This is exactly what our custom filter() function does, but it's done more efficiently and succinctly.

// Conclusion
// By following these steps, we:

// Understand the concept of filtering and its application in JavaScript.

// Built our own filter() function, ensuring it works without modifying the original array.

// Learned about pure functions and why they are preferred in programming.

// Explored how the built-in filter() method works.


