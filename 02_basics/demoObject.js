//singltone

//objects literals

let mySym = Symbol("key1");

let jsUser = {
    name: "kaif",
    "fullName": "Kaif Ali",
    [mySym]:"symbol",
    age: 23,
    gmail: "kaif@decet.ac.in",
    isLocation : "chennai",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday", "Tuesday"]
}

// console.log(jsUser);

// here two ways to access the properties like name etc

// console.log(jsUser.name);
// console.log(jsUser["name"]);

// console.log(jsUser["fullName"]);

// console.log(jsUser[mySym]);

jsUser.name = "hera";

// Object.freeze(jsUser);
// jsUser.name= "saif";
// jsUser.age = 25;
// console.log(jsUser);



jsUser.greeting = function () {
    console.log("hello js user !");
}

jsUser.greetingNew = function () {
    console.log(`Hello js user ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greetingNew());

console.log(jsUser.greeting());




