export function switchSections(sectionClass, linkClass, activeLinkClass, index = 0) {
    let sections = document.querySelectorAll(sectionClass)
    let navLinks = document.querySelectorAll(linkClass)
    sections.forEach(section => {
        section.style.display = 'none'
    })
    navLinks.forEach(navLink => {
        navLink.classList.remove(activeLinkClass)
    })
    sections[index].style.display = 'block'
    navLinks[index].classList.add(activeLinkClass)
}
