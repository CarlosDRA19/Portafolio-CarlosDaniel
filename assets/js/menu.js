const resposiveMenu = document.getElementById("responsive-menu");
const menu = document.getElementById("main-menu")

let flag = false;

const toggleMenu = () => {
    if (flag) {
        menu.style.transform = "scaleY(0)";
    } else {
        menu.style.transform = "scaleY(1)";
    }
    flag = !flag;
};

resposiveMenu.onclick = toggleMenu;
