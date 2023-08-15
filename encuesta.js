const formulario = document.getElementById('encuesta');

const Pregunta1 = document.getElementById('pregunta1');
const Pregunta2 = document.getElementById('pregunta2');
const Pregunta3 = document.getElementById('pregunta3');
const Pregunta4 = document.getElementById('pregunta4');
const Pregunta5 = document.getElementById('pregunta5');
const Pregunta6 = document.getElementById('pregunta6');
const error = document.getElementById('error');

formulario.addEventListener('submit' , (e) =>{
    e.preventDefault()
});

error.style.color = 'yellow';


const EnviarDatos = () =>{
    let MensajeError = [];

    if(Pregunta1.value === null || Pregunta1.value === ""){
        MensajeError.push('Complete la pregunta 1');
    };

    if(Pregunta2.value === null || Pregunta2.value === ""){
        MensajeError.push('Complete la pregunta 2');
    };

    if(Pregunta3.value === null || Pregunta3.value === ""){
        MensajeError.push('Complete la pregunta 3');
    };

    if(Pregunta4.value === null || Pregunta4.value === ""){
        MensajeError.push('Complete la pregunta 4');
    }

    if(Pregunta5.value === null || Pregunta5.value === ""){
        MensajeError.push('Complete la pregunta 5');
    }

    if(Pregunta6.value === null || Pregunta6.value === ""){
        MensajeError.push('Complete la pregunta 6');
    }

    else{
        alert('Encuesta Finalizada. Gracias!!')
        window.location.href = 'index.html'
    }

    error.innerHTML = MensajeError.join(' , ')
}



window.onload=ponerdatos

function ponerdatos() {
    let datos=document.cookie;

    let igual = datos.indexOf("=");
    let valor = datos.substring(igual+1)
    document.getElementById('name').value=valor;
    console.log(valor);
}



