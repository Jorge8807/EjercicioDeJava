function suma (){
//Una variable es un espacio en memoria para almacenar un dato
cajauno=parseInt(document.getElementById("cajaValorUno").value);
cajados=parseInt(document.getElementById("cajaValorDos").value);
resulatdo=cajauno+cajados;
document.getElementById("cajaresultado").value=resulatdo;
}
function resta (){
//Una variable es un espacio en memoria para almacenar un dato
cajauno=parseInt(document.getElementById("cajaValorUno").value);
cajados=parseInt(document.getElementById("cajaValorDos").value);
resulatdo=cajauno-cajados;
document.getElementById("cajaresultado").value=resulatdo;
}
function multiplicar (){
//Una variable es un espacio en memoria para almacenar un dato
cajauno=parseInt(document.getElementById("cajaValorUno").value);
cajados=parseInt(document.getElementById("cajaValorDos").value);
resulatdo=cajauno*cajados;
document.getElementById("cajaresultado").value=resulatdo;
}
function division (){
//Una variable es un espacio en memoria para almacenar un dato
cajauno=parseInt(document.getElementById("cajaValorUno").value);
cajados=parseInt(document.getElementById("cajaValorDos").value);
resulatdo=cajauno/cajados;
document.getElementById("cajaresultado").value=resulatdo;
}