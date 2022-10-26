const btn = document.querySelectorAll(".btn-arrow");
const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-container");
const close = document.querySelector(".close");
const body = document.querySelector("body");

btn.forEach(function(item){

    item.addEventListener("click", function() {
        console.log(item);
        let dropDownList = item.querySelector(".features-container");
        dropDownList.classList.toggle("none-dropdownlist");
    });
});

menu.addEventListener("click", () => {  
    menuContainer.style.display = 'block';
    body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))';

});

close.addEventListener("click", () => {  
    menuContainer.style.display = 'none';
    body.style.background = 'linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))';
    body.style.backgroundColor = "white";
});