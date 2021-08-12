const header = document.getElementById("main-header");

function scrollHeaderTop() {
    if(window.scrollY > 500) {
        header.classList.add("fixed-header")
    } else if(window.scrollY === 0){
        header.classList.remove("fixed-header")
    }
}
// document.addEventListener("scroll", scrollHeaderTop) otra forma de llamar el evento

document.onscroll = scrollHeaderTop; 
