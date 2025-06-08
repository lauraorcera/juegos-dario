let correctAnswers = {
    'cranio-drop': 'Cráneo', // Cambiado a 'Cráneo' para coincidir con el innerText
    'costillas-drop': 'Costillas',
    'columna-drop': 'Columna Vertebral',
    'humero-drop': 'Humero',
    'radio-drop': 'Radio y Cubito', // Cambiado para que coincida exactamente con el innerText
    'femur-drop': 'Femur',
};

let userAnswers = {};

// Configurar el arrastre de los elementos
document.querySelectorAll('.bone').forEach(bone => {
    bone.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
    });
});

// Permitir el "drop" en las zonas correspondientes
document.querySelectorAll('.dropzone').forEach(dropzone => {
    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        
        const draggedId = event.dataTransfer.getData('text'); // ID del hueso arrastrado
        const targetId = event.target.id; // ID de la zona de drop

        if (draggedId && targetId) {
            const draggedElement = document.getElementById(draggedId);
            const targetElement = document.getElementById(targetId);

            // Actualizar la posición del elemento arrastrado
            draggedElement.style.position = 'absolute';
            draggedElement.style.left = `${event.pageX - draggedElement.offsetWidth / 2}px`;
            draggedElement.style.top = `${event.pageY - draggedElement.offsetHeight / 2}px`;

            // Almacenar la respuesta del usuario
            userAnswers[targetId] = draggedElement.innerText;

            // Verificar si la respuesta es correcta
            // if (userAnswers[targetId] === correctAnswers[targetId]) {
            //     draggedElement.style.backgroundColor = 'lightgreen';
            // } else {
            //     draggedElement.style.backgroundColor = 'lightcoral';
            // }
        }
    });
});

// Verificación de respuestas al hacer clic en "Verificar"
document.getElementById('check-button').addEventListener('click', () => {
    let errors = 0;

    // Verificar las respuestas
    for (const key in correctAnswers) {
        // Asegurarse de que cada zona de drop tenga un valor asignado y coincida con la respuesta correcta
        if (userAnswers[key] !== correctAnswers[key]) {
            errors++;
        }
    }

    // Mostrar el mensaje adecuado según el número de errores
    if (errors <= 3) {
        alert('¡Muy bien! El juego ha terminado');
    } else {
        alert('¡Inténtalo de nuevo! Tienes más de 3 errores.');
    }
});
