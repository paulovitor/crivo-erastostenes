describe("Primos", function() {

	it("gera numeros primos ateh 2", function() {
		expect([ 2 ]).toEqual(geraNumerosPrimosAteh(2));
	});

	it("gera numeros primos ateh 5", function() {
		expect([ 2, 3, 5 ]).toEqual(geraNumerosPrimosAteh(5));
	});

	it("gera numeros primos ateh 30", function() {
		expect([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]).toEqual(
				geraNumerosPrimosAteh(30));
	});

	it("gera numeros primos ateh 30", function() {
		expect([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]).toEqual(
				geraNumerosPrimosAteh(30));
	});

	it("gera numeros primos ateh 100", function() {
		expect(
				[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
						59, 61, 67, 71, 73, 79, 83, 89, 97 ]).toEqual(
				geraNumerosPrimosAteh(100));
	});

});