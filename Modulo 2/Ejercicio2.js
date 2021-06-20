console.log("--- Concat ---");
const concat = (a, b) => [...a, ...b];
console.log(concat([1, 2, 3], [4, 5, 6]));

console.log("--- Concat optional ---");
const concatOptional = (...arrays) =>
  arrays.reduce((prev, cur) => [...prev, ...cur], []);
console.log(concatOptional([1, 2, 3], [4, 5, 6], [7, 8, 9]));
