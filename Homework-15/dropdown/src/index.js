
//-------------------------------------------------------------------------------------------------
const dropdownButton = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const btn = document.querySelector('.btn');
//-------------------------------------------------------------------------------------------------
dropdownButton.addEventListener('click', toShowOptions);
dropdownMenu.addEventListener('click', toChooseOption);
document.addEventListener("click", toCloseMenu);
//-------------------------------------------------------------------------------------------------

function toShowOptions(){
    dropdownButton.classList.toggle("show");
    dropdownMenu.classList.toggle("show");
}
function toChooseOption(){
    btn.innerText = event.target.innerText;   
}
function toCloseMenu(){
    if(!event.target.matches("button")&& !event.target.matches("dropdown-menu")){
        dropdownMenu.classList.remove("show");
        
    }
}