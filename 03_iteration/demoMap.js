// const coding = ["js", "rb", "cpp", "py", "c", "java"];

// const val = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(val);


// const coding = ["js", "rb", "cpp", "py", "c", "java"];

// const val = coding.map( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(val);


let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1st Method
// let newNum = myNum.filter( (num) => num > 4 );
// console.log(newNum);

//2nd Method 
// let newNum = myNum.filter( (num) =>  {
//     return num > 4;
// })
// console.log(newNum);

let newNums = [];
myNum.forEach((num) => {
    if(num > 4) {
        newNums.push(num);
    }
})
console.log(newNums);
