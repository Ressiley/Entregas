let varGeneric: any;
varGeneric = false;

const genericType = (val: any) => {
    console.log(typeof(val));
    return val;
}

console.log(genericType(varGeneric));