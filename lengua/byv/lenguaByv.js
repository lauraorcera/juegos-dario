
const words = [
    { word: 'a__ioneta', correct: 'V', img: 'imagenes/avioneta.jpg' },
    { word: 'bam__u', correct: 'B', img: 'imagenes/1b-bambu.jpg' },
    { word: 'bom__a', correct: 'B', img: 'imagenes/1b-bomba.jpg' },
    { word: '__olcan', correct: 'V', img: 'imagenes/volcan.jpg' },
    { word: 'fram__uesa', correct: 'B', img: 'imagenes/1b-frambuesa.jpg' },
    { word: 'bom__illa', correct: 'B', img: 'imagenes/1b-bombilla.jpg' },
    { word: 'tam__or', correct: 'V', img: 'imagenes/tambor.jpg' },
    { word: 'som__ra', correct: 'B', img: 'imagenes/1y3b-sombra.jpg' },
    { word: 'som__rero', correct: 'B', img: 'imagenes/1y3b-sombrero.jpg' },
    { word: 'a__entura', correct: 'V', img: 'imagenes/aventurero.jpg' },
    { word: 'her__ir', correct: 'V', img: 'imagenes/hervir.jpg' },
    { word: 'la__adora', correct: 'V', img: 'imagenes/lavadora.jpg' },
    { word: 'escri__ir', correct: 'B', img: 'imagenes/escribir.jpg' },
    { word: '__ikingo', correct: 'V', img: 'imagenes/vikingo.jpg' },
    { word: '__ampiro', correct: 'V', img: 'imagenes/vampiro.jpg' },
    { word: '__erduras', correct: 'V', img: 'imagenes/verduras.jpg' },
    { word: 'hue__os', correct: 'V', img: 'imagenes/huevos.jpg' },
    { word: 'cla__o', correct: 'V', img: 'imagenes/clavo.jpg' },
    { word: 'lla__ero', correct: 'V', img: 'imagenes/llavero.jpg' },
    { word: 'ca__ar', correct: 'V', img: 'imagenes/cavar.jpg' },
    { word: 'llu__ia', correct: 'V', img: 'imagenes/lluvia.jpg' },
    { word: 'ol__idar', correct: 'V', img: 'imagenes/olvidar.jpg' },
    { word: 'nu__lador', correct: 'B', img: 'imagenes/nublado.jpg' },

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
