console.log("--- Clone ---");
const clone = (source) => ({ ...source });
console.log(clone({ nombre: "Dani", empleo: "Desarrollador", edad: 25 }));

console.log("--- Merge ---");
const merge = (source, target) => ({ ...target, ...source });
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log(merge(a, b));
