
class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.openModalButtons = document.querySelectorAll(".open-modal")
        this.events()
    }

    events() {
        // escucha clic de apertura
        this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))
        // escucha clic de cierre
        this.closeIcon.addEventListener("click", () => this.closeTheModal())
        // presiona cualquier key
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal()
        }
    }

    openTheModal(e) {
        e.preventDefault()
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
            <div class="modal__inner">
                <div class="wrapper wrapper__corto">
                    <h2 class="modal__titulo-seccion titulo-seccion">Contáctenos</h2>
                </div>
                <div class="wrapper wrapper__corto">
                    <p class="modal__description">Teléfono: <br>
                        <span>+52 (55) 1692-7526</span>
                    </p>
                    <p class="modal__description">Correo electrónico: <br>
                        <a href="mailto:itecuapacho@roitsoft.com.mx">itecuapacho@roitsoft.com.mx</a><br>
                        <a href="mailto:ittexis@gmail.com">ittexis@gmail.com</a>
                    </p>
                    <p class="modal__description modal__description-aleft">Nos ubicamos en: <br>
                    Rodríguez Saro No. 100, Int. 102, Colonia Actípan,<br>
                    Delegación Benito Juárez,<br>
                    Código Postal 03230, Ciudad de México.
                    </p>
                </div>
                <div class="redes-sociales">
                    <a href="#" class="redes-sociales__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
                    <a href="#" class="redes-sociales__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
                    <a href="#" class="redes-sociales__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
                    <a href="#" class="redes-sociales__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
                </div>
            </div>
            <div class="modal__close"><img src="assets/images/ico-cerrar.svg" alt="Cerrar ventana de contacto"></div>
        </div>
        `)
    }
}

export default Modal