window.addEventListener("load", () => {

	//console.log("Comienzo del proyecto");
	let seccion = document.getElementById("seccion");
	seccion.addEventListener("click", changeColor);

});


function changeColor(objeto){
	console.log("click");

	let ObjectToChange = objeto.target.style;

	ObjectToChange.backgroundColor == "white"?ObjectToChange.backgroundColor = "grey":ObjectToChange.backgroundColor = "white";


}