// Base de datos completa de la historia en JSON
const storyDatabase = {
  "exit": {
    "title": "¿Quieres salir del libro?",
    "image": "<img src='imagenes/no.jpg' alt='Salida' class='story-image'>",
    "leftcontent": "Has decidido quedarte en casa.El rey se ha quedado sin su héroe.<br><br>Las calles del Reino están vacías, y no se escucha ni una sola carcajada.",
    "rightcontent": "La aventura ha esperado por ti, pero no has querido ir. <br><br>El Mago Sombra, desde su torre oscura, se ríe mientras el reino sigue triste.",
    "choices": [
      {
        "text": "Quiero volver al libro y empezar de nuevo",
        "image": "<img src='imagenes/si.webp' alt='Pueblo' class='story-button-img'>",
        "type": "si",
        "nextChapter": "si_path"
      },
      {
        "text": "No quiero leer más",
        "image": "<img src='imagenes/no.jpg' alt='Pueblo' class='story-button-img'>",
        "nextChapter": "leave"
      }
    ]
  },

  // ------------------------------------------------------------------ pagina 1-2 SI O NO ----------------------------------------------------------------
  "start": {
    "title": "El Reino de la Risa",
    "image": "<img src='imagenes/pueblo.jpg' alt='Pueblo' class='story-image'>",
    "leftcontent": "¡Hola, Aventurero! <br><br> Esta historia es muy  especial porque Tú eres el protagonista.",
    "rightcontent": "El malvado Mago Sombra ha robado la Corona de la Risa.<br><br>Ahora, todo el mundo anda triste y los días son muy, muy aburridos.<br><br>Solo TÚ puedes cambiar esta historia.<br><br>¿Quieres vivir esta aventura?<br><br>El reino entero espera por un héroe como tú..",
    "choices": [
      {
        "text": "Si, aceptar la aventura",
        "image": "<img src='imagenes/si.webp' alt='Pueblo' class='story-button-img'>",
        "type": "si",
        "nextChapter": "si_path"
      },
      {
        "text": "No, prefiero quedarme en casa y ver qué pasa",
        "image": "<img src='imagenes/no.jpg' alt='Pueblo' class='story-button-img'>",
        "type": "no",
        "nextChapter": "exit"
      },

    ]
  },
  // ------------------------------------------------------------------ pagina 3-4 HEROE O VILLANO ----------------------------------------------------------------
  "si_path": {
    "title": "La Gran Decisión",
    "image": "<img src='imagenes/si.webp' alt='Pueblo' class='story-image'>",
    "leftcontent": "¡Eres muy Valiente!<br><br>Ahora viene la decisión más importante:<br><br>¿Qué tipo de aventurero quieres ser?",
    "rightcontent": "El Camino de los Héroes:<br><br>Tu misión será recuperar la Corona de la Risa y devolver la alegría al reino. Ayudarás a todos y serás el salvador del día.<br><br>El Camino de los Villano Travieso:<br><br>Tu misión será convertirte en el ayudante más travieso del Mago Sombra. ¡Prepárate para aventuras inesperadas!",
    "choices": [
      {

        "text": "Camino de los Heroes.",
        "image": "<img src='imagenes/heroes.jpg' alt='Principe y Prncesa' class='story-button-img'>",
        "type": "si",
        "nextChapter": "heroe"
      },
      {
        "text": "Camino de los Villanos.",
        "image": "<img src='imagenes/villanos.webp' alt='Estan los villanos que son bruja o brujo' class='story-button-img'>",
        "type": "si",
        "nextChapter": "villano"
      },
    ]
  },
  // ------------------------------------------------------------------ pagina 5-6 PRINCIPE O PRINCESA ----------------------------------------------------------------
  "heroe": {
    "title": "Elige tu personaje",
    "image": "<img src='imagenes/heroes.jpg' alt='estan el principe y la princesa esperando que elijas' class='story-image'>",
    "leftcontent": "¡Fantástico! Has elegido el camino de la valentía. El reino de la risa te necesita.<br><br>Ahora, para empezar tu aventura, elige al héroe que serás.",
    "rightcontent": "El Principe, es un guerrero inteligente que conoce las mejores tácticas de combate. Su espada y su sabiduría te ayudarán en las situaciones mas dificiles.<br><br>La Princesa, es una exploradora valiente que conoce todos los secretos del bosque y sabe cómo enfrentar cualquier desafío. Su coraje te guiarán por el camino correcto.",
    "choices": [
      {
        "text": "Principe",
        "image": "<img src='imagenes/principe.webp' alt='Pueblo' class='story-button-img'>",
        "type": "si",
        "nextChapter": "principe"
      },
      {
        "text": "Princesa",
        "image": "<img src='imagenes/princesa.webp' alt='Pueblo' class='story-button-img'>",
        "type": "si",
        "nextChapter": "princesa"
      },
    ]
  },
  // ------------------------------------------------------------------ pagina 5-6 brujo o bruja ----------------------------------------------------------------
  "villano": {
    "title": "Elige tu Villano",
    "image": "<img src='imagenes/villanos.webp' alt='Pueblo' class='story-image'>",
    "leftcontent": "¡Fantástico! Has decidido unirte equipo más travieso del reino.<br><br>Ahora no solo eres un aventurero, ¡eres un villano travieso!",
    "rightcontent": "Para esta misión traviesa, debes elegir tu personaje.<br><br> El Brujo: Es un experto en bromas y travesuras que conoce todos los trucos para hacer travesuras.<br><br>La Bruja: Es muy inteligente para planear las mejores travesuras del reino. Conoce todos los pasadizos secretos y sabe cómo hacer bromas increíbles.",
    "choices": [
      {
        "text": "Brujo",
        "image": "<img src='imagenes/brujo.webp' alt='Elijes se el Brujo ' class='story-button-img'>",
        "type": "si",
        "nextChapter": "brujo"
      },
      {
        "text": "Bruja",
        "image": "<img src='imagenes/bruja.webp' alt='Elijes se la bruja' class='story-button-img'>",
        "type": "si",
        "nextChapter": "bruja"
      },
    ]
  },
  // ------------------------------------------------------------------ pagina 7-8 Principe (izq. o derecha) ----------------------------------------------------------------
  "principe": {
    "title": "Has elegido al Príncipe",
    "image": "<img src='imagenes/principe_camino.webp' alt='Principe valiente' class='story-image'>",
    "leftcontent": "¡Excelente elección! Eres el Príncipe.<br><br> Armado de valor, te diriges hacia el castillo del Mago Sombra. El camino es peligroso, pero tú estás preparado.",
    "rightcontent": "Al llegar a las afueras del castillo, te encuentras con una encrucijada.<br><br> A la izquierda hay un sendero que lleva directamente a la entrada principal, pero está lleno de guardias.<br><br> A la derecha hay un camino más largo que rodea el castillo, pero parece más seguro.<br><br>¿Qué decides hacer?",
    "choices": [
      {
        "text": "Luchar",
        "image": "<img src='imagenes/camino_izquierdo.webp' alt='elijes el camino de la lucha' class='story-button-img'>",
        "type": "si",
        "nextChapter": "camino_izquierdo"
      },
      {
        "text": "Camino del Bosque",
        "image": "<img src='imagenes/camino_derecho.jpg' alt='eliges el camino del bosque' class='story-button-img'>",
        "type": "si",
        "nextChapter": "camino_derecho"
      }
    ]
  },
// ------------------------------------------------------------------ pagina 4 princesa (cueva o arbol) ---
  "princesa": {
    "title": "Has elegido a la Princesa",
    "image": "<img src='imagenes/princesa_camino.jpg' alt='Principe valiente' class='story-image'>",
    "leftcontent": "¡Perfecta elección! Eres la Princesa.<br><br>Con tu conocimiento del bosque, sabes que hay rutas secretas que solo tú conoces.",
    "rightcontent": "Mientras caminas por el bosque, llegas a un lugar donde se separan los caminos y recuerdas dos rutas:<br><br>-Las cuevas subterráneas que conectan con los sótanos del castillo.<br><br> El sendero que lleva al árbol gigante desde donde puedes alcanzar una ventana de la torre más alta. <br><br>¿Cuál eliges?",
    "choices": [
      {
        "text": "La Cueva",
        "image": "<img src='imagenes/cueva_princesa.jpg' alt='eliges ir por la cueva' class='story-button-img'>",
        "type": "si",
        "nextChapter": "la_cueva"
      },
      {
        "text": "Arbol Gigante",
        "image": "<img src='imagenes/princesa_arbol.jpg' alt='eliges escalar el arbol' class='story-button-img'>",
        "type": "si",
        "nextChapter": "arbol_gigante"
      }
    ]
  },
// ------------------------------------------------------------------ pagina 4 brujo (buscar o vigilar) ---

"brujo": {
    "title": "Has elegido al Brujo travieso",
    "image": "<img src='imagenes/magoybrujo.jpg' alt='Principe valiente' class='story-image'>",
    "leftcontent": "¡Genial! Ahora eres el Brujo Travieso.<br><br>Te diriges al castillo del Mago Sombra. Cuando llegas, te recibe con una sonrisa malvada.",
    "rightcontent": "¡Bienvenido, pequeño brujo! Tengo una misión perfecta para ti. Te dice el Mago Sombra.<br><br>El mago te cuenta que alguien va a venir por la Corona de la Risa<br><br>Te da dos opciones: ir a buscarlos para detenerlos, o quedarte vigilando el castillo.<br><br>¿Cuál te gusta más?",
    "choices": [
      {
        "text": "Voy a Buscarlo",
        "image": "<img src='imagenes/brujo_buscar.jpg' alt='eliges ir por la cueva' class='story-button-img'>",
        "type": "si",
        "nextChapter": "buscar"
      },
      {
        "text": "Me quedo Vigilando",
        "image": "<img src='imagenes/brujo_vigila.jpg' alt='eliges escalar el arbol' class='story-button-img'>",
        "type": "si",
        "nextChapter": "vigilar"
      }
    ]
  },

// ------------------------------------------------------------------ pagina 7-8 bruja (trampas o espiar) ---

"bruja": {
    "title": "Has elegido a la Bruja traviesa",
    "image": "<img src='imagenes/bruja_castillo.jpg' alt='Principe valiente' class='story-image'>",
    "leftcontent": "¡Excelente! Ahora eres la Bruja Traviesa.<br><br>Llegas al castillo del Mago Sombra y él te da la bienvenida.",
    "rightcontent": "Justo a tiempo. Necesito a alguien como tú, le dice el brujo.<br><br>El Mago Sombra te explica que tiene la Corona de la Risa escondida, pero está preocupado porque alguien va a venir a por ella.<br><br>Tú puedes ayudarle a preparar trampas para detenerlos, o puedes ir a espiar.<br><br>¿Qué decides?",
    "choices": [
      {
        "text": "Prepara trampas",
        "image": "<img src='imagenes/bruja_posiones.jpg' alt='estas preparando posiones magicas para tus trampas' class='story-button-img'>",
        "type": "si",
        "nextChapter": "trampas"
      },
      {
        "text": "Espiar",
        "image": "<img src='imagenes/bruja_espiar.webp' alt='eliges salir del castillo y espiar' class='story-button-img'>",
        "type": "si",
        "nextChapter": "espiar"
      }
    ]
  },
 // ------------------------------------------------------------------ pagina 5-6 Principe camino Izquierdo  y derecho ---------------------------------------------------------------- 
"camino_izquierdo": {
    "title": "Has elegido el Camino Izquierdo",
    "image": "<img src='imagenes/principe_guardias.jpg' alt='Príncipe enfrentando guardias' class='story-image'>",
    "leftcontent": "¡Qué valiente! Decides ir directamente hacia los guardias.<br><br>Con tu espada en alto, caminas con valor hacia la entrada principal del castillo.",
    "rightcontent": "Los guardias levantan sus armas, pero gritas: ¡Solo quiero hablar con vuestro líder!<br><br>Desafias al Capitan a un duelo justo.Tras una intensa lucha, lo derrotas con honor.<br><br>Tu valentía rompe el hechizo del Mago Sombra que los controlaba.<br><br>¡Ahora son tus aliados! Te ayudarán a rescatar la Corona de la Risa.",
    "choices": [
      {
        "text": "Entrar todos juntos por la puerta principal",
        "image": "<img src='imagenes/entrada_principal.jpg' alt='entrada principal del castillo' class='story-button-img'>",
        "type": "si",
        "nextChapter": "entrada_principal_con_guardias"
      },
      {
        "text": "Pedir al Capitán que me guíe por un pasaje secreto",
        "image": "<img src='imagenes/pasaje_secreto.jpg' alt='pasaje secreto del castillo' class='story-button-img'>",
        "type": "si",
        "nextChapter": "pasaje_secreto_con_guardias"
      }
    ]
  },
// ------------------------------------------------------------------ pagina 9-10 Principe encuentras cueva  -------
  "camino_derecho": {
    "title": "Has elegido el Camino Derecho",
    "image": "<img src='imagenes/principe_cueva.jpg' alt='Príncipe explorando el bosque' class='story-image'>",
    "leftcontent": "¡Qué inteligente! Decides tomar el camino más largo y seguro.<br><br>Encuentras una cueva oculta entre las rocas y decides entrar a explorar.",
    "rightcontent": "Entras con cuidado en la cueva misteriosa.<br><br>De repente aparecen ratones de todas partes y empiezan a hacerte cosquillas.<br><br>¡No puedes parar de reír! Es muy extraño,<br><br>Entre las risas, notas que alguien más está en la cueva.",
    "choices": [
      {
        "text": "Investigar las sombras",
        "image": "<img src='imagenes/investigar_sombras.jpg' alt='investigando las sombras misteriosas' class='story-button-img'>",
        "type": "si",
        "nextChapter": "investigar_sombras"
      },
      {
        "text": "Intentar salir de la cueva corriendo",
        "image": "<img src='imagenes/principe_salir_cueva.jpg' alt='saliendo corriendo de la cueva hacia el tunel' class='story-button-img'>",
        "type": "si",
        "nextChapter": "principe_salir_corriendo"
      }
    ]
  },

// ------------------------------------------------------------------ pagina 5 Princesa cueva  -------
"la_cueva": {
    "title": "Has elegido las Cuevas",
    "image": "<img src='imagenes/Princesa_interio_cueva.webp' alt='Princesa entrando a la cueva' class='story-image'>",
    "leftcontent": "¡Qué lista! Conoces muy bien estas cuevas<br><br>Entras con seguridad por el túnel que conecta con los sótanos del castillo.",
    "rightcontent": "Avanzas por el túnel, y ves una piedra y sonries de alegria, cuando de repente...<br><br>¡Te pegas un peo sin saber por qué! ¡Qué extraño!<br><br>Escuchas una carcajada, ruidos raros y pasos corriendo destras tuyo. Decides cojer la piedra que es una turmalina negra.<br><br> ¿Que quieres hacer?",
    "choices": [
      {
        "text": "Continuar hacia el castillo",
        "image": "<img src='imagenes/princesa_continuar_castillo.webp' alt='túnel con mal olor' class='story-button-img'>",
        "type": "si",
        "nextChapter": "tunel_castillo"
      },
      {
        "text": "Investigar los ruidos raros",
        "image": "<img src='imagenes/princesa_investigar.webp' alt='túnel con brisa fresca' class='story-button-img'>",
        "type": "si",
        "nextChapter": "Investigar_ruido"
      }
    ]
  },
  // ------------------------------------------------------------------ pagina 5 brujo encuentra princesa -----
"buscar": {
    "title": "Has decidido ir a buscarlos",
    "image": "<img src='imagenes/brujo_buscando.webp' alt='Brujo buscando en el bosque' class='story-image'>",
    "leftcontent": "¡Qué travieso! Sales del castillo para encontrar al intruso.<br><br>Caminas por el bosque y ves a una princesa entrando en una cueva.",
    "rightcontent": " ¡Perfecto! mi oportunidad, piensas. Haces un hechizo travieso: <br><br>'Si alguien se ríe con gran alegría,<br>un peo se pegará en ese día.'<br><br>La princesa se pega un peo y tú te ríes... ¡pero entonces TÚ empiezas a pegarte peos sin parar!<br><br>¡Tu propio hechizo se volvió contra ti!",
    "choices": [
      {
        "text": "Salir corriendo antes de que me vea",
        "image": "<img src='imagenes/brujo_avergonzado.webp' alt='corriendo avergonzado' class='story-button-img'>",
        "type": "si",
        "nextChapter": "correr_avergonzado"
      },
      {
        "text": "Esconderme detrás de una roca y esperar",
        "image": "<img src='imagenes/brujo_esconderse_roca.webp' alt='escondiéndose detrás de una roca' class='story-button-img'>",
        "type": "si",
        "nextChapter": "esconderse_roca"
      }
    ]
  },

 "vigilar": {
    "title": "Has decidido quedarte vigilando",
    "image": "<img src='imagenes/brujo_ve_princesa_arbol.webp' alt='Brujo vigilando desde la torre' class='story-image'>",
    "leftcontent": "¡Qué inteligente! Te quedas en la torre del castillo para vigilar.<br><br>Desde tu posición privilegiada puedes ver todo lo que sucede alrededor del castillo.",
    "rightcontent": "Mientras realizas tu vigilancia habitual, algo capta tu atención.<br><br>Es la princesa, agazapada entre las hojas, observando tu castillo con atención.<br><br>'Así que la cazadora se convierte en la cazada,' piensas con ironía.<br><br>¿Qué decides hacer con tu pequeña observadora?",
    "choices": [
      {
        "text": "Hacerle una Travesura",
        "image": "<img src='imagenes/brujo_travesura_ramas.jpg' alt='brujo moviendo más ramas' class='story-button-img'>",
        "type": "si",
        "nextChapter": "travesura_ramas"
      },
      {
        "text": "Esperar a ver qué hace",
        "image": "<img src='imagenes/brujo_observando_pacientemente.jpg' alt='brujo observando con paciencia' class='story-button-img'>",
        "type": "si",
        "nextChapter": "observar_princesa"
      }
    ]
  },


 // ----------------------------------------------- pagina 7-8 bruja (trampas y espiar)------------

"espiar": {
    "title": "Has decidido salir a espiar",
    "image": "<img src='imagenes/bruja_cueva.jpg' alt='Bruja entra en la cueva del bosque' class='story-image'>",
    "leftcontent": "¡Qué astuta! Sales del castillo para espiar y preparar travesuras.<br><br>Llegas a las cuevas del bosque y decides entrar para explorar.",
    "rightcontent": "¡Sorpresa! Dentro de la cueva ves al príncipe caminando.<br><br>Susurras tu hechizo a los ratones:<br><br>'Ratones, venid acá,<br>cosquillas vais a dar'<br><br>¡Pero los animales les hacen cosquillas a los DOS! Tú y el príncipe no podeis parar de reír.",
    "choices": [
      {
        "text": "Quedarme riendome",
        "image": "<img src='imagenes/bruja_riendo.jpg' alt='estas riendote con los ratones' class='story-button-img'>",
        "type": "si",
        "nextChapter": "quedarme_riendo"
      },
      {
        "text": "Salir de la cueva",
        "image": "<img src='imagenes/bruja_corriendo.jpg' alt='saliendo corriendo de la cueva' class='story-button-img'>",
        "type": "si",
        "nextChapter": "salir_cueva"
      }
    ]
  },

// ----------------------------------------------- pagina 9-10 bruja y principe (reir y salir cueva)------------

"quedarme_riendo": {
    "title": "Has decidido quedarte riéndote",
    "image": "<img src='imagenes/reconciliacion_cueva.jpg' alt='Bruja y príncipe riéndose con los animales en la cueva' class='story-image'>",
    "leftcontent": "¡Qué divertido! Decides quedarte en la cueva riéndote con los animalitos.<br><br>El príncipe camina hacia ti y ambos no podeis parar de reír.",
    "rightcontent": "Entre risas, el príncipe te mira y dice: ¡Esto me recuerda a cuando éramos pequeños!<br><br>Tú también lo recuerdas: ¡Siempre jugábamos con los animales del bosque!<br><br>Los dos sonríen recordando los buenos tiempos.<br><br>Juntos deciden ir a recuperar la Corona de la Risa.",
    "choices": [
      {
        "text": "Ir juntos al castillo",
        "image": "<img src='imagenes/ir_juntos_castillo.jpg' alt='yendo juntos al castillo' class='story-button-img'>",
        "type": "si",
        "nextChapter": "final_unidos"
      }
    ]
  },
// ----------------------------------------------- pagina 11-12 bruja y principe (reir y salir cueva)--
  "investigar_sombras": {
    "title": "La sombra misteriosa",
    "image": "<img src='imagenes/reconciliacion_cueva.jpg' alt='Príncipe y bruja riéndose con los animales en la cueva' class='story-image'>",
    "leftcontent": "¡Qué curioso! Decides acercarte a las sombras que se mueven.<br><br>Caminas con cuidado y descubres que es la bruja.",
    "rightcontent": "La bruja te ve y se sorprende. Los ratones siguen haciendo cosquillas a los dos.<br><br>Entre risas, la miras y dices: ¡Esto me recuerda a cuando éramos pequeños!<br><br>La bruja te mira sorprendida: ¡Siempre jugábamos con los animales del bosque!<br><br>Juntos deciden ir a recuperar la Corona de la Risa.",
    "choices": [
      {
        "text": "Proponer ir juntos al castillo",
        "image": "<img src='imagenes/ir_juntos_castillo.jpg' alt='yendo juntos al castillo' class='story-button-img'>",
        "type": "si",
        "nextChapter": "final_unidos"
      }
    ]
  },
// ----------------------------------------------- pagina 11-12 Principe (Intenta salir de la cueva))--
"principe_salir_corriendo": {
  "title": "¡Huyendo sin mirar atrás!",
  "image": "<img src='imagenes/principe_salir_cueva.jpg' alt='Príncipe corriendo hacia la salida de la cueva' class='story-image'>",
  "leftcontent": "¡Decides huir de la cueva!. Corres por el túnel oscuro sin mirar atrás.<br><br>Mientras corres por el túnel, algo brillante en el suelo llama tu atención.",
  "rightcontent": "Es una hermosa piedra dorada con rayas marrones, es un ojo de tigre. Al cogerlo los ratones dejan de hacerte cosquillas<br><br>Sigues corriendo por los túneles hasta que llegas a los sótanos del castillo y escuchas pasos.<br><br>Es la bruja camina despacio, mirando a su alrededor. Susurra '¿Dónde estará?'",
  "choices": [
    {
      "text": "Salir valientemente al encuentro",
      "image": "<img src='imagenes/principeybruja_sotano.jpg' alt='saliendo valientemente para hablar con la bruja' class='story-button-img'>",
      "type": "si",
      "nextChapter": "salir_al_encuentro"
    },
    {
      "text": "Esconderte y observando",
      "image": "<img src='imagenes/seguir_escondido.jpg' alt='manteniéndose escondido' class='story-button-img'>",
      "type": "si",
      "nextChapter": "observar_bruja"
    }
  ]
},

//--------------------------------------pag-13-14 Principe (Si sale valientemente)
"salir_al_encuentro": {
  "title": "Valentía en la oscuridad",
  "image": "<img src='imagenes/enfrentar_sotanos.jpg' alt='Príncipe saliendo valientemente con el ojo de tigre brillando' class='story-image'>",
  "leftcontent": "¡Sales valientemente de las sombras!.<br><br>'Hola', dices suavemente. La bruja se voltea sorprendida y retrocede asustada.",
  "rightcontent": "'Lo siento mucho', dice la bruja. 'El Mago Sombra me dijo cosas horribles sobre ti, y yo... yo le creí'.<br><br>'Éramos tan buenos amigos', susurra la bruja 'Podemos serlo otra vez'. Si tú me perdonas.'<br><br>Vuelven a tu memoria los buenos momentos, hasta que el Mago Sombra sembró dudas entre ustedes y los alejó.",
  "choices": [
    {
      "text": "Perdonarla y luchar juntos",
      "image": "<img src='imagenes/enfrentar_pasado.jpg' alt='enfrentando el pasado doloroso' class='story-button-img'>",
      "type": "si",
      "nextChapter": "perdonar_luchar_juntos"
    },
    {
      "text": "Darle la espalda y seguir tu camino solo",
      "image": "<img src='imagenes/principe_seguir_solo.webp' alt='dándole la espalda y siguiendo solo' class='story-button-img'>",
      "type": "si",
      "nextChapter": "camino_solitario"
    }
  ]
},








  // ----------------------------------------------- pagina  bruja y principe (1 Final todos amigos)------------
  
"final_unidos": {
    "title": "Juntos al castillo",
    "image": "<img src='imagenes/principeybrujaluchando.webp' alt='Príncipe y bruja luchando contra el brujo' class='story-image'>",
    "leftcontent": "¡Qué gran equipo! Camináis juntos hacia el castillo del Mago Sombra.<br><br>La bruja conoce un pasadizo secreto para entrar sin ser vistos.",
    "rightcontent": "Llegáis hasta la torre donde está el Mago Sombra.<br><br>Mientra el principe lucha, la bruja susurra un hechizo.<br>'Mago perdido, deja el dolor,<br>encuentra en nosotros el amor'.<br><br>El Mago Sombra recuerda que una vez fue feliz. Se convierte en el Mago de la Alegría y os ayuda a devolver la corona. ¡El reino vuelve a ser feliz!",
    "choices": [
      {
        "text": "Celebrar la victoria y ser héroes para siempre",
        "image": "<img src='imagenes/principeybrujaluchando.webp' alt='Todos juntos contentos' class='story-button-img'>",
        "type": "si",
        "nextChapter": "epilogo_heroes"
      }
    ]
  },
  // -- (1 Reflexion final)--
  "epilogo_heroes": {
    "title": "¡Fin de la aventura!",
    "image": "<img src='imagenes/celebracion_final.jpg' alt='Todos celebrando juntos en el reino' class='story-image'>",
    "leftcontent": "¡Felicidades! Has completado tu aventura.<br><br>¿Viste que el Mago Sombra estaba triste y por eso no quería que nadie fuera feliz? ",
    "rightcontent": "El Mago Sombra aprendió que la amistad cura la tristeza.<br><br>A veces perdemos amigos por la influencia que otra persona o por malentendidos.<br><br> pero recordar los buenos momentos puede recuperar las amistades verdaderas.",
    "choices": [
      {
        "text": "Empezar una nueva aventura",
        "image": "<img src='imagenes/si.webp' alt='comenzar otra aventura' class='story-button-img'>",
        "type": "si",
        "nextChapter": "start"
      },
      {
        "text": "Salir del libro",
        "image": "<img src='imagenes/elreinodelarisa.jpg' alt='cerrar el libro' class='story-button-img'>",
        "type": "no",
        "nextChapter": "leave"
      }
    ]
  },

  // ----------------------------------------------- pagina 15-16 bruja y principe (2 Juntos los dos)------
  "perdonar_luchar_juntos": {
  "title": "El Poder de la Amistad",
  "image": "<img src='imagenes/batalla_sotano.jpg' alt='Príncipe y bruja luchando contra el Mago Sombra en el sótano' class='story-image'>",
  "leftcontent": "¡Qué generoso corazón! Decides perdonar a tu antigua amiga.<br><br>De repente, el Mago Sombra aparece gritando: '¡Malditos entrometidos!.",
  "rightcontent": "El Mago lanzando rayos oscuros. '¡Destruiré vuestra amistad para siempre!'<br><br>El Príncipe bloquea los ataques: '¡Juntos somos más fuertes!'<br><br>La Bruja lanza su hechizo: <br>'Amigos unidos, fuerza tendrán,<br>juntos el mal vencerán'.<br><br>¡El poder de su amistad derrota al Mago y recuperan la Corona!",
  "choices": [
    {
      "text": "Celebrar la victoria juntos",
      "image": "<img src='imagenes/victoria_amistad.jpg' alt='celebrando la victoria de la amistad' class='story-button-img'>",
      "type": "si",
      "nextChapter": "epilogo_principe_bruja"
    }
  ]
},
 // -- (2 Reflexion final)--
"epilogo_principe_bruja": {
  "title": "¡Fin de vuestra aventura!",
  "image": "<img src='imagenes/reconciliacion_final.jpg' alt='Príncipe y bruja celebrando su amistad recuperada' class='story-image'>",
  "leftcontent": "¡Felicidades! Has completado tu aventura.<br><br>¿Viste cómo el Mago Sombra intentó separaros con mentiras y dudas?",
  "rightcontent": "Pero vuestra amistad es más fuerte.<br><br>A veces hay personas que se sienten tan mal consigo mismas que rompen la amistad de otros.<br><br>Piensan que si ellos no pueden tener amigos, nadie debería tenerlos.<br><br>Pero la amistad verdadera incluye a todos y puede sanar hasta los corazones más heridos.",
  "choices": [
    {
      "text": "Empezar una nueva aventura",
      "image": "<img src='imagenes/si.webp' alt='comenzar otra aventura' class='story-button-img'>",
      "type": "si",
      "nextChapter": "start"
    },
    {
      "text": "Salir del libro",
      "image": "<img src='imagenes/elreinodelarisa.jpg' alt='cerrar el libro' class='story-button-img'>",
      "type": "no",
      "nextChapter": "leave"
    }
  ]
},
  // -----------------------------------------------Fin 3 solo Princie pagina 15-16 (no perdonar)--
  "camino_solitario": {
  "title": "El Camino en Soledad",
  "image": "<img src='imagenes/principe_solo_torre.jpg' alt='Príncipe caminando solo por los pasillos del castillo' class='story-image'>",
  "leftcontent": "¡Qué difícil decisión! No estás preparado para perdonar todavía.<br><br>Caminas solo por los pasillos oscuros del castillo, buscando la Corona de la Risa.",
  "rightcontent": "La bruja está con el Mago Sombra, te atacan con hechizos poderosos.<br><br>El ojo de tigre te protege de todos sus ataques mágicos, ayudándote a ganar.<br><br>Recuperas la Corona de la Risa, pero ver a tu amiga como enemiga te duele mucho.<br><br>Has salvado el reino, pero perdiste algo muy importante.",
  "choices": [
    {
      "text": "Reflexionar sobre lo que pasó",
      "image": "<img src='imagenes/principe_reflexionando.jpg' alt='príncipe reflexionando sobre su decisión' class='story-button-img'>",
      "type": "si",
      "nextChapter": "epilogo_camino_solitario"
    }
  ]
},
 // -- (3 Reflexion final)--
"epilogo_camino_solitario": {
  "title": "¡Fin de tu aventura!",
  "image": "<img src='imagenes/reflexion_soledad.jpg' alt='Príncipe reflexionando sobre su decisión' class='story-image'>",
  "leftcontent": "¡Felicidades! Has completado tu aventura.<br><br>¿Viste que a veces es muy difícil perdonar cuando alguien nos ha hecho mucho daño?",
  "rightcontent": "Hay traiciones que duelen tanto que necesitamos tiempo para sanar.<br><br>Pero cuando no perdonamos, a veces perdemos cosas importantes también.<br><br>Cada persona necesita su propio tiempo para decidir cuándo está lista para perdonar.<br><br>No pasa nada si no estás preparado para perdonar todavía.",
  "choices": [
    {
      "text": "Empezar una nueva aventura",
      "image": "<img src='imagenes/si.webp' alt='comenzar otra aventura' class='story-button-img'>",
      "type": "si",
      "nextChapter": "start"
    },
    {
      "text": "Salir del libro",
      "image": "<img src='imagenes/elreinodelarisa.jpg' alt='cerrar el libro' class='story-button-img'>",
      "type": "no",
      "nextChapter": "leave"
    }
  ]
}






};

