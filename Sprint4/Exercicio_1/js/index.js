"use strict";
function sum(a, b) {
    return a + b;
}
console.log(`1)  a = 1 + b = 1 : ${sum(1, 1)} Neste retorno foi efetuada a soma de dois tipos númericos`);
console.log(`1)  a = 1 + b = 1 : ${sum('1', 1)} Neste retorno foi concatenado um valor do tipo string com um tipo númerico`);
console.log(`1)  a = 1 + b = 1 : ${sum('1', '1')} Neste retorno foi concatenado dois valores do tipo string`);
