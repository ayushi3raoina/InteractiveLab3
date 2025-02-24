const themeBtn = document.querySelector("#theme-toggle");
const modeLight = document.querySelector("#mode-light");
const modeDark = document.querySelector("#mode-dark");


let currentTheme = 'dark'

themeBtn.addEventListener("click", ()=>{
    console.log("Button is being clicked")
    body.classList.toggle("dark.mode");
    

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