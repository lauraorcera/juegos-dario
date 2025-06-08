const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answerInput');
const submitButton = document.getElementById('submitButton');
const feedbackElement = document.getElementById('feedback');
const carElement = document.getElementById('car');
const scoreElement = document.getElementById('score');
const trackContainer = document.querySelector('.track-container');

const correctSound = document.getElementById('correctSound');
const incorrectSound = document.getElementById('incorrectSound');
const winSound = document.getElementById('winSound');

const cantidad = document.getElementById('cantidad');

let num1, num2;
let score = 0;
let carPosition = 0; // en porcentaje
const maxCarPosition = 20; // Posición máxima para que el coche quede visible al final
const carStep = 1; // % que avanza el coche por acierto
let cantidaspreguntasgeneradas = 0

cantidad.textContent = `Preguntas:  ${cantidaspreguntasgeneradas} /${maxCarPosition / carStep}`;
/**
 * Genera un nuevo problema de multiplicación.
 */
function generateProblem() {
    num1 = Math.floor(Math.random() * 9) + 2; // Números entre 2 y 10 para hacerlas un poco más variadas
    num2 = Math.floor(Math.random() * 9) + 2;
    questionElement.textContent = `¿Cuánto es ${num1} x ${num2}?`;
    answerInput.value = '';
    feedbackElement.textContent = '';
    feedbackElement.classList.remove('correct', 'incorrect');
    answerInput.focus();
    cantidaspreguntasgeneradas++
    cantidad.textContent = `Preguntas:  ${cantidaspreguntasgeneradas} /${maxCarPosition / carStep}`;
}

/**
 * Reproduce un sonido, con un pequeño reseteo para que se pueda reproducir rápidamente.
 * @param {HTMLAudioElement} sound
 */
function playSound(sound) {
    sound.currentTime = 0; // Reinicia el sonido al principio
    sound.play().catch(e => console.log("Error al reproducir sonido:", e.message)); // Evita errores de promesa no manejada
}

/**
 * Verifica la respuesta del usuario.
 */
function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    const correctAnswer = num1 * num2;

    if (isNaN(userAnswer)) {
        feedbackElement.textContent = '¡Ups! Eso no es un número. ¡Intenta de nuevo!';
        feedbackElement.classList.add('incorrect');
        playSound(incorrectSound);
        return;
    }

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = '¡Genial! ¡Respuesta Correcta! 🎉';
        feedbackElement.classList.add('correct');
        playSound(correctSound);
        score += 5;


        scoreElement.textContent = `Puntuación: ${score}`;

        // Mueve el coche y añade animación de aceleración
        carElement.classList.add('accelerate');
        carPosition += carStep;
        if (carPosition > maxCarPosition) {
            carPosition = maxCarPosition; // Asegura que no se pase
        }
        updateCarPosition();
        playSound(engineSound);

        // Elimina la clase de aceleración después de la animación para el próximo movimiento
        setTimeout(() => {
            carElement.classList.remove('accelerate');
        }, 700); // Duración de la transición de 'left'
        if ((cantidaspreguntasgeneradas) !== maxCarPosition) {
            // Si llega al final de la pista
            if (carPosition === maxCarPosition) {
                setTimeout(() => {
                    feedbackElement.textContent = '¡Increíble! ¡Has ganado la carrera! 🏆';
                    feedbackElement.classList.add('correct');
                    playSound(winSound);
                    setTimeout(() => {
                        // Reiniciar el juego después de un breve momento
                        score = 0;
                        carPosition = 0;
                        scoreElement.textContent = `Puntuación: ${score}`;
                        updateCarPosition();
                        generateProblem();
                    }, 3000); // Espera 3 segundos antes de reiniciar
                }, 1000); // Espera 1 segundo para que el coche termine de moverse
            } else {
                setTimeout(generateProblem, 1500); // Genera nueva pregunta después de 1.5 segundos
            }
        } else {
            feedbackElement.textContent = 'juego terminado" 🏆';
            submitButton.hidden = true;
            answerInput.hidden = true;
            if (score >= 90) {
                questionElement.textContent = 'Has ganado 10 minutos de tablet';
            }
        }


    } else {
        feedbackElement.textContent = `¡Casi! La respuesta correcta era ${correctAnswer}. ¡Sigue intentando! 😔`;
        feedbackElement.classList.add('incorrect');
        playSound(incorrectSound);
        answerInput.value = '';
        answerInput.focus();
        setTimeout(generateProblem, 1500);
    }
}

/**
 * Actualiza la posición visual del coche.
 */
function updateCarPosition() {
    carElement.style.left = `${carPosition * 5}%`;
}

// Event Listeners
submitButton.addEventListener('click', checkAnswer);
answerInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Inicializa el juego
window.onload = function () {
    generateProblem();
    updateCarPosition();
};