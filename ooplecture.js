/*
Що таке ООП?
Об'єктно-орієнтоване програмування (in english OOP) – це модель програмування
яка базується на стверджені того, що програма це сукупність об’єктів які
взаємодіють між собою. Кожен об’єкт в цій моделі є незалежним, і він здатний 
отримувати, обробляти дані та відправляти ці дані іншим об’єктам.
В ООП використано моделі наслідування, поліморфізму та інкапсуляції.*/
/*------------------------------------------------------------------------------
Наслідування - принцип об'єктно-орієнтованого програмування, що  дозволяє
створювати ієрархічні структури об'єктів. Використовуючи наслідування можна
створити загальний клас, який буде визначати характеристики, поведінку і 
властиві певному набору пов'язаних об'єктів.*/

function Car(model) {                                   //
    this.model = model;                                 //
                                                        //  КЛАС АБО Ж 
    this.getModel = () => console.log(this.model);                   //  ФУНКЦІЯ-КОНСТРУКТОР
    this.drive = () => console.log('Driving....');      //
  }                                                     //
  
  const BMW = new Car('BMW');                           // НАЩАДКИ АБО Ж 
  const Volvo = new Car('Volvo');                       // НАСЛІДНИКИ
  
  BMW.drive(); // Driving...                            // МЕТОД DRIVE
  Volvo.drive(); // Driving... 
  BMW.getModel();                         //
  

function smartphones(model2) {
    this.model2 = model2;
    
    this.getModel2 = () => console.log(this.model2);                       //  this.getModel2 = (тут буде прийматися марка телефону з рядка "const pixel6 = new smartphones('pixel6');", тобто піксель 6) ???
    this.flgman = () => console.log('The company"s flagman'); // 
}

const pixel6 = new smartphones('pixel6');
const s21 = new smartphones('s21');

pixel6.flgman();
pixel6.getModel2();





/*
ПОЛІМОРФІЗМ -  можливість об'єктів з однаковою специфікацією мати різну реалізацію.

*/

class Animal {                                                // батьківський клас функції-конструктора
    constructor(name) {                                       // constructor - ініціалізує повністю батьківський клас. жодного конкретного імені собаки чи кота , просто параметри, 
        this.name = name;                                     //  які будуть прийматися в майбутньому
    }
    sound() { return console.log("I can't speak yet"); } 
    toString () {                                             // дефолтні значення методів батьківського конструктора. В наступних створених класах твапини матимуть свої унікальні звуки    toString() {                                              // toString ???
        return Object.getPrototypeOf(this).constructor.name;  // getprototypeOf ???
    }
}

class Cat extends Animal {  
        constructor (name) {           // constructor - ініціалізує повністю батьківський клас.extends(розширюжться) використовується для унаслідуваний від батьківського конструктора клас кіт і видозмінити його. В нашому випадку метод sound   constructor(name) {
        super(name);                    // super - прорихаємо імя в батьківський клас
    }
                                        
    sound() {                           // розширюємо метод. переназначаємо унікальні властиввості
       return console.log('Meow!');     // дефолтні значення анімал, нашого батьківського функуії-конструктора не торкнулися
    }
}

class Dog extends Animal {             // те саме для класу собак, які унаслідували 
    constructor(name) {                //  всі дефолтні значення від батьківського конструктора енімал
        super(name);                   // методом super ми прокидуємо імя в середину класу  
    }

    sound() {                          // собаки вміють гавкати, тому потрібно удосконалити метод саунд з 
       return console.log('Woof!');    // батьківського масиву
    }
}

const Tom = new Cat('Tom');
Tom.sound(); // Meow!
const Rex = new Dog('Rex');
Rex.sound(); // Woof!

/*
Інкапсуляція – механізм, який поєднує дані та методи, що обробляють ці дані
 і захищає і те і інше від зовнішнього впливу або невірного використання.

 ЗАМИКАННЯ
 */
 const createCounter = () => {
    // A variable defined in a factory or constructor function scope
    // is private to that function.
    let count = 0;
    return ({
    // Any other functions defined in the same scope are privileged:
    // These both have access to the private `count` variable
    // defined anywhere in their scope chain (containing function
    // scopes).
    click: () => count += 1,
    getCount: () => count.toLocaleString()
   });
  };
  
  const counter = createCounter();
  
  counter.click();
  counter.click();
  counter.click();
  
  console.log(
    counter.getCount()
  );



  /*
Класи vs функції конструктори
  */  

// Прилад ФУНКЦІЇ КОНСТРУКТОРА
function Cat(name, color) {
    this.name = name;             //this  це посилання на основний обєкт, який буде надано пізніше при розширені
    this.color = color;
  
    this.run = function () {          // методи які можемо використовувати
      console.log("I’m running");
    };
    this.sound = function () {
      console.log("Meow! Meow!");
    };
  }
  
  const Tom = new Cat("Tom", "grey");
  const Simon = new Cat("Simon", "red");
  
  // ПРИКЛАД З ВИКОРИСТАННЯМ КЛАСІВ. тут зявляється клас і конструктор

