// const num1 = 7, num2 = 9;

// let sum = num1 + num2;

// console.log(`${num1} + ${num2} = ${sum}`);

const sum = (num1, num2) => {
    let result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
}


function subtract(num1, num2){
    let result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
}

const multi = (num1, num2)=>{
    let result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
}

const dividir = (num1, num2)=>{
    let result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
}

const potenciar = (num1, num2)=>{
    let result = num1 ** num2;
    console.log(`${num1} ^ ${num2} = ${result}`);
}

const radicacion = (num1, num2)=>{
    console.log(`Raiz de ${num1} = ${Math.sqrt(num1)}`);
    console.log(`Raiz de ${num2} = ${Math.sqrt(num2)}`);
}

// exports.suma = sum; 
// exports.resta = subtract;
// exports.multipli = multi;
// exports.divide = dividir;
// exports.potencia = potenciar;
// exports.raiz = radicacion;

const operaciones = {}

operaciones.suma = sum;
operaciones.resta = subtract;
operaciones.multipli = multi;
operaciones.divide = dividir;
operaciones.potencia = potenciar;
operaciones.raiz = radicacion;

module.exports = operaciones