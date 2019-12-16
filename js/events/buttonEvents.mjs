export function buttonEvents(prevId, nextId, lesson, lessonBoxId) {
    let prevButton = document.getElementById(prevId)
    prevButton.addEventListener("click", function () {
        lesson.getPreviousItem(lessonBoxId)
    })
    let nextButton = document.getElementById(nextId)
    nextButton.addEventListener("click", function () {
        lesson.getNextItem(lessonBoxId)
    })
}