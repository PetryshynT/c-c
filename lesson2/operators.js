const MATH_PI = 3.14;
const radius = 10;
const result = MATH_PI * radius * radius;
console.log(result);

// // shorter way
let result = 10 * 10;
result *= MATH_PI;
console.log(result);

//зменшення значення
const a = 10;
const b = 30;
let c = 60;

c = c - a;
//shorter way
c -= a; // may read like c=c-a
console.log(c);
c += a;
c += b;

// string operation
let nameU = "John";
let surname = "Doe";
let age = 25
let userInfo = nameU + " " + surname + " " + "age is: " + age;
// console.log(userInfo); 


//нааписати прогарму для виводу року і скільки будк років
let name1 = "Taras";
let surname1 = "Petryshyn"
const bornYear = 1990;
let year = 2051;
let age1 = year - bornYear;
console.log( name1 + " " + surname1 + "Your age in " + year + " year will be " + age1 );