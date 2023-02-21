function initTabNav() {

    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }

}
initTabNav();


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')

    if(accordionList.length) {
        accordionList[0].classList.add('ativo')
        accordionList[0].nextElementSibling.classList.add('ativo')
        
        function activeAccordion() {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }


}
initAccordion()



function initScroolSuave () {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')


    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })


    /*
        Forma alternativa
        const topo = section.offsetTop
        
        //window.scrollTo(0, topo)    Coordernada x, coordenada y
        window.scrollTo({   //Usa argumentos de objeto
            top: topo,
            behavior: 'smooth'
        })   
    */ 
    } 


    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}
initScroolSuave()



const sections = document.querySelectorAll('.js-scroll')

function animaScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().Top - 500 
        if(sectionTop < 0) {
            section.classList.add('ativo')
        }
        console.log(sectionTop)
    })
}

window.addEventListener('scroll', animaScroll)