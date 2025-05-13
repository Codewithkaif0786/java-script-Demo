const user = {
    userName: "kaif",
    price : 999,

    welcomeMessege : function () {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
        
    }
    
    
    

}
// user.welcomeMessege();
// user.userName = "hera";
// user.welcomeMessege();

// console.log(this);

// function demo() {
    
//     console.log(this.userName);
    
// }
// demo();

// const demo = function() {
//     let userName = "kaif";
//     console.log(this.userName)
// }
// demo();

// const demo = () => {
//     console.log("hello arrow function");
    
// }
// demo();

// const add = (num1, num2) => {
//     return num1+num2;
    
// }
// console.log(add(4,4));

// let addTwo = (num1, num2) => num1 + num2;

// let addTwo = (num1, num2) =>( num1 + num2);

let addTwo = (num1, num2) => ({userName: "kaif"})

console.log(addTwo(4,4));

