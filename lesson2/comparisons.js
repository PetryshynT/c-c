/*
=  
== equal to
=== equel value and equel type
!= not equel
!== not equel value and not equel type
> greater than
< less than
>= grather than or equel to
? ternary operation/коли потрібно порівняти значення змінної і в залежності від рехультату видати ту чи іншу операцію
*/

// const MATH_PI = 3.14;
// const radius = 10;
// const name2 = "Robert";
//  console.log(MATH_PI === 3.14);
//  console.log(name2 === "robert");
//  console.log(name2 == "robert");
//  console.log(name2 != "robert");
//  console.log(name2 != "Robert");
//  console.log(name2 === "Robert");
// console.log(radius > 10);
// console.log(radius >= 10);
// console.log(radius < 10);
// console.log(radius > 100);
// console.log(radius !== 0);

// const MATH_PI = 3.14;
// const radius = 10;
// const formula = 'circumference';
// const result = formula === 'circumference'
// ? MATH_PI * ( 2* radius)
// : MATH_PI * (radius * radius);
// console.log(result); 

// const requiredHight = 145;
// let hight = 150;
// const welcome = "Welcome to the attraction ";
// const cancel = "Come next time"
// const result1 = hight >= requiredHight ? welcome : cancel; 
// console.log(result1);




const requiredHight = 145;
const requiredAge = 12;
let presentAge = 1;
let presentHight =150;

 let desicion = presentAge > requiredAge && presentHight > requiredHight ? "You dont need baby chair" : "You need baby chair";
console.log(desicion);

// const goodHight = presentHight >= requiredHight ? true : false;
// const goodAge = presentAge >= requiredAge ? true : false;
// const desicion = goodHight || goodAge == true ? "don't need baby chair" : "need baby cgair";
// console.log(desicion);

// let desicion = presentAge || requiredAge && presentHight >= requiredHight ? "You dont need baby chair" : "You need baby chair";
// console.log(desicion);
// let desicion = presentAge || presentHight > requiredAge || requiredHight ? "You dont need baby chair" : "You need baby chair";
// console.log(desicion);