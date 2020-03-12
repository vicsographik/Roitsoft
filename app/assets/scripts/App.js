import '../styles/styles.css'
import MenuMovil from './modules/MenuMovil'
import RevealOnScroll from './modules/RevealOnScroll'

let revealOnScroll = new RevealOnScroll();

let menuMovil = new MenuMovil();

if (module.hot) {
    module.hot.accept()
}

