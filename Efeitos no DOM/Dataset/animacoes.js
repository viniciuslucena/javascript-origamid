function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((content) => {
                content.classList.remove('ativo')
            })
            const direcao = tabContent[index].dataset.anime
            tabContent[index].classList.add('ativo', direcao)
        }


        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                activeTab(index)
            })
        })
    }
}
initTabNav()

function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
    const activeClass = 'ativo'
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion(e) {
            e.currentTarget.classList.toggle(activeClass)
            e.currentTarget.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}
initAccordion()

function initSmoothScroll() {
    const linksInternos = document.querySelectorAll('[data-anime="menu"] a[href^="#"')

    function scrollToSection(e) {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}
initSmoothScroll()

function scrollAnimation() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const windowHalf = window.innerHeight * 0.6

    if (sections.length) {
        function animateScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowHalf) < 0
                if (isSectionVisible) {
                    section.classList.add('ativo')
                }
            })
        }
        animateScroll()

        window.addEventListener('scroll', animateScroll)
    }
}
scrollAnimation()
