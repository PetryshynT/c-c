/*
===========================
sort. сортує масив за алфавітом. не змінює грлобальний масив
==========================
*/


// const myArray = [5, 2, 3,4,6];

// myArray.sort(
//   (curr, next) => {
//     if (curr < next) {
//       return -1;
//     }
//   }
  
// ); // [2, 3, 5]

// console.log(myArray);

/*
===========================
for
==========================
*/
// const nums = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// // in the loop we will find a sum of nums array items
// for (let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i];
// }


// console.log('sum of nums items is ', sum);

// const some = [6,7,8,9];
// let s = 0;
// some.forEach((number) => {
//     s += number;
// })

// console.log(s);

// const numbers = [22,4,55,6,7];

// let sum = 0;
// numbers.forEach((number) => {
//     sum += number;
// })
// const numbers = [66,7];
// let sum = 0;
// let arsum = [];
// numbers.forEach((number) => {
// //     sum = sum + number;
// //     arsum.push[sum];
   
// // })
// const numbers = [55,5];
// let all = 0;
// numbers.forEach((number) => {
//     all += number;
// })

// console.log(all);






/*
===========================
map
// ==========================
// */

// const nums = [0, 1, 2, 3, 4, 5, 6];
// const increaseNum = (num, index) => {
//   if (num <= 0) {
//     return 10;
//   }
 
//   return num + 10;
// }

// // in the loop we will increase every element
// const updateNums = nums.map(increaseNum);

// console.log('updated nums array ', updatedNums);4

// const numbers = [1,3,5,7,9];
// const all = numbers.map(number => number + 10);
// console.log(all);

// const population = [43000000];
// const populationAfterOneYear = population.map(number => number + 15000);
// console.log(populationAfterOneYear);

// const money = [ 25000];
// const afterHollidays = money.map(number => number /2);
// console.log(afterHollidays);



// const year = [2021];
// const nextYear = year.map(year => year + 1);
// console.log(nextYear);

/*
=========================================
filter
=========================================
*/

// const items = [
//     { a: 1, b: 3 },
//     { a: 3, b: 3 },
//     { a: 6, b: 3 },
//     { a: 10, b: 10 },
//     { a: 41, b: 1 },
//     { a: 0, b: 4 }
//   ];

//   const filtered = items.filter((item) => item.a >=3);
//   const filtered2 = items.filter((item) => item.b >=5);
//   console.log(filtered2);

// const items = [
//         { name: Taras, b: 3 },
//         { surname: 3, b: 3 },
//         { name: 6, b: 3 },
//         { lastName: 10, b: 10 },
//         { a: 41, b: 1 },
//         { a: 0, b: 4 }
//       ];

//       const filtered = items.filter((item) => item.name !== 'Taras');
//       console.log(filtered);

// const name = ['Taras', 'Ivan'];
// const filtered = name.filter((names) => names !== 'Taras');
// console.log(filtered);

// const names = ['Taras', 'Oz','Zinoviiy']
// const filtered = names.filter((name) => name.length <= 2);
// console.log(filtered);

/*
===========================================
reduce. фідьтрація і зміна обєкту
===========================================
*/
// const nums = [1, 2, 3, 4, 3, 6];
 
// find sum
// const sum = nums.reduce(
//   (acc, current) => acc += current,
//   0
// );

// const sum = nums.reduce((acc, number) => (acc + number) / 2, 0
//  );
 
// const sum = nums.reduce((acc, number) => acc + number, 2);

// const another = nums.reduce((acc, number) => acc + number, 100);
// console.log('sum nums in array ', another);


	
// const items = [
//     { name: 1, b: 3 },
//     { a: 3, b: 3 },
//     { a: 6, b: 3 },
//     { a: 10, b: 10 },
//   ];

// const filtered = items.reduce((acc, element) => {
//     console.log(acc, element);
//     if (element.a >= 3) {
//         acc.push({
//             a: element.a,
//             b: element.b,
//             sum: element.a + element.b,
//         })
//     }
//     return acc;
   
// }, []);

// const nsme = items.reduce((acc, data) =>{
//     acc.push({
//         name: 'taras',
//         surname: 'petryshyn',
//         age: data.a + data.b 
//     });
//     return acc;
// } ,[])

// const peremnozh = items.reduce((acc, element) => {
//     if(element.a !== 'taras'){
//         acc.push({
//             name: 'Taras',
//             b: element.b,
//             age: element.b,
//         });
//     }
//     return acc;
// },[]);

// const newN = items.reduce((acc, element) => {
//     if (element.a !== 'Taras') {
//         acc.push({
//             name: 'Taras',
//             surname: 'Petryshyn',
//             age: element.a + element.b,
//         })
//     }
//     return acc;
// },[]) 
// console.log('new one', newN);

// const filtered = items.reduce((acc, element) => {
//     if (element.a > 3) {
//         acc.push({
//             ...element,
//             sum: element.a + element.b,

//         })
//     }
//     return acc;
// } ,[]);
// console.log(filtered);



/*
===============================================
 join. перетворює масив в рядок
===============================================
*/
const words = ['May', 'the', 'Force', 'be', 'with', 'you'];

// join words
const sentence = words.join(' ');// вказуємо яким чином розділятимуться дані з масиву

console.log('Joined words - ', sentence);

/*
==================================================
includes() ввключає !include() не включає
==================================================
*/
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// output: true

/*
===================================================
indexOf
===================================================
*/
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// output: 1

console.log(beasts.indexOf('tiger'));
// output: -1 // означає, що таких даних немає в масиві

/*
=====================================================
slice() розрізання масиву
=====================================================
*/
const nums = [6, 10, 11, 1, 2, 3, 4];

// slice nums from index 0 to index 3 (3 is not included)
const slicedNums = nums.slice(0, 3);
// Output:  [6, 10, 11 ]

console.log('Part of array ', slicedNums);


/*
========================================================
 splice() вставка елемента (1,0,'Feb') 1 - під яким індексом буде вставлятись FEB
                                       0 - кількість елементів, які треба видалити після вставки
                                       '' - те, що вставляємо
 =======================================================
 */

 const months = ['Jan', 'March', 'April', 'June'];

 months.splice(1, 0, 'Feb');
 
 // inserts at index 1
 console.log(months);
 // output: Array ["Jan", "Feb", "March", "April", "June"]
 





