import { Lesson } from './js/lessonClass.mjs'

//Sentences Lessons

export let presentLesson = new Lesson(
    ["मेरो नाम अनिल हो।"],
    ["My name is Anil."],
    [""],
    ["picture"],
    "Nepali sentence is organized as (Subject Object Verb). I home go. म घर जान्छु।"
);
presentLesson.getItem("present-box")
presentLesson.getDescription("present-description")

export let pastLesson = new Lesson(
    ["मेरो नाम अनिल थियो।"],
    ["My name was Anil."],
    [""],
    ["picture"],
    "Past sentences describe things that happened in the past."
);
pastLesson.getItem("past-box")
pastLesson.getDescription("past-description")

export let futureLesson = new Lesson(
    ["मेरो नाम अनिल हुनेछ।"],
    ["My name will be Anil."],
    [""],
    ["picture"],
    "Future sentences describe things that will happen in future. Obviously, indeed."
);
futureLesson.getItem("future-box")
futureLesson.getDescription("future-description")