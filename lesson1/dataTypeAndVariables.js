let camelCase = 0;
let PascalCase = 1;
let snake_case = 2;
let kebab-case = 3;



var name0 = 'Taras';
let name1 = 'Olha';
let name2 = 'Zinoviy';
let name3 = 'Iryna';
let name4 = 'Nadia';

const surname = 'Petryshyn';
console.log('Petryshyn family members: ', name0, ', ', name1, ', ', name2, ', ', name3, ', ', name4, surname);



//перевірка типу даних
 const num = 1;
 const str = "Some text";
 console.log(typeof(num));
console.log(typeof(num), typeof(str));
console.log((num).constructor);



//перевірка даних з використанням операторів порівняння
const num = 1;
const num2 = '1';
const res = num == num2;
console.log(num == num2); 

const num = 1;
const num2 = '1';
console.log(num == num2);
const num = 1;
const num2 = '1';
console.log(num === num2);


// з лекції
let temp;
let updated = null;
console.log(temp);
console.log(update);

const obj = {
    a: 1,
    nameU: "test",
}
console.log(obj);

let myTopHobby = ['Cycling', 'Photography', 'Hiking'];
console.log(myTopHobby);

const one = 1;
const ONE = "1";
const res = one == ONE;
const res = one === ONE;
const res = one === ONE;
console.log("Result: ",res);
console.log('Result with data check:', res);


// from youtube
let name = 'Taras';
let surname = 'Petryshyn';
let age = 30;
let ticket = true; 
console.log(name, surname,age);
console.log(typeof name, typeof surname, typeof age, typeof ticket);


function sayHello() {
    let message = "Hello JavaScript";
    console.log(message)
}
 sayHello();



function simpleMath() {
   let result = 1 + 2;
   console.log(result);
}
 simpleMath();

function simpleMath(a, b) {
    let result = a + b;
    console.log(result);
 }
  simpleMath(10, 12);


function simpleMath(a, b) {
    let result = a + b;
    console.log(result);
    return result;//повертає значення всередині функції на глобальний рівень, в якому потім можна її багаторазово використовувати
 }
 let sum = simpleMath(3, 4);// вивиодимо значення в середині функції в якості нової змінної
 console.log(sum);

string
console.log("Some string");
console.log('Some string');
console.log('Some "long" string');
console.log("Some 'long' string");
console.log ('Hello there'.length);

/* переносимо слова після зворотнього слешу
не має бути жодних пробілів*/
console.log("Another \
very long \
string");

// 
/* переностить слова в рядках. зворотній слеш \n
n це соротчення нью лайн */
console.log("Another \nvery long \nsting");

//
/* екранування. коли дадємо в стрінг певні символи. \ + символ */
console.log("Another \'very\' long string");

//
/* .chartAT() повертає символ під певним номером індексу*/
let val = "Hello";
console.log(val.charAt(2));

/* щоб отримати останній символ в рядку .cartAT(.lengh - 1)*/
console.log(val.charAt(val.length - 1));

/* щоб вивести на екран рядок від певного симолу
або від певного символу і до певного символу використовуємо .substring*/
console.log(val.substring(2, 5));

console.log(val.indexOf("ll")); // повертає номер індексу за яким розташовані букви

