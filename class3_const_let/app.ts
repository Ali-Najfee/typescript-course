//use const where variable values do not change
const a = 5;
const b: number = 33;
const c = "best";
//I suggest use let instead of var everywhere,
console.log(c);

//because let has blocked scope
if (true) {
  let z = 4;
} else {
  let z = "string";
  
}
console.log("let: " + z); 
// Error: z is not defined in this scope
