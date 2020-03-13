import '../styles/styles.css'
import MenuMovil from './modules/MenuMovil'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".experiencia-caso"), 60)

let menuMovil = new MenuMovil();

if (module.hot) {
    module.hot.accept()
}

