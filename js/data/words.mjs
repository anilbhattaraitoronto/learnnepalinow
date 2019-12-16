import { Lesson } from '/js/lessonClass.mjs'

//Words Lessons
export let nounLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Nouns are things, people's proper names, place names, etc. You know what I mean. Practice, practice, practice. I cannot emphasize it enough."
);
nounLesson.getItem("noun-box")
nounLesson.getDescription("noun-description")

export let pronounLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Pronouns are nouns that represent various nouns. Like I am Anil. My pronoun here is I. "
);
pronounLesson.getItem("pronoun-box")
pronounLesson.getDescription("pronoun-description")

export let verbLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Verbs are about action in the world. "
);
verbLesson.getItem("verb-box")
verbLesson.getDescription("verb-description")

export let adjectiveLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Adjectives add color to the world. Meaning, it represents the quality of objects/nouns."
);
adjectiveLesson.getItem("adjective-box")
adjectiveLesson.getDescription("adjective-description")

export let adverbLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Adverbs add quality to actions."

);
adverbLesson.getItem("adverb-box")
adverbLesson.getDescription("adverb-description")

export let conjunctionLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Conjunctions connect different things."
);
conjunctionLesson.getItem("conjunction-box")
conjunctionLesson.getDescription("conjunction-description")

export let prepositionLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Prepositions are about the placements."
);
prepositionLesson.getItem("preposition-box")
prepositionLesson.getDescription("preposition-description")