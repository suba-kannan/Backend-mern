const outer = () => {
  let count = 0;
  return () => {
    // count = count + 1 = 1+1 = 2
    count++;
    return count;
  };
};

const data = outer();

console.log(data());
console.log(data());
console.log(data());

count = 12;

console.log(count);
