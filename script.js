const typed = new Typed('.typed', {
    strings: [
        '<i class="bienvenida">Bienvenidos al Encriptador y Desencriptador de Texto Alura...</i>',  
        '<i class="bienvenida">Mi Primer Challenge Completado</i>',
        '<i class="bienvenida">Que tengas un hermoso día</i>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 70, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 5, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 0, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

})

let botonEncriptar = document.getElementById("boton-Encriptar");
let botonDesncriptar = document.getElementById("boton-Desencriptar");
let botonCopiar = document.getElementById("boton-Copiar");

let seccionSinRta =  document.getElementById("sin-rta");
var mensajeRta = document.getElementById("texto-rta");

botonEncriptar.onclick = encriptarTexto;
botonDesncriptar.onclick = desencriptarTexto;
botonCopiar.onclick = CopiarRta;

function encriptarTexto() {
    
    var mensaje = document.getElementById("mensaje").value;
    
    
    mensaje = mensaje.replace(/e/g, "enter");
    mensaje = mensaje.replace(/i/g, "imes");
    mensaje = mensaje.replace(/a/g, "ai");
    mensaje = mensaje.replace(/o/g, "ober");
    mensaje = mensaje.replace(/u/g, "ufat");

    
    seccionSinRta.style.display = "none";
    mensajeRta.innerHTML="mensaje encriptado";

    
    mensajeRta.innerHTML = mensaje;
}

function desencriptarTexto(){
    var mensaje = document.getElementById("mensaje").value;
    
    
    mensaje = mensaje.replace(/ufat/g, "u");
    mensaje = mensaje.replace(/ober/g, "o");
    mensaje = mensaje.replace(/ai/g, "a");
    mensaje = mensaje.replace(/imes/g, "i");
    mensaje = mensaje.replace(/enter/g, "e");
    
    
    seccionSinRta.style.display = "none";
    mensajeRta.innerHTML="mensaje encriptado";

    
    mensajeRta.innerHTML = mensaje;
}

function CopiarRta (){
    var textoACopiar = document.getElementById("texto-rta")

    var seleccion = document.createRange();
    seleccion.selectNodeContents(textoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    
}

