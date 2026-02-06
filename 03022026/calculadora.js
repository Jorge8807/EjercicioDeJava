function leerNumero(id) {
  const valor = parseFloat(document.getElementById(id).value);
  return Number.isFinite(valor) ? valor : null;
}

function setResultado(valor) {
  document.getElementById("cajaresultado").value = valor;
}

function suma() {
  const cajauno = leerNumero("cajaValorUno");
  const cajados = leerNumero("cajaValorDos");
  if (cajauno === null || cajados === null) {
    setResultado("Error");
    return;
  }
  const resultado = cajauno + cajados;
  setResultado(resultado);
}

function resta() {
  const cajauno = leerNumero("cajaValorUno");
  const cajados = leerNumero("cajaValorDos");
  if (cajauno === null || cajados === null) {
    setResultado("Error");
    return;
  }
  const resultado = cajauno - cajados;
  setResultado(resultado);
}

function multiplicar() {
  const cajauno = leerNumero("cajaValorUno");
  const cajados = leerNumero("cajaValorDos");
  if (cajauno === null || cajados === null) {
    setResultado("Error");
    return;
  }
  const resultado = cajauno * cajados;
  setResultado(resultado);
}

function division() {
  const cajauno = leerNumero("cajaValorUno");
  const cajados = leerNumero("cajaValorDos");
  if (cajauno === null || cajados === null || cajados === 0) {
    setResultado("Error");
    return;
  }
  const resultado = cajauno / cajados;
  setResultado(resultado);
}

function IMC() {
  const peso = leerNumero("cajaValorUno");
  const altura = leerNumero("cajaValorDos");
  if (peso === null || altura === null || altura === 0) {
    setResultado("Error");
    return;
  }
  const resultado = peso / (altura * altura);
  setResultado(resultado);
}

function celsiusAFahrenheit() {
  const celsius = leerNumero("cajaValorUno");
  if (celsius === null) {
    setResultado("Error");
    return;
  }
  const resultado = (celsius * 9) / 5 + 32;
  setResultado(resultado);
}
