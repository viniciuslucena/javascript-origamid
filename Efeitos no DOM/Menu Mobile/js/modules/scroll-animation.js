export default function scrollAnimation() {
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