function convertidorMetrosKilometros (){
//Una variable es un espacio en memoria para almacenar un dato
metros=parseInt(document.getElementById("cajaMetros").value);
kilometros=metros/1000; 
document.getElementById("cajakilometros").value=kilometros;

}
