import { switchSections } from '/js/switchSections.mjs'
//Section Switch Events

export function mainNavEvents(id, sectionClass, linkClass) {
    if (id === 'mainNav') {
        var activeLinkClass = 'active-level'
    }
    else {
        var activeLinkClass = 'active-lesson'
    }
    let navItem = document.getElementById(id)

    navItem.addEventListener('click', function (event) {
        if (event.target.parentElement === navItem) {
            let links = document.querySelectorAll(linkClass)
            let targetItem = event.target
            let index = Array.from(links).indexOf(targetItem)
            switchSections(sectionClass, linkClass, activeLinkClass, index)
        }
    })

}