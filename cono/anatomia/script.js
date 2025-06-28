const wordDisplay = document.getElementById('word-display');
const hangmanImage = document.getElementById('hangman-image');
const wordImage = document.getElementById('word-image');
const wordImageMobile = document.getElementById('word-image-mobile');
const lettersContainer = document.getElementById('letters-container');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset-button');

// Define tus palabras y las imágenes asociadas
// Asegúrate de que las rutas de las imágenes sean correctas
const words = [
    { word: "costillas", image: "imagenes/costillas.webp" },
    { word: "femur", image: "imagenes/femur.webp" }, // Asegúrate de tener esta imagen
    { word: "humero", image: "imagenes/humero.webp" },
    { word: "celebro", image: "imagenes/celebro.webp" },
    { word: "corazon", image: "imagenes/corazon.webp" },
    { word: "pulmones", image: "imagenes/pulmones.webp" },
    { word: "tibia", image: "imagenes/tibia.webp" },
    { word: "perone", image: "imagenes/perone.webp" },
    { word: "higado", image: "imagenes/higado.webp" },


    { word: "cuadricep", image: "imagenes/cuadricep.jpg" }, // Asegúrate de tener esta imagen
];

let selectedWord = "";
let guessedWord = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 4;
let gameStarted = false;
// --- NUEVAS VARIABLES PARA SÍNTESIS DE VOZ ---
const synth = window.speechSynthesis;
let voices = [];

//---------------------------- Carga las voces disponibles una vez que estén listas------------
synth.onvoiceschanged = () => {
    voices = synth.getVoices();
    console.log("Voces cargadas:", voices.map(voice => voice.name));
};

// Función para reproducir un mensaje de voz
function speak(text, voiceName = "Google español") { // Establece una voz predeterminada
    if (!synth) {
        console.warn("Speech Synthesis no es compatible con este navegador.");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    // Busca una voz específica (por ejemplo, una voz en español)
    const desiredVoice = voices.find(voice => voice.name.includes(voiceName) && voice.lang.startsWith('es'));
    if (desiredVoice) {
        utterance.voice = desiredVoice;
    } else {
        console.warn(`La voz "${voiceName}" no se encontró o no hay voces en español disponibles. Usando la voz predeterminada.`);
    }

    utterance.pitch = 1; // Tono (0 a 2)
    utterance.rate = 1;  // Velocidad (0.1 a 10)
    utterance.volume = 1; // Volumen (0 a 1)

    synth.speak(utterance);
}

// ------------------------------- FIN DE LAS NUEVAS VARIABLES PARA SÍNTESIS DE VOZ ---

// Inicializa el juego
function initializeGame() {
    gameStarted = true;
    incorrectGuesses = 0;
    messageDisplay.textContent = "";
    hangmanImage.src = `imagenes/ahorcado_0.webp`;
    wordImage.classList.add('hidden'); // Ocultar la imagen al inicio
    wordImage.src = ""; // Limpiar la imagen anterior
    wordImageMobile.classList.add('hidden'); // Ocultar la imagen al inicio
    wordImageMobile.src = ""; // Limpiar la imagen anterior

    // Seleccionar una palabra al azar
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex].word.toUpperCase(); // Convertir a mayúsculas
    wordImage.src = words[randomIndex].image;
    wordImageMobile.src = words[randomIndex].image;

    // Inicializar la palabra a mostrar con guiones bajos
    guessedWord = Array(selectedWord.length).fill('_');
    updateWordDisplay();
    createLetterButtons();
    resetButton.style.display = 'none'; // Ocultar el botón de reinicio al inicio
}

// Actualiza la visualización de la palabra adivinada
function updateWordDisplay() {
    wordDisplay.textContent = guessedWord.join(' ');
}

// Crea los botones de las letras del alfabeto
function createLetterButtons() {
    lettersContainer.innerHTML = '';
    for (let i = 65; i <= 90; i++) { // ASCII para A-Z
        const letter = String.fromCharCode(i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('letter-button');
        button.addEventListener('click', () => handleGuess(letter, button));
        lettersContainer.appendChild(button);
    }
}

// Maneja la adivinanza de una letra
function handleGuess(letter, button) {
    if (!gameStarted) return; // No permitir adivinar si el juego no ha iniciado

    button.disabled = true; // Deshabilitar el botón de la letra

    let found = false;
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            guessedWord[i] = letter;
            found = true;
        }
    }

    if (found) {
        updateWordDisplay();

        const successMessages = [
            "¡Muy bien!",
            "¡Correcto!",
            "¡Genial!",
            "¡Excelente!",
            "¡Así se hace!",
            "¡Lo lograste!"
        ];
        const randomSuccessMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
        speak(randomSuccessMessage); // Reproduce un mensaje de voz aleatorio al acertar
        // --- FIN DE LA MODIFICACIÓN DE ACIERTO ---




        if (guessedWord.join('') === selectedWord) {
            endGame(true); // El jugador ganó
        }
    } else {
        incorrectGuesses++;
        hangmanImage.src = `imagenes/ahorcado_${incorrectGuesses}.webp`;
        //--------------------------introducir voz---------------------------
        const errorMessages = [
            "Oh no, esa no es.",
            "¡Uy! Esa letra no esta",
            "Esa letra no está.",
            "¡Fallaste!",
            "No, esa no."
        ];
        const randomErrorMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
        speak(randomErrorMessage); // Reproduce un mensaje de voz aleatorio

        if (incorrectGuesses >= maxIncorrectGuesses) {
            endGame(false); // El jugador perdió
        }
    }
}

// Termina el juego
function endGame(win) {
    gameStarted = false;
    disableAllLetterButtons();
    resetButton.style.display = 'block'; // Mostrar el botón de reinicio

    if (win) {
        messageDisplay.textContent = "¡Felicidades! ¡Adivinaste la palabra!";
        messageDisplay.style.color = "green";
    } else {
        messageDisplay.textContent = `¡Perdiste! La palabra era: "${selectedWord}"`;
        messageDisplay.style.color = "black";
    }

    
    wordImage.classList.remove('hidden'); // Mostrar la imagen relacionada
    wordImageMobile.classList.remove('hidden'); // Mostrar la imagen relacionada
}

// Deshabilita todos los botones de letras
function disableAllLetterButtons() {
    document.querySelectorAll('.letter-button').forEach(button => {
        button.disabled = true;
    });
}

// Evento para el botón de reinicio
resetButton.addEventListener('click', initializeGame);

// Iniciar el juego por primera vez
initializeGame();