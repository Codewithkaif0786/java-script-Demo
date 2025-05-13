function sayMyname() {
    console.log("hello kaif");
    
}

// sayMyname();

// function addTwoNum(num1, num2) {
//     console.log(num1+num2);
    
// }
// addTwoNum(5,5);

// function addTwoNum(num1, num2) {
//     return num1+num2;
// }
// let result = addTwoNum(4,6);


// console.log("result: ",result);

// function loginUserName(userName) {
//     return `${userName} Just logged in`;
// }

// console.log(loginUserName("kaif"));


// function calculateCartPrice(...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200,300,400));


const user =  {
    userName: "kaif",
    price : 199
};

function handleObj (anyObject) {
    console.log(`user name is ${anyObject.userName} and is price ${anyObject.price}`);
}
handleObj(user);

const myNewArray = [29, 84, 48, 50];

function returnSecondVal(getArray) {
    return getArray;
}

console.log(myNewArray[1]);
