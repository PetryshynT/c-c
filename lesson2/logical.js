/*
&& logical and
|| logical or
! logical not 
*/

const MATH_PI = 3.14;
const radius = 10;
const name = "Robert";

console.log(name !== "Steven");
const res = MATH_PI === 3.14 && radius >= 10
? MATH_PI * (2 * radius)
: MATH_PI * (radius * radius);
console.log("result", res);

const res2 = radius !== 0 || radius< 1000
? MATH_PI * (2 * radius)
: MATH_PI * (radius * radius);
console.log("result2", res2);
