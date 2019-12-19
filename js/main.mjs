import { switchSections } from '/js/switchSections.mjs'
//import lesson data and associated function created through construction function Lesson in lessonClass.mjs
import { vowelLesson, syllableLesson, compoundLesson } from '/js/data/letters.mjs'
import { nounLesson, pronounLesson, verbLesson, adjectiveLesson, adverbLesson, conjunctionLesson, prepositionLesson } from '/js/data/words.mjs'
import { presentLesson, pastLesson, futureLesson } from '/js/data/sentences.mjs'
import { beginnerReadings, intermediateReadings, advancedReadings, nativeReadings } from '/js/data/readings.mjs'

import { buttonEvents } from '/js/events/buttonEvents.mjs'
import { mainNavEvents } from '/js/events/mainNavEvents.mjs'

loadApp('start-button', 'landing-masthead', 'landing-animated-characters', 'animate-characters')


function loadApp(startId, mastheadId, animationId, animateClass) {
    let startButton = document.getElementById(startId)
    let lessonMasthead = document.getElementById(mastheadId)
    let animatedContainer = document.getElementById(animationId)
    animatedContainer.classList.toggle(animateClass)
    switchSections('.main-pages', '.main-link', 'active-main-link', 0)
    switchSections('.levels', '.level-link', 'active-level', 0)
    switchSections('.beginner-lesson', '.beginner-lesson-link', 'active-lesson', 0)
    switchSections('.intermediate-lesson', '.intermediate-lesson-link', 'active-lesson', 0)
    switchSections('.advanced-lesson', '.advanced-lesson-link', 'active-lesson', 0)
    switchSections('.about-section', '.about-section-link', 'active-lesson', 0)

    startButton.addEventListener('click', () => {
        switchSections('.main-pages', '.main-link', 'active-main-link', 1)
        animatedContainer.classList.toggle(animateClass)
    })
    lessonMasthead.addEventListener('click', () => {
        switchSections('.main-pages', '.main-link', 'active-main-link', 0)
        animatedContainer.classList.toggle(animateClass)
    })

    //EVENTS HANDLING

    //navigating main pages and sections
    mainNavEvents('mainNav', '.levels', '.level-link')
    mainNavEvents('beginnerLevelNav', '.beginner-lesson', '.beginner-lesson-link')
    mainNavEvents('intermediateLevelNav', '.intermediate-lesson', '.intermediate-lesson-link')
    mainNavEvents('advancedLevelNav', '.advanced-lesson', '.advanced-lesson-link')
    mainNavEvents('readingsNav', '.about-section', '.about-section-link')

    //getting next and previous items from the lesson boxes
    //Letter Lessons button events
    buttonEvents('prevVowel', 'nextVowel', vowelLesson, 'vowel-box')
    buttonEvents('prevSyllable', 'nextSyllable', syllableLesson, 'syllable-box')
    buttonEvents('prevCompound', 'nextCompound', compoundLesson, 'compound-box')

    //Word Lessons button events
    buttonEvents('prevNoun', 'nextNoun', nounLesson, 'noun-box')
    buttonEvents('prevPronoun', 'nextPronoun', pronounLesson, 'pronoun-box')
    buttonEvents('prevVerb', 'nextVerb', verbLesson, 'verb-box')
    buttonEvents('prevAdjective', 'nextAdjective', adjectiveLesson, 'adjective-box')
    buttonEvents('prevAdverb', 'nextAdverb', adverbLesson, 'adverb-box')
    buttonEvents('prevConjunction', 'nextConjunction', conjunctionLesson, 'conjunction-box')
    buttonEvents('prevPreposition', 'nextPreposition', prepositionLesson, 'preposition-box')

    //Sentence Lessons button events
    buttonEvents('prevPresent', 'nextPresent', presentLesson, 'present-box')
    buttonEvents('prevPast', 'nextPast', pastLesson, 'past-box')
    buttonEvents('prevFuture', 'nextFuture', futureLesson, 'future-box')

    //Reading Lessons button events
    buttonEvents('prevBeginner', 'nextBeginner', beginnerReadings, 'beginner-box')
    buttonEvents('prevIntermediate', 'nextIntermediate', intermediateReadings, 'intermediate-box')
    buttonEvents('prevAdvanced', 'nextAdvanced', advancedReadings, 'advanced-box')
    buttonEvents('prevNative', 'nextNative', nativeReadings, 'native-box')
}









