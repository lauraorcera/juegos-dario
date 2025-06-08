const translations = {
  es: {
    cranio: "Cráneo",
    costillas: "Costillas",
    columna: "Columna Vertebral",
    humero: "Humero",
    radio: "Radio y Cubito",
    femur: "Femur"
  },
  en: {
    cranio: "Skull",
    costillas: "Ribs",
    columna: "backbone",
    humero: "humerus",
    radio: "Radius and Ulna",
    femur: "Femur"
  }
};

const buttonLangEs = document.getElementById("lang-es");
const buttonLangEn = document.getElementById("lang-en");

buttonLangEs.addEventListener("click",() => {
    changeLanguage('es');
}) 

buttonLangEn.addEventListener("click",() => {
    changeLanguage('en');
})

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Opcional: cambiar el atributo lang del <html>
  document.documentElement.lang = lang;
}

// Idioma por defecto
changeLanguage("es");