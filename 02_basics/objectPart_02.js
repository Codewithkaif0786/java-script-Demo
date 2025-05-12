const tinderUser = {};

tinderUser.name = "kaif";
tinderUser.id = 123456;
tinderUser.marks = 85;

// console.log(tinderUser);

let regularUser = {
    email: "kaif@gmail.com",
    fullName: {
        userName: {
            firstName: "kaif",
            lastName : "Ali"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName);


let obj1 = {1: "a", 2: "b"};
let obj2 = {3: "c", 4: "d"};
let obj4 = {5: "e", 6: "f"};

// let obj3 = Object.assign({}, obj1, obj2, obj4);

// let obj3 = {...obj1, ...obj2, ...obj4};

// console.log(obj3);




let course = {
    courseName : "JavaScript",
    coursePrice : "999",
    courseInstructer : "kaif"
};




let {courseInstructer} = course;
console.log(courseInstructer);
