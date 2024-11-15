const navBar = document.querySelector(".nav-bar")
const menuBar = document.getElementById("menu-bar")

menuBar.addEventListener("click" , () => {
    navBar.classList.toggle("visible")
})

navBar.addEventListener("click", () => {
    navBar.classList.remove("visible")
})