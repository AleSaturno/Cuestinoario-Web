const Formulario = document.getElementById('formulario');

const nombreCompleto = document.getElementById('fullname');
const pass = document.getElementById('password');
const Direccion = document.getElementById('direccion');
const Fecha = document.getElementById('FDN');
const error = document.getElementById('error');

error.style.color = "yellow";



const EnviarFormulario = () =>{
	let MensajeError = [];

	if(nombreCompleto.value === null || nombreCompleto.value === ""){
		MensajeError.push('Completa con tu nombre completo');
	}
	
	if(pass.value === null || pass.value === ""){
		MensajeError.push('Completa con una contraseña');
	}

	if(Direccion.value === null || Direccion.value === ""){
		MensajeError.push('Complete con su direccion');
	}

	if(Fecha.value === null || Fecha.value === ""){
		MensajeError.push('Complete con su fecha de nacimiento');
	}

	else{
		let nombre = document.getElementById('fullname').value;
    	document.cookie="nombre= " + nombre;
		console.log('Formulario Enviado...');
		setTimeout(() =>{
			location.href = 'encuesta.html'
		},2000);
		
	}
	error.innerHTML = MensajeError.join(' , ')
	
};

Formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	let nombre = document.getElementById('fullname').value;
	console.log(nombre);
	
});



