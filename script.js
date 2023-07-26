const welcomeText = document.getElementById("welcome-text");
const languages = ["Bienvenue", "Welcome", "歡迎", "Bienvenido", "Benvenuto"];

let currentLanguageIndex = 0;

function changeLanguage() {
    welcomeText.textContent = languages[currentLanguageIndex];
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
}

setInterval(changeLanguage, 2000);


  