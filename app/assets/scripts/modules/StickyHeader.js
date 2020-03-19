import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".header-Roisoft")
        this.logoRoitsoft = document.querySelector(".logo")
        this.secciones = document.querySelectorAll(".seccion")
        this.browserHeight = window.innerHeight
        this.previousScrollY = window.scrollY
        this.events()
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
        window.addEventListener("resize", debounce(() => {
            this.browserheight = window.innerHeight
          }, 333))
    }
    runOnScroll() {
        this.determineScrollDirection()

        if (window.scrollY > 60) {
            this.siteHeader.classList.add("header-Roisoft--dark")
        } else {
            this.siteHeader.classList.remove("header-Roisoft--dark")
        }

        if (window.scrollY > 60) {
            this.logoRoitsoft.classList.add("logo--gone")
        } else {
            this.logoRoitsoft.classList.remove("logo--gone")
        }

        this.secciones.forEach(el => this.calcSeccion(el))
    }

    determineScrollDirection() {
        if(window.scrollY > this.previousScrollY) {
            this.scrollDirection = 'down'
        } else {
            this.scrollDirection = 'up'
        }
        this.previousScrollY = window.scrollY
    }

    calcSeccion(el) {
        if(window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
            let scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100
            if(scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') {
                let matchingLink = el.getAttribute("data-link-ancla")
                document.querySelectorAll(`.nav-primaria a:not(${matchingLink})`).forEach(el => el.classList.remove("es-link-actual"))
                document.querySelector(matchingLink).classList.add("es-link-actual")
            }
        }
    }
}

export default StickyHeader;