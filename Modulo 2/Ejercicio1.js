const head = ([primero]) => primero;

console.log("--- HEAD ---");
console.log(head([1, 2, 3, 4]));

console.log("--- TAIL ---");
const tail = ([primero, ...resto]) => resto;

console.log(tail([1, 2, 3, 4]));

console.log("--- Init ---");
const init = (array) => {
  if (!array || !array.length) return [];
  return array.slice(0, array.length - 1);
};
console.log(init([1, 2, 3, 4]));

console.log("--- Last ---");
const last = (array) => {
  const [last] = array.reverse();
  return last;
};
console.log(last([1, 2, 3, 4]));
