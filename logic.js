const themeBtn = document.querySelector("#theme-toggle");
const modeLight = document.querySelector("#mode-light");
const modeDark = document.querySelector("#mode-dark");
const body = document.body;
const languageSelect = document.querySelector("#language-select");
let currentTheme = "dark";
let translations = {}; //creating an empty translations object 


themeBtn.addEventListener("click", ()=>{
    console.log("Button is being clicked")
    body.classList.toggle("dark-mode");
    

    if(currentTheme == "dark")
{
    //show light icon and switch background colors
    modeDark.style.display = "none";
    modeLight.style.display = "inline";
    currentTheme = "light"
}
else
{

        //show dark icon and switch background colors
        modeLight.style.display = "none";
        modeDark.style.display = "inline";
        currentTheme = "dark"

}

})
// fetching translations
function loadTranslations() {
    fetch("lang.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load translations");
            }
            return response.json(); // Converting  JSON  to JavaScript object
        })
        .then((data) => {
            translations = data;
            updateLanguage(languageSelect.value); // updating language
        })
        .catch((error) => console.error("Error loading translations:", error));
}

//  Updating  conetnt  based on selected language
function updateLanguage(lang) {
    document.querySelector("#nav-home").textContent = translations[lang].home;
    document.querySelector("#nav-products").textContent =
        translations[lang].products;
    document.querySelector("#nav-about").textContent = translations[lang].about;
    document.querySelector(".hero h2").textContent =
        translations[lang].welcomeMessage;
    document.querySelector(".hero p").textContent = translations[lang].shopNow;
    document.querySelector(".btn").textContent = translations[lang].shopNow;
    document.querySelector("footer p").textContent =
        translations[lang].footerText;
}

//  Updating lang with selected language
languageSelect.addEventListener("change", () => {
    updateLanguage(languageSelect.value);
});

// initialising  translations on page loading 
loadTranslations();