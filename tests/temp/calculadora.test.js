test("teste do teste", callbackFunction);

function callbackFunction() {
	console.log("Essa função está sendo chamada?");
}

test("teste do teste 2", function () {
	console.log("E assim, funciona?");
});

test("teste do teste 3", () => {
	console.log("E agora?");
});

test("Outro teste", () => {
	console.log("Testando...");
});

test("Espero que Laura, tenha 32 anos", () => {
	expect(32).toBe(32);
});