class Cat {
    constructor(name, color) {
        this.name = name;        //це посилання на рядок const Felix = new Cat("Felix", "white");
        this.color = color;
    }

    run() {
        console.log(this.name +  " is running");
    }

    sound() {
        console.log("Meow! Meow!");
    }
}

const Felix = new Cat("Felix", "white");
////////////////////////////////////////////////////////////////////////////

class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name +  " is running");
    }

    sound() {
        console.log("Meow! Meow!");
    }
}

class LazyCat extends Cat {
  constructor(name, color) {
    super(name, color)
  }
  
  run() {
    console.log(this.name + ' is too lazy to run');
  }
}

const Simon = new LazyCat("Simon", "grey");
const Felix = new Cat("Felix", "white");

/*
ПРОТОТИПИ
Властивість прототип - спочатку порожній об'єкт. До якого можуть бути додані функції
і властивості, як і для будь-якого іншого об'єкта.

Кожен об'єкт в JavaScript має "секретну" властивість, яке додається при визначенні
 або ініціалізації об'єкта. Дана властивість має ім'я __proto__. Саме через нього 
 здійснюється доступ до ланцюжку прототипу.

 Метод прототип дозволяє еконмити оперативну память машини. Він оптимізовує код
*/

function Cat(name, color) {
    this.name = name;
    this.color = color;
  }
  
  Cat.prototype.run = function () {
      console.log("I’m running");
  };
  Cat.prototype.sound = function () {
      console.log("Meow! Meow!");
  };
  
  const Tom = new Cat("Tom", "grey");
  const Simon = new Cat("Simon", "red");
  

/*
this, execution context та області видимості
 
Область видимості - важлива концепція, що визначає доступність змінних.
Ця концепція є основою замикань, поділяючи змінні на глобальні і локальні. 
this  - це доступ до області. Області видимостів необхідні для розуміння того
як і де ми можемо використовувати ті чи інші змінні, і розуміти чому вони доступні або
не доступні в тому чи іншому блоці коду

Механізм роботи функцій і змінних в JavaScript відрізняється від інших мов 
програмування. Існують наступні області видимості:

- Глобальна -  змінні і функції не перебувають всередині якоїсь функції. 
Тобто, іншими словами, якщо змінна або функція не перебувають всередині конструкції 
function, то вони - «глобальні»;
- Локальна - {}тіло функцї. змінні і функції доступні тільки всередині конструкції function;
- Блочна - {} Цикл фор, коли оголошуємо ітератор і, він буде доступний лише в циклі фор. змінні 
і функції доступні тільки у визначеному блоці (ES6).


Значення this – це об'єкт, який використовувався для виклику методу. В залежності від
 області видимості, ключове слово this буде посилатись на відповідний контекст 
 функції, наприклад на глобальний об'єкт (Window в браузері), в іншому випадку - контекст 
 функції.

 Стілочна функція немає свого контексту і завжди використовує контекст, де вона 
 задекларована і викликається. Стрілочна функція не маж своїх аргументів і this
 тому вона посилається і використову все, що є вище неї
*/
const user = {
    name: "Michael",
    age: 30,
  
    sayHi() {
      // this - is "current object"
      console.log(this.name);
    }
  
  };
  
  user.sayHi(); // Michael

  
  
  ///////////////////////////////this в стрілочній функції
  const arrowFn1 = () => {
    console.log(this);
  }
  
  function Circle() {
    this.PI = 3.14;
    this.r = 20;
    
    
    this.getArea = () => {
      console.log(this);
      
      return this.PI * Math.pow(this.r, 2);
    }
   }
  
  const cr = new Circle();
  cr.getArea();


//////////////////////Область видимості: функції і змінні
const a = 10;                      // змінна а знаходиться в глобальній області вилимості
                                   // тому буде доступна всюди в коді
console.log(c); // is not available 

function plusC() {
  const c = 100;                    //змінну с можна читати лише в цій локальній області
                                    // видимості функції PlusC. Тобто вона буде доступна 
                                    // лише в тілі функції PlusC
  return a + c; // a is available
}



/////////////////////////Область видимості: цикли і їх змінні
let res = 0;
console.log(i); // i - is not available

for (let i = 0; i < 10; i++) {
  res += i;
}

console.log(i); // i - also is not available


//Контекст виконання (Execution context). Те з чим викликається наша функція і що 
// саме можемо отримувати
const x = 10;

function foo() {
   const y = 20;

   function bar() {

        const z = 15;
        const output = x + y + z;
        
        return output;

   }

  return bar;
  
}

foo()(); //fo() повертає лише змінну у, fo()() повертатиме і основну функцію у а також вкладену bar



/////////////////////////////////////////////////////////////////
//                 bind(), call(), apply()                     //
/////////////////////////////////////////////////////////////////

//Зміна контексту виконання з bind() ; для виклику однієї і тієїж функуії з різними значеннями
//чи набором даних
const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX; //??? getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // expected output: 42
  

  /////Зміна контексту виконання з допомогою apply() приймає масив
  const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2


///// Зміна контексту виконання з допомогою call()
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"
  