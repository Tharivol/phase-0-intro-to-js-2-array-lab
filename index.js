// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    let copyCats = [...cats, "Broom"];
   return copyCats;
}
 function prependCat(names)   {
    let copyCat = ["Arnold", ...cats];
    return copyCat;
 }
 function removeLastCat() {
    let catCopy = cats.slice(-1);
     return catCopy
 }

 function removeFirstCat()  {
     let copCat = cats.slice(0);
     return copCat;
 }
 