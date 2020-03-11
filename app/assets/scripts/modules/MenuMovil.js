class MenuMovil {
    constructor() {
        this.iconoMenu = document.querySelector(".header-Roisoft__icono-menu")
        this.contenidoMenu = document.querySelector(".header-Roisoft__contenido-menu")
        this.headerSitio = document.querySelector(".header-Roisoft")
        this.events();
    }

    events() {
        this.iconoMenu.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu () {
        this.contenidoMenu.classList.toggle("header-Roisoft__contenido-menu--es-visible")
        this.headerSitio.classList.toggle("header-Roisoft--esta-abierto")
        this.iconoMenu.classList.toggle("header-Roisoft__icono-menu--cerrar-x")
    }
}

export default MenuMovil;