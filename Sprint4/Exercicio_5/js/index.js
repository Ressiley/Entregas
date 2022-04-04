"use strict";
let varGeneric;
varGeneric = false;
const genericType = (val) => {
    console.log(typeof (val));
    return val;
};
console.log(genericType(varGeneric));
