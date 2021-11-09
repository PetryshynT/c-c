function square (number) {
    return number * number;
}
square(12);
console.log(square);
console.log(square(12));

function different (number1) {
    return number1 + 1024;

}
console.log(different(30));


const sallaryAlert = () => {
    return "Your sallary after tax is " ;
};

function sallryAfterTax (salary, tax) {
    return salary * tax; 
}
 console.log(sallaryAlert() + sallryAfterTax(10000,0.95));

//////////////////////////////////////////////////////////////////
 const square3 = (number2) => {
     return number2 * number2;
 }
console.log(square3(27));

const square4 = (number3) => number3 * number3;
console.log(square3(56));

const hrnToDol = (hrn, dol) => hrn / dol;console.log("your salary in dollars is about: ");
console.log(hrnToDol(13500, 26.1));


const dolToHrn = (dol, hrn) => dol * hrn;
console.log(dolToHrn(400, 26.06)); console.log("Your sallary in UAH: "); 


function sallary (uah) {
    console.log("Your sallary gross is ");
    return uah;
}
console.log(sallary(10000));


function sallaryInDollars (uah, dol) {
    console.log("Your sallary in dollars is ");
    return uah / dol;
}
console.log(sallaryInDollars(10000, 26.1));

function sallaryInUah (dol, uah) {
    console.log("Your salary in UAH is ");
    return dol * uah;
}
console.log(sallaryInUah());

function ssc (minSalary, percent) {
    return minSalary * percent;
}
console.log(ssc(6000, 0.78));


function mySallaryNetto (sallary, ssc, tax ) {
    console.log("My sallary after all taxes is ");
    return sallary - ssc - tax;
} 
console.log(mySallaryNetto(30000, 1320, 526));

//anonymous function
function makeDesicion (makeFn) {
    makeFn();
}
makeDesicion(function(){
    console.log("let's dance");
});

makeDesicion;

// // sally using anonymous functions
//  function sallary1 (gross) {
//      gross();
//  }
//  sallary1 (function(){
//      console.log("1000");
//  });

//  sallary1;

//  let s = sallary1 + 222;
//  console.log(s);

function goodNight (say) {
    say ();
}
goodNight(function(){
    console.log("Good night");
});
say;

//IIFE (Immediately invoked function expression)
(function () {
    let firstV;
    let secondV;
}) ();

const sum = new Function('a,b',  'return a+b; ');
console.log(sum(1, 2));

/*
Що таке клас(class)?
Клас - це шаблон для створення об'єктів. 
Вони інкапсулюють дані з кодом для роботи з цими даними.
Класи в JS створені на основі прототипів, але також  мають 
певний синтаксис і семантику, 
які не спільні з семантикою класу ES5.
*/

class Rectangle {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }


calcArea() {
    return this.height * this.weight;
    }
}

const square8 = new Rectangle(10, 10); 
console.log(square8.calcArea());
/*
====================================
Наслідуваання з використанням класів
====================================
*/

class Animal {
    constructor (name, type) {
        this.name = name;
        this.type = type;
    }
    sayHello() {
        return "Hello! My name is " + this.name + "and I am a" + this.type;
    }
}
 const Cat = new Animal("Felix", "cat");
 console.log(Cat.sayHello());

 const Dog = new Animal("Bethoven", "dog");
 console.log(Dog.sayHello());


class Car {
    constructor (make, type, commercialDescription, capacity) {
        this.make = make;
        this.type = type;
        this.commercialDescription = commercialDescription;
        this.capacity = capacity;
    }
    carPresentation () {
        return "This is a " + this.make + " " + this.type + ", " + this.commercialDescription + " with engine capacity " + this.capacity + " L";
    }
}
 
const Mercedes = new Car ("Mercedes", "s500", "sedan", "2.5");
console.log(Mercedes.carPresentation());
const Fiat = new Car("Fiat", "Doblo", "Van", "1.4");
console.log(Fiat.carPresentation());

/*
===================================
Використання з об'єктами та умовами.
===================================
*/

const testConfig = {
    module: 'users',
    unitType: 'unit-tests',
    e2eType: 'e2e-tests',
    json: '.json',
    xml: '.xml'
};

function triggerTests(type, format) {
    console.log('Output is in' + format + 'format');

    if (type === 'e2e-tests') {
        console.log('e2e tests are runing...');
    } else {
        console.log('unit tests are running...');
    }
}

triggerTests(testConfig.unitType, testConfig.json);


const carConfig = {
    make: "Peugeot",
    model: "206",
    fuelType1: "gasoline",
    fuelType2: "diesel"
};

function triggerFuelType (make, model, fueltype) {
    console.log("Your " + make + " " + model);

    if (fueltype === "gasoline") {
        console.log("is gasoline verssion. Use A-95");
    } else {
        console.log("is diesel verssion")
    }
}
triggerFuelType(carConfig.make, carConfig.model,carConfig.fuelType2);

