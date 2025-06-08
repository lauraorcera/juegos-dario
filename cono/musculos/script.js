// --- Configuración de imágenes para el juego ---
const images = [
  'imagenes/imagen1.jpg',
  'imagenes/pectoral.jpg',
  'imagenes/abdominal.jpg',
  'imagenes/gluteos.jpg',
  'imagenes/gemelos.jpg',
  'imagenes/cuadriceps.jpg'
];

// --- Variables del juego ---
let cards = [...images, ...images]; // Duplica las imágenes para crear parejas
let board = document.getElementById('game-board'); // El contenedor de las cartas en el HTML
let selected = []; // Almacena las cartas que el jugador ha volteado (máximo 2)
let matched = []; // Almacena las cartas que ya han sido emparejadas

// --- Variables para el contador de errores ---
let erroresPermitidos = 7; // Número máximo de errores que el jugador puede cometer
let erroresActuales = 0;   // Contador de errores actual
const contadorErroresElement = document.getElementById('contador-errores'); // Elemento HTML para mostrar los errores

// --- Variables para la Speech Synthesis API (voz) ---
const synth = window.speechSynthesis; // Objeto principal para la síntesis de voz
let vocesDisponibles = []; // Almacenará las voces del sistema una vez cargadas

// Mensajes de error que el juego "dirá" cuando el jugador se equivoque
// He ajustado los mensajes para que sean divertidos y no ofensivos.
const mensajesErrorDivertidos = [
  "¡Has fallado, mojòn!",
  "¡Intenta de nuevo campeón!",
  "¡Que paquete eres!",
  "¡Ja ja ja ja ja! Esa carta se rió de ti.",
  "¡Más perdido que un aldeano en el Nederr!",
  "¡Esa carta esta mas escondida que la fortaleza del Nederr!",
];

// Evento que se dispara cuando las voces del sistema están listas para ser usadas.
// Es crucial para poder seleccionar y usar las voces.
synth.onvoiceschanged = () => {
    vocesDisponibles = synth.getVoices();
    console.log('Voces disponibles cargadas:', vocesDisponibles.map(v => v.name));
    // Opcional: Aquí podrías buscar una voz específica (ej. en español) si lo necesitas.
    // const vozEspanola = vocesDisponibles.find(voice => voice.lang.startsWith('es'));
    // if (vozEspanola) {
    //     console.log('Voz en español encontrada:', vozEspanola.name);
    // }
};


// --- Funciones del juego ---

/**
 * Mezcla aleatoriamente un array.
 * @param {Array} array - El array a mezclar.
 * @returns {Array} El array mezclado.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Crea y renderiza el tablero de juego.
 */
function createBoard() {
  board.innerHTML = ''; // Limpia el tablero si ya existe
  shuffle(cards); // Mezcla las cartas

  // Reinicia el estado del juego
  selected = [];
  matched = [];
  erroresActuales = 0;
  actualizarInterfazErrores(); // Actualiza la visualización de errores a 0
  document.getElementById('win-message').classList.add('hidden'); // Oculta el mensaje de victoria

  // Crea y añade cada carta al tablero
  cards.forEach((src, index) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index; // Guarda el índice original de la carta (no siempre necesario, pero útil)

    let img = document.createElement('img');
    img.src = 'imagenes/sistemamuscular.jpg'; // Imagen de la parte trasera de la carta
    img.dataset.src = src; // La URL de la imagen frontal se guarda en un atributo de datos
    card.appendChild(img);

    card.addEventListener('click', () => flipCard(card, img)); // Añade el evento de clic a la carta
    board.appendChild(card); // Añade la carta al tablero
  });
}

/**
 * Voltea una carta si es posible.
 * @param {HTMLElement} card - El elemento HTML de la carta.
 * @param {HTMLElement} img - El elemento HTML de la imagen dentro de la carta.
 */
function flipCard(card, img) {
  // Solo permite voltear la carta si:
  // 1. Menos de 2 cartas están seleccionadas.
  // 2. La carta no ha sido ya emparejada.
  // 3. La carta no está ya volteada.
  // 4. El jugador no ha excedido el límite de errores.
  if (selected.length < 2 && !card.classList.contains('matched')
    && !card.classList.contains('flipped') && erroresActuales < erroresPermitidos) {
    img.src = img.dataset.src; // Muestra la imagen frontal
    card.classList.add('flipped'); // Marca la carta como volteada
    selected.push({ card, img }); // Añade la carta a las seleccionadas

    // Si ya se han seleccionado 2 cartas, comprueba si son pareja
    if (selected.length === 2) {
      checkMatch();
    }
  }
}

