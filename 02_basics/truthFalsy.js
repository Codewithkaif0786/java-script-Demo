// let userEmail = "kaif@gmail.com";

// if(userEmail) {
//     console.log("got email address");
// }else {
//     console.log("not got email address");
// }


// falsy 
 // false , 0 , -0, BigInt 0n, "", null, undefined, NaN

 // truthy 
 // "0", 'false', " ", [], {}, fuction(){}

 const userEmail = [];

 if(userEmail.length === 0) {
    console.log("array is empty");
    
 }
 let objEmp = {};

 if(Object.keys(objEmp).length === 0) {
    console.log("object is empty");
    
 }


 // Nullish Coalicing operator (??)

 let val1;

//  val1 = 10 ?? 15;
//  val1 = null ?? 10;
// val1 = undefined ?? 10;

val1 = null?? undefined ?? 10 ?? 14;
 console.log(val1);
 

 // ternary operator

 // condition ? true : false

 let icePrice = 10;

 icePrice ? console.log("ice price less than 20") : console.log("more than 20");
 
