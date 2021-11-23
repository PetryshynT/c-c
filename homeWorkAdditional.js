/*
Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
*/

const userName = "Robin Singh";
function splitToArray(array) {
let newA = [];
newA = array.split(" ")
console.log(newA);
}
console.log(splitToArray(userName));

/*
Write a JavaScript function to convert a string in abbreviated form. Go to the editor
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/
const uName = "Petryshyn Olha ";
function abreviat(string) {
    let abvUName = '';
    let UserN = '';
    abvUName = string.split(' ');
    abvUName.length > 1 
    ? UserN = abvUName[0] + " " + abvUName[1].slice(0,1) + "." 
    : "";
    return UserN;
    }
    


console.log(abreviat(uName));



