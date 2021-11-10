const numbers = [1,2,3,4,5,6,7,8,9]

// отримуємо елемент з масиву
console.log(numbers[0]);
console.log(numbers.length);

// створення масивів
// пустий масив, щоб його можна було мидифіковувати пізніше
// в масиви можна класти і цифри і рядки і вкалувати обєкти
const empty = [];
const numberd1 = [1,6,3,8];
const stringArray = ['cat', 'dog'];
const mixArray = [1, 'd', {n: 1}, ['rex']];
console.log(mixArray);

// створення масивів з використанням класу ARRAY
const phones = new Array();
console.log(phones);

// додавання обєкту методом push
phones.push('Pixel');
phones.push('Iphone');
console.log(phones);
console.log(phones.length);
console.log(phones[1]);

// МОДИФІКАЦІЯ МАСИВІВ
const modifay = [1, 'tree'];
modifay[0] = 'Monday';//за допомогою = створюємо або перезаписуємо значення, яке знаходиться під індексом [0]
console.log(modifay);
delete modifay[0];// щоб видалити 
console.log(modifay);
console.log(modifay.length);

// ЯКИМИ МЕТОДАМИ МОЖНА МОДИФІКУВАТИ МАСИВИ
// .push() - додає елемент в кінець вказаного масиву. перевага в тому, що елемент додається настурним за порядком і немає проаусків
// .pop() - видалаяє останній елемент у вказаному масиві. В ДУЖУВХ ПІСЛЯ POP НІЧОГО НЕ ПОТРІБНО ПИСАТИ
// .unshift() - додавання нового елемента на початок масиву.В цьому методі в дужки вже вписуємо елемент, який треба помістити в масив(1). Також можна передавати безліч елементів
// .shift() - видалення першого елемента. в дужки не потрібно нічого вводити, так як медот видаляє лише одне значення в змінній, він є одноразовий
// .concat() - Обєднання масивів. Інформація з масиву, який буде перед .concat() буде вивиодитись в новому масиві першою. в дужки беремо масив, який буде обєднаний і відображатиметься після аершого
// delete + масив[шндекс] 

const adding = ['one', 'two'];
adding.push('three');
adding.push(4);
adding.push({numder: 'numbers', character: 'characters'});
console.log(adding);

const lviv = ['Lviv', 'west', 800000,'6 dictricts'];
lviv.pop();
lviv.pop();
lviv.pop();
console.log(lviv);

const Ukraine = ['24 regions'];
Ukraine.unshift('Kiyiv is the capital');
Ukraine.unshift('population 43 million people');
Ukraine.unshift('Ukraine', 'language - Ukrainian');
console.log(Ukraine);

const fruits = ['apple', 'lemon','potato'];
console.log(fruits);
fruits.shift();
fruits.shift();
fruits.shift();
console.log(fruits);

const inputNumber = [1,2,3,];
const outputCharacter = ['a', 'b', 'c'];
console.log(inputNumber, outputCharacter);
const association = inputNumber.concat(outputCharacter);
console.log(association);


/*
                ВТКОРИСТАННЯ МАСИВІВ
    1) Отримання даних і їх подальше використання. Наприклад нам приходить масив з списком обєктів. В подальшому ми можемо використовувати обєкти з нашого масиву і передавати їх в інший код(функції чи шось інше)
*/
//////////////////////////////////////
const userData = [
    {user: "Tom"},
    {user: "Jack"},
    {user: "Jaff"},
    {user: "Arnold"}
];

// є написвнв функція GREETING, ЗА ДОПОМОГОЮ ЯКОЇ ПОТІМ БУДЕМО ВІТАТИСЯ З ЮЗЕРАМИ, ІМЕНА ЯКИХ ОТРИМАЛИ ЗХ МАСИВУ
function greeting(userName) {
    return "Hello, " + userName;
}

// викликаємо функцію greeting в ній в заглушку(параметр userName) вставляємо назву масиву з інндексом з масиву
console.log(greeting(userData[0].user));
console.log(greeting(userData[2].user));

//////////////////////////////////////

//    2) Створення нових даних

const data = [];
// додаємо нові дані. В даному випадку в масив додаємо обєкти. Для цього пишемо функцію
function add(obj, arr) {      //функція приймає обєкт та масив
    arr.push(obj);            //методом push до  масиву додаємо оєкт
}
add({n:1}, data);             // викликаємо функція add і в заклушки (параметри) вставляємо
add({n:3},data);              // обєкт і назву масиву в якому треба створити даний обєкт
add({n:5}, data);
console.log(data);


/*
========================================
            ДЕФОЛТНЕ ЗНАЧЕННЯ ПАРАМЕТРА ФУНКЦІЇ.
дефолтне значення обєкта потрібно для того, якщо ми не знаємо чи передали нам 
значення. Якщо не передали, то  обєкт просто буде пустим і його можна буде виеористовувати
========================================            
*/
function extendConfig(objExt, config = {}) {
    const newObj = Object.assign ({}, config, objExt);
    return newObj;
}
 const result = extendConfig(
     {test: true, v: '10.9'},
     {module: 'car'}
 );
 console.log(result);



/*
========================================
            ДЕФОЛТНЕ ЗНАЧЕННЯ ПАРАМЕТРУ ФУНКЦІЇ + SPREAD OPERATOR
    ...НАЗВА НОВОГО ОБЄКТУ. Працює дуже схоже з Object.assign
========================================            
*/
function extendConfig1(objExt, config = {}) {
    return {
        ...objExt, 
        ...config,
    };
}
 const result1 = extendConfig1(
     {test: true, v:'10.6'},
     {module: 'ship'}
 );
 console.log(result1);

 /*
 ==========================================
 ДЕСТРУКТУРИЗАЦІЯ ОБЄКТА
 ==========================================
 */
 const config2 = {
     name: 'my types',
     tests: 'unit',
     version: '2.2',
     extra: {
         tests: 'e2e',
     }
 }

 const {tests, extra} = config2;// вписуємо те, що хочемо вивести з масиву
 console.log(tests, extra);

 /*
 ======================================
 ДЕСТРУКТУРИЗАЦІЯ ДЛЯ ПЕРЕНЕСЕННЯ ЕЛЕМЕНТІВ
 ======================================
 */
///ЩОБ ПОМІНЯТИ МІСЦЯМИ НАШІ ЕЛЕМЕНТИ В МАСИВІ, СПОЧАТКУ ПОТРІБНО НАПИСАТИ ФУНКЦІЮ SWAP

function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
  }
   
  const unsortedNums = [1, 3, 2];
   
  swap(unsortedNums, 1, 2);
   
  console.log(unsortedNums);