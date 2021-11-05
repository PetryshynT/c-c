

/*  Об'єкти JavaScript - це набори властивостей і методів. Властивості об'єктів — це дані,
 пов'язанні з об'єктом, а методи — функції для опрацювання даних об'єкта. Адресація (посилання) 
 властивостей у сценаріях JavaScript можлива або за назвами, або за номерами.
*/

// з лекції

//dog object
const dog = {
    name1: "Teddy",
    age: 3,
    hasHotDog: true,
    speak: () => console.log("Woof"),
};
console.log(dog);
console.log("The dog name ", dog. name1);
console.log("The dog age is ", dog.age);
if (dog.hasHotDog) {
    console.log("Dog has hot dog");
}
dog.speak()

/*
================================================================================================
як створити об*єкт ?
================================================================================================
*/

// create with an object literal.За допомогою літералів.треба вказати змінні та методи в обєкті
const dog1 = { };
console.log(dog);

//with properties

const dog2 = {
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
};
console.log(dog2);

// with constructor
const dog3 = new Object();
console.log(dog3);

/*
=================================================================================================
розширення об*єкта новими властивостями
=================================================================================================
*/

const dog4 = {
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
};

// ading new property name
dog4.name = "Rex";
console.log(dog4);

// ading new method
dog4["run"] = () => console.log("Run"); 
console.log(dog4);


/*
=================================================================================================
Редагування властивостей об*єкта
=================================================================================================
*/

const dog5 = {
    name: "Boobluk",
    age: 3,
    hasHotDog: true,
    speak: () => console.log("Woof"), // чому неможливо видалити метод speak через delete?
    likeCats : false,

};

console.log(dog5);
console.log("Before ", dog5);
dog5.name = "Rex";
dog5.age = 5;
console.log("After ", dog5);

// removing a property

delete dog5.speak;
console.log(dog5);

/*
=================================================================================================
основні методи для роботи з об*єктами
obj.valueOf() 
obj.toString()
obj.hasOwnProperty("property name")
=================================================================================================
*/

const dog6 = {
    name: "Boobluk",
    age: 3,
    hasHotDog: true,
    speak: () => console.log("Woof"), 
    likeCats : false,

};
// returns the primitive value of the specified object
//result - виводить всі методи(ключі) та їх змінні
console.log(dog6.valueOf());

//check, if has property.перевіряємо чи є в нашоиу обєкті певний метод(ключ)
console.log(dog6.hasOwnProperty("age"));

//get string representation of an object
console.log(dog6.toString());



/*
=================================================================================================
                          Статичні методи Object
Object.assign() копіює значення всіх перерахованих власних властивостей
 з одного або декількох вихідних об’єктів на цільовий об’єкт;
 Object.create(obj) - створює новий об’єкт із зазначеним об’єктом -прототипом та властивостями;
 
Object.entries(obj) - повертає масив, що містить усі пари [ключ, значення] власних перерахованих рядкових властивостей даного об’єкта;
Object.freeze(obj)  - заморожує об’єкт. Інший код не може видалити або змінити його властивості
Object.keys(obj) - повертає масив, що містить імена всіх власних властивостей даного об’єкта;
Object.isFrozen(obj), Object.isExtensible(obj)
=================================================================================================
*/

//Object.assign()
const target = { a: 1, b: 2};
const sourse = {c: 3, d:4};

const returnTarget = Object.assign(target, sourse);
console.log(returnTarget);

//Object.entries()
const object1 = {
    a: "something",
    b: 42,
};

for (const[key, value] of Object.entries(object1)){
    console.log(object1);
}


//Object.freeze()
const obj = {
    age: 42
};
Object.freeze(obj);
obj.age = 22;
console.log(obj.age);

//Object.keys()
const object2 = {
    a: "something",
    b: 42,
    c: false
};
console.log(Object.keys(object2));

//Object.create()
	
const person = {
    isHuman: false,
    printInroducion: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const Mat = Object.create(person);
Mat.name ="Matthew";
Mat.isHuman = true;
Mat.printInroducion();

const Tar = Object.create(person);
Tar.name = "Taras";
Tar.isHuman = true;
Tar.printInroducion();


/*
=================================================================================================
Домашнє завдання. створити 10 обєктів і змінити їх. Також потрібно використовувати умови
=================================================================================================
*/
// #1
const car = {
    make: "Peugeot",
    type: 206,
    registrationNumber: "qq1234qq",
};
car.typeOfFuel = "S";
console.log(car);

// #2
const marin = {};
marin.name = "marinFourCorners";
marin.price = 2800;
marin.amount = 0;
marin.isAviable = true;
if (marin.amount < 1){
    marin["isAviable"] = false;
}

console.log(marin);

// #3
// const phone = new Object;
// phone.osLastVersion = " ";
// phone.make = "apple";

// if (phone.make == "google") {
//     phone["osLastVersion"] = "android12";
// } else if (phone.make == "apple") {
//     phone["osLastVersion"] = "ios 15";
// } else (phone.make !== "google" || phone.make !== "apple") {
//     phone["osLastVersion"] = "see in the settings of your phone";
// }
// console.log(phone);


// #4
const houseMaterial = {
    roof: "slate",
    walls: "brick",
    windows: "wooden",
}
houseMaterial.roof = "tiling";
delete houseMaterial.walls;
console.log(houseMaterial);

//#5




