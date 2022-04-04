"use strict";
let arrayNum = ["10", "12", "15", "20", "22"];
function sum(a) {
    return a + 1;
}
arrayNum.forEach(element => {
    console.log(`O valor ${arrayNum.indexOf(element)} somado com 1 = ${sum(element)}`);
});
