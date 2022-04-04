"use strict";
let dominio = [5, 12, 36, 8, 7, 1, 85, 45];
let listaValores = [7, 9, 13, 26, 1, 14, 85, 12, 23, 45, 58, 47, 33, 14, 2, 4];
const arrowFunc = (array1, array2) => array1.filter(value => array2.includes(value)).sort((a, b) => a - b);
console.log(arrowFunc(dominio, listaValores));