// Variables globales
let currentChapter = 'start';
let pageCounter = 1;

// Función para obtener el tipo de botón CSS
function getButtonClass(type) {
  const classes = {
    'hero': 'choice-hero',
    'villain': 'choice-villain',
    'wise': 'choice-wise',
    'neutral': 'choice-neutral'
  };
  return classes[type] || 'choice-neutral';
}

// Función para dividir texto en dos páginas
function splitTextIntoPages(leftText, rightText) {
  return {
    leftPage: leftText || '',
    rightPage: rightText || ''
  };
}

// Función para escribir texto con efecto máquina de escribir
function typeWriterEffect(element, text, speed = 50) {
  return new Promise((resolve) => {
    element.innerHTML = '';
    element.classList.add('typewriter');

    let i = 0;
    const isHTML = text.includes('<');

    function typeChar() {
      if (i < text.length) {
        if (isHTML && text[i] === '<') {
          // Si encontramos una etiqueta HTML, la agregamos completa de una vez
          const tagEnd = text.indexOf('>', i);
          if (tagEnd !== -1) {
            element.innerHTML += text.substring(i, tagEnd + 1);
            i = tagEnd + 1;
          } else {
            element.innerHTML += text[i];
            i++;
          }
        } else {
          element.innerHTML += text[i];
          i++;
        }

        // Hacer scroll automático si es necesario
        element.scrollTop = element.scrollHeight;

        setTimeout(typeChar, speed);
      } else {
        element.classList.remove('typewriter');
        element.classList.add('typing-complete');
        resolve();
      }
    }

    typeChar();
  });
}

