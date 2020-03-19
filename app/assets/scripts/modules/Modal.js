
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
                    <p class="modal__description">Teléfonos: <br>
                        <span>+52 1 55 3699 0004</span><br>
                        <span>+52 1 55 3699 2574</span>
                    </p>
                    <p class="modal__description">Correo electrónico: <br>
                        <a href="mailto:elcorreoquequieres@correo.com">ismael@roitsoft.com</a></p>
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