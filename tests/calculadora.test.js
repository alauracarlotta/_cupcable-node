const calculadora = require("../models/calculadora");

test("teste da função somar 2 + 2", () => {
	const resultado = calculadora.somar(2, 2);
	console.log(resultado);
	expect(resultado).toBe(4);
});

test("teste da função somar 30 + 2", () => {
	const resultado = calculadora.somar(30, 2);
	console.log(resultado);
	expect(resultado).toBe(32);
});

test("teste da função somar 'banana' + 2", () => {
	const resultado = calculadora.somar("banana", 2);
	console.log(resultado);
	expect(resultado).toBe("Erro");
});