// Función para borrar texto con efecto de borrado
function eraseText(element, speed = 20) {
  return new Promise((resolve) => {
    const textContent = element.textContent;
    let i = textContent.length;

    element.classList.add('typewriter');

    function eraseChar() {
      if (i > 0) {
        // Para borrado, trabajamos solo con texto plano
        element.textContent = textContent.substring(0, i - 1);
        i--;
        setTimeout(eraseChar, speed);
      } else {
        element.innerHTML = '';
        element.classList.remove('typewriter');
        resolve();
      }
    }

    eraseChar();
  });
}

// Función para borrar texto instantáneamente
function clearText(element) {
  element.innerHTML = '';
  element.classList.remove('typewriter', 'typing-complete');
}

// Función para cambiar imagen con transición suave
function changeImageSmoothly(newImage, newBackground) {
  const illustrationArea = document.getElementById('illustrationArea');
  // Fade out
  setTimeout(() => {
    illustrationArea.innerHTML = newImage;
    if (newBackground) {
      illustrationArea.style.background = newBackground;
    }
  }, 300);
}

// Función para mostrar opciones con animación
function showChoicesWithAnimation(choices) {
  const choicesContainer = document.getElementById('choicesContainer');
  choicesContainer.innerHTML = '';
  choicesContainer.classList.add('choices-hidden');

  choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = `choice-btn ${getButtonClass(choice.type)}`;
    button.innerHTML = choice.image ? choice.image + choice.text : choice.text;
    button.onclick = () => makeChoice(choice.nextChapter);
    choicesContainer.appendChild(button);
  });

  // Mostrar opciones después de un pequeño delay
  setTimeout(() => {
    choicesContainer.classList.remove('choices-hidden');
    choicesContainer.classList.add('choices-visible');
  }, 800);
}

