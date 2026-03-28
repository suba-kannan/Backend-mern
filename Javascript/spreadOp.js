// //array
// const array = [1,2,3,4,5];
// const copiedArray = [...array];
// console.log("copied array", copiedArray);

// // const withoutArray = ...array;//error (only used inside a [])
// //object
// const obj = {
//     name:"suba",
//     age:22,
//     course:"Mern"
// }

// const copiedObj = {...obj.name};

// console.log("Copied object:", copiedObj);

// //

// const frontend = ["Js","React", "sql"];
// const backend = ["Mongodb","node"];

// const addFrontend = [...frontend,"html","css"];

// console.log("addFrontend:", addFrontend);

// const add = [...addFrontend, ...backend]

// console.log("Add:",add);


//shallow copy
const user = {
  name: "Suba",
  address: {
    city: "Chennai"
  }
};

const copyUser = { ...user };

copyUser.name = "anu";
copyUser.address.city = "Mumbai";

console.log(copyUser.name);
console.log(user.name);

console.log(user.address.city); // Mumbai
console.log(copyUser.address.city); // Mumbai