function Animal(clasS,species,name, age) {
    this.clas = clasS;
    this.species = species;
    this.name = name;
    this.age = age;

    this.getclass = () => clasS;
    this.species = () => species;
    this.name = () => name ;
    this.age = () => age ;
    this.representation = function () {
        console.log(`This is a ${name}, class - ${clasS} and species - ${species}. ${name} is ${age} year old.`);
    }
   

}
Animal.prototype.sound = function () {
    console.log("I don't speak"); }


const Garfield = new Animal("Mammalia","F. catus", "Garfield", "1");
const Tom = new Animal("Mammalia","C. lupus", "Tom", "8");
const Rain = new Animal("Mammalia","E.ferus", "Garfield", "6");
Garfield.getclass();
console.log(Garfield.age());
console.log(Garfield.name());
console.log(Tom.age());
console.log(Rain.species());
console.log(Garfield.representation());
console.log(Tom.representation());
console.log(Tom.sound());




class Animal1 {
    constructor (clasS,species,name, age, color) {
        this.clasS = clasS;
        this.species = species;
        this.name = name;
        this.age = age;
        this.color = color;
    }
    sound () {console.log('not yet defined')}
}

class Cat extends Animal1 {
    constructor (clasS,species,name, age, color) {
        super(clasS,species,name, age, color)
    }
    sound () {
        console.log('Myyyaoo');
    }
}

class Dog extends Animal1 {
    constructor (clasS,species,name, age, color) {
        super(clasS,species,name, age, color)
    }
    sound () {
        console.log('Woof');
    }
}

class Horse extends Animal1 {
    constructor(clasS,species,name, age, color) {
    super(clasS,species,name, age, color)
    }
    sound () {
        console.log('Ihahaaa');
    }
}

const Felix = new Cat("Mammalia","F. catus", "Felix", "1","white");
const Tommy = new Dog("Mammalia","C. lupus", "Tom", "8", "black");
const Wind = new Horse("Mammalia","E.ferus", "Wind", "6", "red");


console.log(Felix);
console.log(Felix.sound());
console.log(Tommy);
console.log(Tommy.sound());
console.log(Wind);
console.log(Wind.sound());



  