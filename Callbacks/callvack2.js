const createAdd = (a,b,callback) =>{
    return callback(a,b); 
}

const add = (x,y)=> x+y;

console.log(createAdd(2,3,add));