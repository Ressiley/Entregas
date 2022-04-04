"use strict";
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const button = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    span1.innerText = "Neste retorno foi efetuada a soma de dois tipos númericos obtendo como retultado: " + sum(1, 1);
    span2.innerText = "Neste retorno foi concatenado um valor do tipo string com um tipo númerico obtendo como retultado: " + sum('1', 1);
    span3.innerText = "Neste retorno foi concatenado dois valores do tipo string obtendo como retultado: " + sum('1', '1');
});
