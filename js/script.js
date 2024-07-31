//1-masala
// let arr = ["olma", "anor", "anjir", "behi"];
// function findLongestWord(arg) {
//   let longest = "";

//   for (let i of arg.split(" ")) {
//     if (i.length > longest.length) {
//       longest = i;
//     }
//   }

//   return longest;
// }

// console.log(findLongestWord(arr));

//2-masala
// let arr = [5, "salom", 9, 6, 3, "dunyo"];
// function concatString(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     if (typeof element == "string") {
//       res.push(element);
//     }
//   });
//   return res;
// }
// console.log(concatString(arr));

//3-masala
// let arr = ["salom", "xayr", "hello", "bye"];
// function toUpperCaseElement(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element.toUpperCase());
//   });
//   return res;
// }
// console.log(toUpperCaseElement(arr));

//4-masala
// let arr = [4, 6, 9, 6, 3, 1];
// function multiplyElement(arg) {
//   let p = 1;
//   arg.forEach((element) => {
//     p *= element;
//   });
//   return p;
// }
// console.log(multiplyElement(arr));

//5-masala
// let arr = [1, 5, 3, "a", 5, "f"];
// function sortElement(arg) {
//   let res = arg.sort();
//   return res;
// }
// console.log(sortElement(arr));

//6-masala
// let arr = ["salom", 5, 6, 9, 8];
// function reverseElement(arg) {
//   let res = arg.reverse();
//   return res;
// }
// console.log(reverseElement(arr));

//7-masala
// let arr = ["salom", "xayr", "hello", 6, 8];
// function indexElement(arg) {
//   let res = [];
//   for (let i = 0; i < arg.length; i++) {
//     res.push(i);
//   }
//   return res;
// }
// console.log(indexElement(arr));

//8-masala
// let arr = [4, 69, 3, 45, 6, 9];
// function indexElement(arg) {
//   let res = arg.indexOf(3);
//   return res;
// }
// console.log(indexElement(arr));

//9-masala
// let arr = [1, 6, 8, 9, 2, 5];
// function addElement(arg, num) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element + num);
//   });
//   return res;
// }
// console.log(addElement(arr, 5));

//10-masala
// let arr = [4, 5, 3, 6, 1, 2, 7, 9, 8];
// function oddEvenElement(arg) {
//   let odd = [];
//   let even = [];
//   for (const iterator of arg) {
//     if (iterator % 2 == 1) {
//       odd.push(iterator);
//     } else {
//       even.push(iterator);
//     }
//     return even;
//   }
// }
// console.log(oddEvenElement(arr));

//11-masala
// let arr = [5, 3, 6, 4, 3];
// function repeatedArray(arr, n) {
//   let result = [];
//   for (let i = 0; i < n; i++) {
//     result = result.concat(arr);
//   }
//   return result;
// }
// console.log(repeatedArray(arr, 2));

//12-masala
// let arr = [1, 5, 6, true, 93, 4, 8];
// function newArray(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element);
//   });
//   return res.toString();
// }
// console.log(newArray(arr));

//13-masala
// let arr = [2, 63, 69, 3, 4, 5, 6];
// function evemIndexElement(arg) {
//   let res = [];
//   arg.forEach(function (value, index) {
//     if (index % 2 == 0) {
//       res.push(value);
//     }
//   });
//   return res;
// }
// console.log(evemIndexElement(arr));

//14-masala
// let arr = [1, 2, 33, 5, 66, 7, 9];
// function oddElement(arg) {
//   let count = 0;
//   arg.forEach((element) => {
//     if (element % 2 == 1) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(oddElement(arr));

//15-masala
// let arr = [1, 5, 6, 7, 3, 8];
// function minMaxElement(arg) {
//   let min = arg[0];
//   let max = arg[0];

//   arg.forEach((element) => {
//     if (element > max) {
//       max = element;
//     } else {
//       min = element;
//     }
//   });
//   return [max, min];
// }
// console.log(minMaxElement(arr));

//16-masala
// let arr = [4, 6, 9, 3, 5];
// function repeatTwoElement(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element);
//   });
//   return [res, res];
// }
// console.log(repeatTwoElement(arr));

//17-masala
// let arr = [1, 2, 3, 4, 5];
// function randomElement(arg) {
//   return arg.sort(() => Math.random() - 0.5);
// }
// console.log(randomElement(arr));

//18-masala
// let arr = [1, 5, 9, 4, 6, 7];
// function addElement(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element + 5);
//   });
//   return res.toString();
// }
// console.log(addElement(arr));

//19-masala
// let arr = [1, 2, 3, "salom", 5, "xayr"];
// function removeElement(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     if (typeof element == "string") {
//       res.push(element);
//     }
//   });
//   return res;
// }
// console.log(removeElement(arr));

//20-masala
// let arr = [1, 6, " ", 9, 3, " "];
// function countSpace(arg) {
//   let count = 0;
//   arg.forEach((element) => {
//     if (element == " ") {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(countSpace(arr));

//21-masala
// let arr = [5, 6, 9, 3, 4];
// function reverseElement(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element);
//   });
//   return res.reverse();
// }
// console.log(reverseElement(arr));

//22-masala
// let arr = [16, 36, 4];
// function sqrtArray(arg) {
//   let res = [];
//   arg.forEach((element) => {
//     res.push(element ** (1 / 2));
//   });
//   return res;
// }
// console.log(sqrtArray(arr));

//23-masala
// let arr = [5, 3, -4, true, 5, false, 9n];
// function manfiyElement(arg) {
//   const res = [];
//   for (let i of arg) {
//     if (i >= !0) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// console.log(manfiyElement(arr));

//24-masala
// let arr = [2, 5, 6, 3, 6, 7, 8, 4, 5, 6];
// function evemIndexElement(arg) {
//   let juft = [];
//   let toq = [];
//   arg.forEach(function (value, index) {
//     if (index % 2 == 0) {
//       juft.push(value);
//     } else {
//       toq.push(value);
//     }
//   });
//   return [juft, toq];
// }
// console.log(evemIndexElement(arr));

//25-masala
// let arr = [4, 6, 3, 9, 7];
// function factorialElement(arg) {
//   let p = 1;
//   arg.forEach((element) => {
//     p *= element;
//   });
//   return p;
// }
// console.log(factorialElement(arr));
