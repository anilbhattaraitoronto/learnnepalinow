startLesson(0)
let startButton = document.querySelector("#start-button");
let lessonMasthead = document.querySelector("#lesson-masthead")

function startLesson(mainPageIndex = 0) {
    let mainPages = document.querySelectorAll('.main-pages')
    mainPages.forEach(mainPage => {
        mainPage.style.display = "none"
    })
    mainPages[mainPageIndex].style.display = "block"
    let animatedContainer = document.querySelector("#landing-animated-characters")
    animatedContainer.classList.toggle("animate-characters")
}
startButton.addEventListener('click', () => {
    startLesson(1)
})
lessonMasthead.addEventListener('click', () => {
    startLesson(0)
})
