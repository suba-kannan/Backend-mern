// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

// let [a,b,c, ,d,e=10,h,i,...rest] = numbers;

// [h,i] = [i,h]

// console.log(a); 
// console.log(b);
// console.log(c); 
// console.log(d); 
// console.log(e); 
// console.log(h);
// console.log(i);
// console.log(rest);
const user = {
  name: "Suba",
  age: 22,
  city: "Chennai", 
  course:"fs",
  frontend:"react"
};

const { name, age:userAge, area="kk nagar",...others } = user;

console.log(name);   
console.log(userAge);   
console.log(area);   
console.log(others);