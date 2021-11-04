/* виконуєьбся лише тоді, коли умова являється істиною.*/

// const a = 10;
// const b = 100;
// const c = 0;

// if (a === 10) {
//     console.log("a is equal 10");
// }

// if (b > 1) {
//     console.log("b is biggew than 1");
// } else { 
//     console.log("b is smaler than 1");
// }

// if (c > 1) {
//     console.log("c is biger than 1");
// } else if (c === 10) {
//     console.log("c is equel to 10");
// } else { 
//     console.log("c is smaler than 1");
// //}


// const yourGrade = 1;

// if (yourGrade >= 90 && yourGrade <= 100) {
//     console.log("grade A");
// } else if (yourGrade >= 60 && yourGrade < 90) {
//     console.log("grade B");
//  } else {
//         console.log("grade C");
// }


const client = "Taras Petryshyn";
const clientBD = true;
const clientWithUsDay = 1;
const sale1 = "20%";
const sale2 = "35%";
const bSale = "45%";

if (clientWithUsDay <= 120) {
    console.log(client + " your sale is " + sale1);
} else if (clientWithUsDay > 120) {
    console.log(client + " your sale is " + sale2);
} else if (clientBD = true) {   // як перевірити день народження ?
    console.log("Dear " + client + "in your birthday your sale is " + bSale);
    } else {
        console.log("Something went wrong");   
}

