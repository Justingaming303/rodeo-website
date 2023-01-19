var burgerBtn = document.getElementsByClassName("burger")[0];
var navBarContainer = document.getElementsByClassName("navbar-container")[0];
var closeNavBtn = document.getElementsByClassName("cross")[0];

burgerBtn.addEventListener("click", () => {
   
    navBarContainer.style.display = "block";
    let easeOutBurgerBtn = setInterval(() => {
        burgerBtn.style.opacity -= "20%"

        if (burgerBtn.style.opacity == "0%") {
            clearInterval(easeOutBurgerBtn)

        }

    },0.5)


})

