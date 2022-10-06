const sumar = require('./exercice-one');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log('1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir \n5. Potenciar \n6. Raiz');
readline.question('Elige una de las anteriores opciones: ', (option) => {
	readline.question('Ingresa el primer numero: ', (num1) => {
		readline.question('Ingresa el segundo numero: ', (num2) => {
			num1 = parseFloat(num1);
			num2 = parseFloat(num2);
			switch (option) {
				case '1':
					console.log(`${sumar.suma(num1, num2)}`);
					break;
				case '2':
					console.log(`${sumar.resta(num1, num2)}`);
					break;
				case '3':
					console.log(`${sumar.multipli(num1, num2)}`);
					break;
				case '4':
					console.log(`${sumar.divide(num1, num2)}`);
					break;
				case '5':
					console.log(`${sumar.potencia(num1, num2)}`);
					break;
				case '6':
					console.log(`${sumar.raiz(num1, num2)}`);
					break;
				default:
					console.log(`Error, ingrese una opcion correcta`);
					break;
			}
			return readline.close();
		});
	});
});
