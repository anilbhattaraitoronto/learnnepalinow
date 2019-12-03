// switchSections('.main-pages', '.main-link', '.active-main', 0);
// // startLesson(0)
// let startButton = document.querySelector("#start-button");


// function startLesson(mainPageIndex = 0) {
//     let mainPages = document.querySelectorAll('.main-pages')
//     mainPages.forEach(mainPage => {
//         mainPage.style.display = "none"
//     })
//     mainPages[mainPageIndex].style.display = "block"

// }
// // startButton.addEventListener('click', () => {
// //     startLesson(1)
// // })
// // lessonMasthead.addEventListener('click', () => {
// //     startLesson(0)
// // })

// function switchSections(sectionClass, linkClass, activeClass, index) {
//     let sections = document.querySelectorAll(sectionClass)
//     let links = document.querySelectorAll(linkClass)
//     links.forEach(link => {
//         link.classList.remove(activeClass)
//         //what to replace = activeClass, what to replace with = ' '
//     })
//     sections.forEach(section => {
//         section.style.display = 'none';
//     })
//     sections[index].style.display = 'block';
//     links[index].classList.add(activeClass)
// }
// startButton.addEventListener('click', () => {
//     switchSections('.main-pages', '.main-link', 'active-main', 1)
//     let animatedContainer = document.querySelector("#landing-animated-characters")
//     animatedContainer.classList.toggle("animate-characters")
// })
// lessonMasthead.addEventListener('click', () => {
//     switchSections('.main-pages', '.main-link', 'active-main', 0)
//     let animatedContainer = document.querySelector("#landing-animated-characters")
//     animatedContainer.classList.toggle("animate-characters")
// })


startApp()


let startButton = document.getElementById('start-button')
let lessonMasthead = document.querySelector(".masthead")


function switchSections(sectionClass, linkClass, activeLinkClass, index = 0) {
    let sections = document.querySelectorAll(sectionClass)
    let navLinks = document.querySelectorAll(linkClass)
    sections.forEach(section => {
        section.style.display = 'none'
    })
    navLinks.forEach(navLink => {
        navLink.className = navLink.className.replace(activeLinkClass, ' ');
        //what to replace = activeClass, what to replace with = ' '
    })
    sections[index].style.display = 'block'
    navLinks[index].clasName += activeLinkClass
}

function startApp() {
    switchSections('.main-pages', '.main-link', ' active-main-link', 0)
    let animatedContainer = document.querySelector("#landing-animated-characters")
    animatedContainer.classList.toggle("animate-characters")
}

startButton.addEventListener('click', () => {
    switchSections('.main-pages', '.main-link', ' active-main-link', 1)
    let animatedContainer = document.querySelector("#landing-animated-characters")
    animatedContainer.classList.toggle("animate-characters")
})
lessonMasthead.addEventListener('click', () => {
    switchSections('.main-pages', '.main-link', ' active-main-link', 0)
    let animatedContainer = document.querySelector("#landing-animated-characters")
    animatedContainer.classList.toggle("animate-characters")
})