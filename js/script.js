const menue =document.getElementById("menue");
const actions =document.getElementById("actions");

menue.addEventListener("click", ()=>{
    hunMenue();

})
function hunMenue(){
    menue.classList.toggle("is-active");
        actions.classList.toggle("is-active");

}