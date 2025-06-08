const horasDisponibles = [
    { texto: "3 y cuarto", hora: 3, minuto: 15 },
    { texto: "6 en punto", hora: 6, minuto: 0 },
    { texto: "7 menos cuarto", hora: 6, minuto: 45 },
    { texto: "9 en punto", hora: 9, minuto: 0 },
    { texto: "3 en punto", hora: 3, minuto: 0 },
];

let intentos = 0;
let aciertos = 0;
let horasSeleccionadas = [];
let horaCorrecta;

function iniciarJuego() {
    // Elige 5 horas aleatorias (o la cantidad que desees)
    horasSeleccionadas = horasDisponibles.sort(() => 0.5 - Math.random()).slice(0, 5);
    siguienteIntento();
}

function siguienteIntento() {
    if (intentos >= 5) {
        document.getElementById("estado").innerText = `Juego terminado. Aciertos: ${aciertos}/5`;
        return;
    }
    document.getElementById("relojes-container").innerHTML = "";
    horaCorrecta = horasSeleccionadas[intentos];
    document.querySelector(".instruccion").innerText = `Arrastra el reloj que marca las ${horaCorrecta.texto}`;

    const opciones = [horaCorrecta];
    while (opciones.length < 3) {
        const aleatoria = horasDisponibles[Math.floor(Math.random() * horasDisponibles.length)];
        if (!opciones.includes(aleatoria)) opciones.push(aleatoria);
    }

    // Mezcla las opciones aleatorias
    opciones.sort(() => 0.5 - Math.random()).forEach((hora, index) => {
        const img = document.createElement("img");
        
        img.src = `imagenes/reloj_${hora.hora}_${hora.minuto}.jpg`; // Ruta correcta
        img.className = "reloj";
        img.draggable = true;
        img.id = `opcion_${index}`;
        img.dataset.hora = hora.hora;
        img.dataset.minuto = hora.minuto;
        img.ondragstart = arrastrar;
        document.getElementById("relojes-container").appendChild(img);
    });
}

function arrastrar(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function permitirSoltar(ev) {
    ev.preventDefault();
}

function soltar(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    const img = document.getElementById(id);
    const hora = parseInt(img.dataset.hora);
    const minuto = parseInt(img.dataset.minuto);   

    if (hora === horaCorrecta.hora && minuto === horaCorrecta.minuto) {
        aciertos++;
        document.getElementById("estado").innerText = "¡Correcto!";

        // Mostrar la hora correcta en el reloj central
        document.getElementById("reloj-central").innerHTML = `<img src="imagenes/reloj_${horaCorrecta.hora}_${horaCorrecta.minuto}.jpg" alt="Hora correcta" class="reloj-correcto">`;

      

        // Usamos setTimeout para ocultar la hora correcta después de 3 segundos

        setTimeout(() => {
            document.getElementById("reloj-central").innerHTML = `<img src="imagenes/relojenfadado.jpg" alt="Reloj sin agujas">`; // Imagen de reloj sin agujas
        }, 3000); // 3000 ms = 3 segundos

    } else {
        document.getElementById("estado").innerText = "Incorrecto. Intenta con la siguiente.";
    }
    intentos++;
    setTimeout(siguienteIntento, 1500);
}

window.onload = iniciarJuego;
