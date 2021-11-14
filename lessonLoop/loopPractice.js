
const e = [1];
console.log(e);


// /*Коротко про цикли

//       Цикл — різновид керівної конструкції у високорівневих мовах 
//       програмування, призначена для організації багаторазового виконання 
//       набору інструкцій (команд).

//       Також циклом може називатися будь-яка багатократно виконувана послідовність
//        команд, організована будь-яким чином (наприклад, із допомогою умовного переходу).

// */
// /*

// Для проходження сходинок, потрібно:
// визначити кількість повторень (ітерацій)
// описати інструкцію (спукс на сходинку нижче)
// додати умову, щоб вийти із цикла при досягненні фінальної точки

// */

let sum = 0;

// in the loop we will find a sum of nums from 0 to 10
for (let i = 0; i <= 2; i++) {
  sum = sum + i;
}

console.log('sum of nums from 0 to 10 is ', sum);

let sum1 = 0;

for (let i = 100; i <=101; i++) {
  sum1 = sum1 + i;
}
console.log(" the same ", sum1);

/*
цикл for з масивами / i-- означає, що в рядку ми будемо рухатися з права на лівою тобто з кінця до початку
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum2 = 32;
for (let i = 0;i < numbers.length; i ++) {
  sum2 *= numbers[i] + ' ';
}
console.log(sum2);

const words = ['May', 'the', 'Force', 'be', 'with', 'you'];
let sentence = " ";
for (let i = 0; i <  words.length; i++) {
  sentence += words[i] + ' ';
}
console.log(sentence);

const newWords = ['London', 'is', 'the', 'capital', 'of', 'Great Britan'];
let newSentcence = 0; //константа не може використовуватися. Чому 0 не перезаписується після циклу? Бо до цієї змінної додаються дані, які виходять з циклу
for (let i = 0; i < newWords.length; i ++) {
  newSentcence += newWords[i] + ' ';// без пробілів

}
console.log(newSentcence);

const newWords1 = ['The', 'sky', 'is', 'blue'];
let newSentences1 = " Adding new value to this one: ";
for(let i = 0; i < newWords1.length; i ++) {
  newSentences1 += newWords1[i] + ' ';
}
console.log(newSentences1);

/*
витягування з масиу стрінга з кінця
*/

const newWords2 = ['city', 'beautiful', 'a', 'is', 'Lviv'];
let newSentence2 = "";
for (let i = newWords2.length ; i >=0; i--) {
  newSentence2 += newWords2[i] + ' ';
}
console.log(newSentence2);

const myID = ['Taras', 'is', 'name', 'My'];
let intro = '';
for (let i = myID.length; i >=0; i--) {
  intro += myID[i] + ' ';
}
console.log(intro); 


/*
==================================
Цикл for...in для роботи з об'єктами. Для обєтів ми не можемо виеористовувати .lenght
==================================
*/

const obj = {
  one: '1',
  two: '2',
  three: '4',
};
 
const obj1 = {
  one1: '11',
  two2: '22',
  three3: '44',
};

let sentences2 = '';
for (let key in obj) {
  sentences2 += key + "; ";
}
console.log(sentences2);

const obj2 = {
  name1: 'Cap',
  name2: 'Bob',
  name3: 'Den'
}

let names = '';
let arr = [];
 for(key in obj2 ) {
  //  names += key + "; ";
  names += obj2[key] + "; ";  //  таким чином витягуємо з масиву значення ключів
  arr.push(obj2[key]); //тут ми витягли дані з обєкта і передали їх в новостворений масив

 }
console.log(arr);

/*
===================================
Цикл while
===================================
*/

 let n = 0;
 let sum3 = 0;
 while (n < 3) {
   console.log(n); //виводить кожну ітерацію окремо
   sum3 += n;
   n++;
 }

console.log({n, sum3});


/*
==================================
Цикл while для роботи з масивами
==================================
*/

const num4 = [1,2,3,4,5,6];
let b = 0;
let sum5 = 0;

while (n < num4.length) {
   sum5 = sum5 + num4[n];
   n++
}
console.log('sum of num items is ', sum5);


const addW = ['the' , 'sky', 'is', 'grey'];
let addToSentences = "";
let cont = 0;

while (cont < addW.length) {
  addToSentences += addW[cont] + " ";
  cont++;
}

console.log(addToSentences);


/*
==================================================
Цикл do...while для математичних підрахунків
==================================================
*/

let y = 5;
let min = 1;

do {
  min *= y;
  y--;
} while (y >= 1 )

console.log(min);


/*
=======================================================
Використання циклів
=======================================================
*/
//1) Отримання даних і їх використання.Рішення без цикла
// const data = [
//   { user: 'John' },
//   { user: 'Tom' },
//   { user: 'Petr' },
//  ];
//  // use data
// function greeting(userName) {
//    return "Hello, " + userName + "!";
//  } 
// // greeting(data[0].user);
// // greeting(data[1].user);
// // greeting(data[2].user);

// // З використаням циклу

// for (let i = 0; i < data.length; i++) {
//   console.log(greeting(data[i].user));
// }

const car = [{
  
  make: "peogeot",
  model: "206",
  typeFuel: "gasoline/gas",
  capasity: "1124",
  volume: 45,
  km: 620
}, {
  make: "fiat",
  model: "doblo",
  typeFuel: "gasoline/gas",
  capasity: "1359",
  volume: 35,
  km: 400
}, {
  make: "bmw",
  model: "x5",
  typeFuel: "gasoline/gas",
  capasity: "2499",
  volume: 35,
  km: 290
}
];
function rozhid (volume,km,) {
  return "Fuel(*gas) consumption is " + (volume / km ) * 100 + " l/km";
}

// console.log(rozhid(45,620));
for (let i = 0; i < car.length; i++) {
  console.log(car[i].make, car[i].model, rozhid(car[i].volume, car[i].km));
}



const song = {
  1: "Venom, (I got that) adrenaline momentum",
  2: "And I'm not knowin' when I'm",
  3: "Ever gonna slow up and I'm",
  4: "Ready to snap any moment I'm",
  5: "Thinkin' it's time to go get 'em",
  6: "They ain't gonna know what hit 'em",
  7: "(W-W-When they get bit with the—)",
  8: "Venom, (I got that) adrenaline momentum",
  9: "And I'm not knowin' when I'm",
  10: "Ever gonna slow up and I'm",
  11: "Ready to snap any moment I'm",
  12: "Thinkin' it's time to go get 'em",
  13: "They ain't gonna know what hit 'em",
 };
  
 const songTextArray = Object.values(song); // array of strings
  
 console.log(songTextArray);

 const imagine = {
   1: "Imagine there's no heaven",
   2: "It's easy if you try",
   3: "No hell below us",
   4: "Above us, only sky"
 }
const playImagine = Object.values(imagine);
console.log(playImagine);
for (let i = 0; i < Object.values; i++) {
  // console.log("This John Lenon song: " + Object.values);
  playImagine += imagine[key];
}
console.log("John Lenon ", playImagine);
 



