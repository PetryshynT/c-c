const user = {
    name: 'Taras',
    lastName: 'Petryshyn'
};
 const hello = 'Hello' + ' ' +  user.name + ' ' + user.lastName + '!';
//  console.log(hello);

const user1 = {
    name: 'Taras',
    lastName: 'Petryshyn',
    experience:'2 months'
};

const info = user1.name + " " + user1.lastName + " " + "has " + user1.experience + " of experience as a tester";
// console.log(info);

const result = 2000 + ' line of JavaScript code';

// console.log(result);
// Output: '2000 line of JavaScript code'


const interestingResult = '43' + 8 - 6;

// console.log(interestingResult);


const result1 = "Don't do it in real life " + {} + [];

// console.log(result1);
// Output: "Don't do it in real life [object Object]"


/*
================================================
Template string

                        Два нюанса у використанні:
                                                - потрібно використовувати - ``
                                                - для вставки змінної - ${myVar}
================================================
*/

// const lvivPopulation = 900000;
// const lvivPopulationInfo = `${lvivInUkraine},${lvivPopulation} people live in Lviv`;

//Можна також підставляти декілька змінних

const lvivInUkraine = 'One of the most beautiful cities in Ukraine is lviv';
const lvivPopulation = 900000;
const lvivPopulationInfo = `${lvivInUkraine}. ${lvivPopulation} people live in Lviv`;

// console.log(lvivPopulationInfo);

//А також використовувати тернарний оператор

const lines = 0;
const language = 'JavaScript';

const result2 = `${lines > 0 ? lines: 'Zero'} lines of ${language} code`;

// console.log(result2);
// Output: '2000 lines of JavaScript code'

const city = 'London';
const check = `${city == 'Lviv' ? city + ' is Ukrainian city': 'It is not a Ukrainian city'}`;
// console.log(check);

const year = 2031;
const checkYear = `${year == 2021 ? year + ' - year is OK': "check year"}`
// console.log(checkYear);


/*
===========================================
                    Методи для роботи з рядками
charAt(індекс) - знаходження символів в рядку по індексу 
includes(що шукаємо) - знаходження тексту в рядку
indexOf('слово') - перевірка на наявність в рядку. -1 означає, що такого слова нема. 4 - слово починається з індексу 4
toLowerCase() - переводить текст в нижній регістр. Лише стрінг. в обєктах не працює
toUpperCase()
slice(з якого індексу/до якого включно. можна залишити пуьо) - відрізання рядка
split('вказується як будуть розділені слова') перетворення рядка в масив
match знаходження елементів, які відповідають певному патерну(regex). Таким чином перевіряють паролі на відповідність
replace('','') - заміна елемента, який відповідає певному патерну
trim() видалення пробілів на початку та в кінці рядка

===========================================
*/

const hello1 = 'Hello from Ukraine';
const chart = hello1.charAt(7);
console.log('The character at inde 7 is ', chart);

const devicesOs = 'The most popular operating system for smartphones is considered to be android';
const android = "system";
const os = devicesOs.includes(android);

console.log(`The word "${android}" is in this sentence`);
console.log(`is there the word '${android}' - ${os}`)

console.log('word Ukraine start at ' + hello1.indexOf('Ukraine') + ' index');

const any = 'HELLO WORLD 1';
const LAny = any.toLocaleLowerCase();
const UAny = LAny.toUpperCase();
console.log(UAny);
console.log(UAny.slice(0,5));
console.log(UAny.slice(5))

const adele = "Hello, it's me. I was wondering if after all these years you'd like to meet. To go over everything";
const arrAdele = adele.split(' ');
console.log(arrAdele);

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z, 0-9]/g;
const found = paragraph.match(regex);

console.log(found);
// output: Array ["T", "I"]

const reg = any.match(regex);
console.log(reg);


const p = 'The quick brown fox jumps over the lazy dog';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey."


const regex1 = /Dog/i;
console.log(p.replace(regex1, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret."

console.log(hello1.replace('Ukraine', 'Taras'));

const sss = '  fjfjfjf ff   ';
console.log(sss.trim());





