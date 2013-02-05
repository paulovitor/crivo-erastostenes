function geraNumerosPrimosAteh(limite) {

	var numeroLimiteASerChecado = Math.sqrt(limite);

	var primos = recuperaListaCompleta(limite);

	for ( var contador = 0; contador < primos.length; contador++) {
		var numero = primos[contador];
		if (numero <= numeroLimiteASerChecado)
			removeNumerosMultiplos(numero, primos);
	}

	return primos;
}

function recuperaListaCompleta(limite) {
	var primos = [];
	for ( var contador = 2; contador <= limite; contador++) {
		primos.push(contador);
	}
	return primos;
}

function removeNumerosMultiplos(numero, primos) {
	for ( var contador = 0; contador < primos.length; contador++) {
		var valor = primos[contador];
		if (valor != numero && valor % numero == 0) {
			primos.splice(contador, 1);
		}
	}
}