// Función principal para cargar un capítulo
async function loadChapter(chapterKey) {

   if (chapterKey === 'leave') {
    window.location.href = "../index.html";
    return;
  }

  const chapter = storyDatabase[chapterKey]; 

  if (!chapter) {
    console.error('Capítulo no encontrado:', chapterKey);
    return;
  }

  // Deshabilitar botones durante la transición
  const buttons = document.querySelectorAll('.choice-btn');
  buttons.forEach(btn => btn.disabled = true);

  // Ocultar opciones actuales suavemente
  document.getElementById('choicesContainer').classList.add('choices-hidden');

  // Borrar el texto instantáneamente
  const leftTextElement = document.getElementById('storyTextLeft');
  const rightTextElement = document.getElementById('storyTextRight');

  clearText(leftTextElement);
  clearText(rightTextElement);

  // Cambiar título suavemente
  const titleElement = document.getElementById('storyTitle');
  titleElement.style.opacity = '0';
  setTimeout(() => {
    titleElement.textContent = chapter.title;
    titleElement.style.opacity = '1';
  }, 200);

  // Cambiar imagen y fondo suavemente
  changeImageSmoothly(chapter.image, chapter.background);

  // Actualizar números de página
  document.getElementById('pageNumberLeft').textContent = pageCounter;
  document.getElementById('pageNumberRight').textContent = pageCounter + 1;

  // Esperar un momento antes de escribir el nuevo texto
  await new Promise(resolve => setTimeout(resolve, 600));

  // Dividir el contenido en dos páginas
  const { leftPage, rightPage } = splitTextIntoPages(chapter.leftcontent, chapter.rightcontent);

  // Escribir el texto de la página izquierda primero
  await typeWriterEffect(leftTextElement, leftPage, 35);

  // Pequeña pausa antes de escribir la página derecha
  await new Promise(resolve => setTimeout(resolve, 300));

  // Escribir el texto de la página derecha
  await typeWriterEffect(rightTextElement, rightPage, 35);

  // Mostrar opciones con animación después de que termine de escribirse
  showChoicesWithAnimation(chapter.choices);

  pageCounter += 2; // Incrementamos de 2 en 2 porque ahora usamos ambas páginas
}

// Función para hacer una elección
function makeChoice(nextChapter) {
  if (nextChapter === "reload") {
    location.reload();
    return;
  }
  if (nextChapter === "continuar") {
    loadChapter(currentChapter);
    return;
  }
  currentChapter = nextChapter;
  loadChapter(currentChapter);
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function () {
  loadChapter('principe');
});
