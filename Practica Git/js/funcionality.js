startApp = () =>{

	let seccion = document.getElementById("seccion");
	let texts = document.getElementsByClassName("texts");
	

	seccion.addEventListener("click", (objeto)=>{ changeColor(objeto, "white", "gey") });

	for(let i = 0; i < texts.length; i++){

		texts[i].addEventListener("click", (objeto)=>{ changeColorText(objeto, "black", "white") });
	}

}


changeColor = ...args =>{

	//console.log("click");

	let ObjectToChange = args[0].target.style;

	ObjectToChange.backgroundColor == args[1]?ObjectToChange.backgroundColor = args[2]:ObjectToChange.backgroundColor = args[1];


}
changeColorText = ...args => {

	//console.log(args[1]);

	let ObjectToChange = args[0].target.style;

	ObjectToChange.color == args[1]?ObjectToChange.color = args[2]:ObjectToChange.color = args[1];



}

window.addEventListener("load",startApp());
