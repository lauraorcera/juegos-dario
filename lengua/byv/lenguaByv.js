
const words = [

    { word: 'tam__or', correct: 'B', img: 'imagenes/tambor.jpg' },
    { word: 'bam__u', correct: 'B', img: 'imagenes/1b-bambu.jpg' },
    { word: 'fram__uesa', correct: 'B', img: 'imagenes/1b-frambuesa.jpg' },
    { word: 'em__udo', correct: 'B', img: 'imagenes/embudo.jpg' },
    { word: 'com__ate', correct: 'B', img: 'imagenes/combate.jpg' },
    { word: '__ampiro', correct: 'V', img: 'imagenes/vampiro.jpg' },
    { word: 'ad__iento', correct: 'V', img: 'imagenes/adviento.jpg' },
    { word: 'ad__ertencia', correct: 'V', img: 'imagenes/advertencia.jpg' },
    { word: 'en__io', correct: 'V', img: 'imagenes/envio.jpg' },
    { word: 'nu__lador', correct: 'B', img: 'imagenes/nublado.jpg' },


    { word: 'a__ioneta', correct: 'V', img: 'imagenes/avioneta.jpg' },
    { word: '__olcan', correct: 'V', img: 'imagenes/volcan.jpg' },
    { word: 'a__entura', correct: 'V', img: 'imagenes/aventurero.jpg' },
    { word: '__ikingo', correct: 'V', img: 'imagenes/vikingo.jpg' },
    { word: 'cla__o', correct: 'V', img: 'imagenes/clavo.jpg' },
    { word: 'ol__idar', correct: 'V', img: 'imagenes/olvidar.jpg' },



    { word: 'bom__illa', correct: 'B', img: 'imagenes/1b-bombilla.jpg' },
    { word: 'la__adora', correct: 'V', img: 'imagenes/lavadora.jpg' },
    { word: 'escri__ir', correct: 'B', img: 'imagenes/escribir.jpg' },
    { word: 'hue__os', correct: 'V', img: 'imagenes/huevos.jpg' },
    { word: 'lla__ero', correct: 'V', img: 'imagenes/llavero.jpg' },
    { word: 'ca__ar', correct: 'V', img: 'imagenes/cavar.jpg' },
    { word: 'llu__ia', correct: 'V', img: 'imagenes/lluvia.jpg' },

];

let palabrasmostradas = [];
let currentWordIndex;

function showWord() {
    document.getElementById("feedback").innerText = "";
    document.getElementById("nextBtn").style.display = "none";

    let palabraAleatoria;
    do {
        palabraAleatoria = Math.floor(Math.random() * words.length);
    } while (palabrasmostradas.includes(palabraAleatoria));

    palabrasmostradas.push(palabraAleatoria);
    currentWordIndex = palabraAleatoria;
    const wordObj = words[currentWordIndex];
    document.getElementById("imagenPalabra").src = wordObj.img
    document.getElementById("word").innerText = wordObj.word.replace("__", "___");
}

function checkAnswer(letter) {
    const wordObj = words[currentWordIndex];
    const feedback = document.getElementById("feedback");
    if (letter === wordObj.correct) {
        feedback.innerText = "✔ ¡Correcto!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "❌ Incorrecto. Era la letra '" + wordObj.correct + "'.";
        feedback.style.color = "red";
    }
    document.getElementById("nextBtn").style.display = "inline-block";
}

function nextWord() {

    if (palabrasmostradas.length >= words.length) {
        document.getElementById("word").innerText = "¡Juego terminado! ¡Bien hecho!";
        document.querySelector(".buttons").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
    } else {
        showWord();
    }
}

// Inicializar juego
window.onload = showWord;
