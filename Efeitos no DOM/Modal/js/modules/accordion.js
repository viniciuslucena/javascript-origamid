export default function initAccordion() {
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