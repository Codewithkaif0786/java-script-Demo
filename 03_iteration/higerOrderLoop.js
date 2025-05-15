// for of

// let arr = [1, 2, 3, 4, 5];

// for(let val of arr) {
//     console.log(val);
// }

// const name = "kaif";

// for (const greet of name) {
//     console.log(greet);

// }

//Map

// let map = new Map();

// map.set("IN", "India");
// map.set("IN", "India");
// map.set("USA", "UNITED STATES OF AMERICA");
// map.set("FR", "FRANCE");

// console.log(map);

// for (const [key, value] of map) {
//     //console.log(key, ':-', value);

// }

// const myObj = {
//     game: "pubg",
//     game2: "spiderman"
// }

// // aise kaam nhi karenge
// for (const [key , value] of myObj) {
//    // console.log(key, value);

// }

// const myObj = {
//     js : "javaScript",
//     java: "java",
//     py : "python",
//     rb : "ruby"
// }

// for(const key in myObj) {
//     console.log(`key is ${key} value is ${myObj[key]}`);

// }

// const programming = ["js", "cpp", "rb", "java", "py"];

// for (const key in programming) {
//     console.log(programming[key]);

// }

// forEach

// const coding = ["js", "java", "sql", "css", "python", "cpp"];

// coding.forEach(function (item) {
//     console.log(item);

// })

// function printMe(item) {
//     console.log(item);

// }

// coding.forEach(printMe)

let myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "java",
    languageFileName: "java ",
  }
];

myCoding.forEach((item) => {
  console.log(item.languageFileName);
});