/**
 * Comprueba si las dos cartas seleccionadas son una pareja.
 */
function checkMatch() {
  const [first, second] = selected; // Obtiene las dos cartas seleccionadas

  if (first.img.dataset.src === second.img.dataset.src) {
    // Si las imágenes son iguales, es una pareja
    first.card.classList.add('matched'); // Marca las cartas como emparejadas
    second.card.classList.add('matched');
    matched.push(first.card, second.card); // Añade al array de emparejadas

    // Si todas las cartas han sido emparejadas, el juego ha terminado
    if (matched.length === cards.length) {
      document.getElementById('win-message').classList.remove('hidden'); // Muestra el mensaje de victoria
      reproducirMensajeDeVoz("¡Felicidades! ¡tienes 15 minutos de tablet!"); // Mensaje de voz de victoria
    }
  } else {
    // Si las imágenes no coinciden, es un error
    erroresActuales++; // Incrementa el contador de errores
    actualizarInterfazErrores(); // Actualiza la visualización del contador en el HTML

    // Selecciona y reproduce un mensaje de error de voz aleatorio
    const mensajeAleatorio = mensajesErrorDivertidos[Math.floor(Math.random() * mensajesErrorDivertidos.length)];
    reproducirMensajeDeVoz(mensajeAleatorio);

    // Vuelve a voltear las cartas después de un breve retraso (1 segundo)
    // para que el jugador pueda ver el error.
    setTimeout(() => {
      first.img.src = 'imagenes/sistemamuscular.jpg'; // Vuelve a la imagen de la parte trasera
      second.img.src = 'imagenes/sistemamuscular.jpg';
      first.card.classList.remove('flipped'); // Quita la clase 'flipped'
      second.card.classList.remove('flipped');
    }, 1000);

    // Comprueba si el jugador ha excedido el límite de errores después de un fallo
    verificarFinDelJuegoPorErrores();
  }

  selected = []; // Limpia las cartas seleccionadas para la siguiente jugada
}

/**
 * Actualiza el número de errores en la interfaz de usuario.
 */
function actualizarInterfazErrores() {
  if (contadorErroresElement) {
    contadorErroresElement.textContent = erroresActuales;
  }
}

/**
 * Verifica si el jugador ha cometido demasiados errores y termina el juego.
 */
function verificarFinDelJuegoPorErrores() {
  if (erroresActuales >= erroresPermitidos) {
    reproducirMensajeDeVoz("¡Fin del juego! Has cometido demasiados errores paquete."); // Mensaje de voz de Game Over
    alert('¡Game Over! Has cometido demasiados errores.'); // Alerta tradicional
    createBoard(); // Reinicia el juego automáticamente
  }
}

/**
 * Reproduce un mensaje de texto usando la Speech Synthesis API.
 * @param {string} texto - El texto a reproducir.
 */
function reproducirMensajeDeVoz(texto) {
    // Comprueba si la API de síntesis de voz está soportada por el navegador
    if (!synth) {
        console.warn("Speech Synthesis API no soportada en este navegador.");
        return;
    }

    // Crea un objeto SpeechSynthesisUtterance con el texto
    const utterance = new SpeechSynthesisUtterance(texto);

    // Configura propiedades de la voz para hacerla más divertida o específica
    if (vocesDisponibles.length > 0) {
        // Intenta encontrar una voz en español. Puedes ajustar la lógica de selección.
        // Ej: 'es-ES' para español de España, 'es-MX' para México, etc.
        const vozEspanola = vocesDisponibles.find(voice => voice.lang.startsWith('es'));
        if (vozEspanola) {
            utterance.voice = vozEspanola; // Asigna la voz encontrada
        } else {
            utterance.voice = vocesDisponibles[0]; // Si no hay en español, usa la primera disponible
        }
    }
    utterance.pitch = 2.0; // Tono: 1.0 es normal, 1.2 es un poco más agudo (divertido)
    utterance.rate = 1.0;  // Velocidad: 1.0 es normal, 1.1 es un poco más rápido
    utterance.volume = 1;  // Volumen: 1 (máximo)

    // Reproduce el mensaje
    synth.speak(utterance);
}

// --- Iniciar el juego cuando el script se carga ---
createBoard();

