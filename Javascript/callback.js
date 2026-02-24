const greet = (name, callback)=>{
    console.log("hello "+ name);
     
    callback()
}

const greet2 = ()=> console.log("welcome");

console.log(greet("suba",greet2))