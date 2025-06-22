const horasDisponibles = [
    { texto: "1 y media", hora: 1, minuto: 30 },
    { texto: "2 en punto", hora: 2, minuto: 0 },
    { texto: "2 y media", hora: 2, minuto: 30 },
    { texto: "3 en punto", hora: 3, minuto: 0 },
    { texto: "3 y cuarto", hora: 3, minuto: 15 },
    { texto: "3 y media", hora: 3, minuto: 30 },
    { texto: "6 en punto", hora: 6, minuto: 0 },
    { texto: "7 en punto", hora: 7, minuto: 0 },
    { texto: "8 y media", hora: 8, minuto: 30 },
    { texto: "9 en punto", hora: 9, minuto: 0 },


    { texto: "7 menos cuarto", hora: 6, minuto: 45 },
];

let intentos = 0;
let aciertos = 0;
let horasSeleccionadas = [];
let horaCorrecta;


function iniciarJuego() {
    // Elige 5 horas aleatorias (o la cantidad que desees)
    horasSeleccionadas = horasDisponibles.sort(() => 0.5 - Math.random()).slice(0, 11);
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

        // Soporte táctil para móviles
        img.addEventListener("touchstart", function (e) {
            const touch = e.touches[0];
            const rect = img.getBoundingClientRect();

            // Creamos el clon y lo añadimos al body
            const clone = img.cloneNode(true);
            clone.style.position = "absolute";
            clone.style.left = rect.left + "px";
            clone.style.top = rect.top + "px";
            clone.style.width = rect.width + "px";
            clone.style.height = rect.height + "px";
            clone.style.zIndex = 1000;
            clone.style.pointerEvents = "none";
            document.body.appendChild(clone);

            const offsetX = touch.clientX - rect.left;
            const offsetY = touch.clientY - rect.top;

            const move = (eMove) => {
                const moveTouch = eMove.touches[0];
                clone.style.left = moveTouch.clientX - offsetX + "px";
                clone.style.top = moveTouch.clientY - offsetY + "px";
            };

            const end = (eEnd) => {
                const finalTouch = eEnd.changedTouches[0];
                const dropZone = document.getElementById("reloj-central");
                const dropRect = dropZone.getBoundingClientRect();

                const x = finalTouch.clientX;
                const y = finalTouch.clientY;

                if (
                    x >= dropRect.left &&
                    x <= dropRect.right &&
                    y >= dropRect.top &&
                    y <= dropRect.bottom
                ) {
                    soltarTouch(img);
                }

                clone.remove();
                document.removeEventListener("touchmove", move);
                document.removeEventListener("touchend", end);
            };

            document.addEventListener("touchmove", move);
            document.addEventListener("touchend", end);
        });


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

    } else {
        document.getElementById("estado").innerText = "Incorrecto. Intenta con la siguiente.";

        document.getElementById("reloj-central").innerHTML = `
        <video autoplay muted loop class="reloj-correcto">
            <source src="imagenes/relojError.mp4" type="video/mp4">
            Tu navegador no soporta el video.
        </video>
        `;
    }

    setTimeout(() => {
        document.getElementById("reloj-central").innerHTML = `<img src="imagenes/relojenfadado.jpg" alt="Reloj sin agujas">`; // Imagen de reloj sin agujas
        document.getElementById("estado").innerText = "";
    }, 3000); // 3000 ms = 3 segundos
    intentos++;
    setTimeout(siguienteIntento, 3000);
}

function soltarTouch(img) {
    const hora = parseInt(img.dataset.hora);
    const minuto = parseInt(img.dataset.minuto);
    img.style.position = "";
    img.style.zIndex = "";
    img.style.left = "";
    img.style.top = "";


    if (hora === horaCorrecta.hora && minuto === horaCorrecta.minuto) {
        aciertos++;
        document.getElementById("estado").innerText = "¡Correcto!";
        document.getElementById("reloj-central").innerHTML = `
      <img src="imagenes/reloj_${horaCorrecta.hora}_${horaCorrecta.minuto}.jpg" alt="Hora correcta" class="reloj-correcto">
    `;
    } else {
        document.getElementById("reloj-central").innerHTML = `
      <video autoplay muted loop class="reloj-correcto">
        <source src="imagenes/relojError.mp4" type="video/mp4">
        Tu navegador no soporta el video.
      </video>
    `;
        document.getElementById("estado").innerText = "Incorrecto. Intenta con la siguiente.";
    }

    setTimeout(() => {
        document.getElementById("reloj-central").innerHTML = `
      <img src="imagenes/relojenfadado.jpg" alt="Reloj sin agujas">
    `;
        document.getElementById("estado").innerText = "";
    }, 3000);

    intentos++;
    setTimeout(siguienteIntento, 3000);
}


window.onload = iniciarJuego;
