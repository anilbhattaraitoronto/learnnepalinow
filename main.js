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
    switchSections('.levels', '.level-link', ' active-level', 0);
    switchSections('.beginner-lesson', '.beginner-lesson-link', ' active-lesson', 0);
    switchSections('.intermediate-lesson', '.intermediate-lesson-link', ' active-lesson', 0);
    switchSections('.advanced-lesson', '.advanced-lesson-link', ' active-lesson', 0);
    switchSections('.about-section', '.about-section-link', ' active-lesson', 0);
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

function Lesson(nepali, english, sound, picture, description) {
    this.nepali = nepali
    this.english = english
    this.sound = sound
    this.picture = picture
    this.description = description
    this.itemIndex = 0;

    this.getItem = function (id) {
        let itemBox = document.getElementById(id);
        let item = `
        <div class="nepali">${this.nepali[this.itemIndex]}</div>
        <div class="english">${this.english[this.itemIndex]}</div>
        <audio controls class="sound">
        <source src="${this.sound[this.itemIndex]}" type="audio/ogg"/>
        </audio>
        <div class="picture">${this.picture[this.itemIndex]}</div>
        `
        itemBox.innerHTML = item;
    }
    this.getDescription = function (id) {
        let descriptionBox = document.getElementById(id);

        descriptionBox.innerHTML += `<p>${this.description}</p>`;
    }

    this.getNextItem = function (id) {
        this.itemIndex++;

        if (this.itemIndex === this.nepali.length) {
            this.itemIndex = 0;
        }
        this.getItem((id = id));
    };

    this.getPreviousItem = function (id) {
        this.itemIndex--;
        if (this.itemIndex < 0) {
            this.itemIndex = this.nepali.length - 1;
        }
        this.getItem((id = id));
    };
}


let vowelLesson = new Lesson(
    ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अ:"],
    ["a", "aa", "i", "ee", "u", "oo", "eh", "aih", "o", "au", "ahm", "aha"],
    ["./sounds/vowels/mp3/a.mp3", "./sounds/vowels/mp3/aa.mp3", "./sounds/vowels/mp3/i.mp3", "./sounds/vowels/mp3/ee.mp3", "./sounds/vowels/mp3/u.mp3", "./sounds/vowels/mp3/oo.mp3", "./sounds/vowels/mp3/eh.mp3", "./sounds/vowels/mp3/aih.mp3", "./sounds/vowels/mp3/o.mp3", "./sounds/vowels/mp3/au.mp3", "./sounds/vowels/mp3/ahm.mp3", "./sounds/vowels/mp3/aha.mp3"],
    ["a.png", "aa.png", "i.png", "ee.png", "u.png", "oo.png", "eh.png", "aih.png", "o.png", "au.png", "ahm.png", "aha.png"],
    "There are 12 vowels: अ, आ, इ, ई, उ, ऊ, ए, ऐ, ओ, औ, अं, अ:. These vowels are the main building blocks. "
)

vowelLesson.getItem("vowel-box")
vowelLesson.getDescription("vowel-description")

let syllableLesson = new Lesson(
    ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "स", "ष", "श", "ह", "क्ष", "त्र", "ज्ञ"],
    ["ka", "kha", "ga", "gha", "nga", "cha", "chha", "ja", "jha", "yan", "ta", "tha", "da", "dha", "nna", "tta", "ttha", "dda", "ddha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sa", "ssha", "sha", "ha", "chya", "tra", "gyan"],
    ["./sounds/root_syllables/syllables/ka.mp3", "./sounds/root_syllables/syllables/kha.mp3", "./sounds/root_syllables/syllables/ga.mp3", "./sounds/root_syllables/syllables/gha.mp3", "./sounds/root_syllables/syllables/nga.mp3", "./sounds/root_syllables/syllables/cha.mp3", "./sounds/root_syllables/syllables/chha.mp3", "./sounds/root_syllables/syllables/ja.mp3", "./sounds/root_syllables/syllables/jha.mp3", "./sounds/root_syllables/syllables/yan.mp3", "./sounds/root_syllables/syllables/ta.mp3", "./sounds/root_syllables/syllables/tha.mp3", "./sounds/root_syllables/syllables/da.mp3", "./sounds/root_syllables/syllables/dha.mp3", "./sounds/root_syllables/syllables/nna.mp3", "./sounds/root_syllables/syllables/tta.mp3", "./sounds/root_syllables/syllables/ttha.mp3", "./sounds/root_syllables/syllables/dda.mp3", "./sounds/root_syllables/syllables/ddha.mp3", "./sounds/root_syllables/syllables/na.mp3", "./sounds/root_syllables/syllables/pa.mp3", "./sounds/root_syllables/syllables/pha.mp3", "./sounds/root_syllables/syllables/ba.mp3", "./sounds/root_syllables/syllables/bha.mp3", "./sounds/root_syllables/syllables/ma.mp3", "./sounds/root_syllables/syllables/ya.mp3", "./sounds/root_syllables/syllables/ra.mp3", "./sounds/root_syllables/syllables/la.mp3", "./sounds/root_syllables/syllables/va.mp3", "./sounds/root_syllables/syllables/sa.mp3", "./sounds/root_syllables/syllables/ssha.mp3", "./sounds/root_syllables/syllables/sha.mp3", "./sounds/root_syllables/syllables/ha.mp3", "./sounds/root_syllables/syllables/chya.mp3", "./sounds/root_syllables/syllables/tra.mp3", "./sounds/root_syllables/syllables/gyan.mp3"],
    ["ka.png", "kha.mp3", "ga.mp3", "gha", "nga", "cha", "chha", "ja", "jha", "yan", "ta", "tha", "da", "dha", "nna", "tta", "ttha", "dda", "ddha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sa", "ssha", "sha", "ha", "chya", "tra", "gyan"],
    "These 36 syllables are another building blocks of Nepali language. These syllables are formed through the combination of the first vowel अ and 36 root consonants. One example is: क्‌ + अ = क । Now you can see how others are formed. Practice writing. There is no other way to learn a language than to practicing the building blocks. "
);
syllableLesson.getItem("syllable-box");
syllableLesson.getDescription("syllable-description");

let compoundLesson = new Lesson(
    ["क", "का", "कि", "की", "कु", "कू", "के", "कै", "को", "कौ", "कं", "क:"],
    ["ka", "kaa", "ki", "kee", "ku", "koo", "keh", "kaih", "ko", "kau", "kahm", "kaha"],
    ["./sounds/root_syllables/compounds/ka.mp3", "./sounds/root_syllables/compounds/kaa.mp3", "./sounds/root_syllables/compounds/ki.mp3", "./sounds/root_syllables/compounds/kee.mp3", "./sounds/root_syllables/compounds/ku.mp3", "./sounds/root_syllables/compounds/koo.mp3", "./sounds/root_syllables/compounds/ke.mp3", "./sounds/root_syllables/compounds/kai.mp3", "./sounds/root_syllables/compounds/ko.mp3", "./sounds/root_syllables/compounds/kau.mp3", "./sounds/root_syllables/compounds/kam.mp3", "./sounds/root_syllables/compounds/kaha.mp3"],
    ["ka.png", "kaa.png", "ki.png", "kee.png", "ku.png", "koo.png", "ke.png", "kai.png", "ko.png", "kau.png", "kam.png", "kaha.png"],
    "Compounds are formed by the combination of roots and each of the 12 vowels such that: क् + अ = क, क् + आ = का, and so on. Practice, practice, practice. I cannot emphasize this core task of learning language."
);
compoundLesson.getItem("compound-box");
compoundLesson.getDescription("compound-description");

//Words Lessons
let nounLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Nouns are things, people's proper names, place names, etc. You know what I mean. Practice, practice, practice. I cannot emphasize it enough."
);
nounLesson.getItem("noun-box");
nounLesson.getDescription("noun-description")

let pronounLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Pronouns are nouns that represent various nouns. Like I am Anil. My pronoun here is I. "
);
pronounLesson.getItem("pronoun-box");
pronounLesson.getDescription("pronoun-description")

let verbLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Verbs are about action in the world. "
);
verbLesson.getItem("verb-box");
verbLesson.getDescription("verb-description")

let adjectiveLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Adjectives add color to the world. Meaning, it represents the quality of objects/nouns."
);
adjectiveLesson.getItem("adjective-box");
adjectiveLesson.getDescription("adjective-description")

let adverbLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Adverbs add quality to actions."

);
adverbLesson.getItem("adverb-box");
adverbLesson.getDescription("adverb-description")

let conjunctionLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Conjunctions connect different things."
);
conjunctionLesson.getItem("conjunction-box");
conjunctionLesson.getDescription("conjunction-description")

let prepositionLesson = new Lesson(
    ['नेपाली'],
    ['english'],
    ['sound'],
    ['picture'],
    "Prepositions are about the placements."
);
prepositionLesson.getItem("preposition-box");
prepositionLesson.getDescription("preposition-description")


//Sentences Lessons

let presentLesson = new Lesson(
    ["मेरो नाम अनिल हो।"],
    ["My name is Anil."],
    [""],
    ["picture"],
    "Nepali sentence is organized as (Subject Object Verb). I home go. म घर जान्छु।"
);
presentLesson.getItem("present-box")
presentLesson.getDescription("present-description")

let pastLesson = new Lesson(
    ["मेरो नाम अनिल थियो।"],
    ["My name was Anil."],
    [""],
    ["picture"],
    "Past sentences describe things that happened in the past."
);
pastLesson.getItem("past-box");
pastLesson.getDescription("past-description")

let futureLesson = new Lesson(
    ["मेरो नाम अनिल हुनेछ।"],
    ["My name will be Anil."],
    [""],
    ["picture"],
    "Future sentences describe things that will happen in future. Obviously, indeed."
);
futureLesson.getItem("future-box");
futureLesson.getDescription("future-description")

// Readings Lessons

let beginnerReadings = new Lesson(
    [
        "१।",
        "२।",
        "३।",
        "४।",
        "५।",
        "६।",
        "७।",
        "८।",
        "९।",
        "१०।",
        "११।",
        "१२।",
        "१३।",
        "१४।",
        "१५।",
        "१६।",
        "१७।",
        "१८।",
        "१९।",
        "२०।",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    "Beginner lesson will focus on simple constructions of words and sentences."
);
beginnerReadings.getItem("beginner-box");
beginnerReadings.getDescription("beginner-description")

let intermediateReadings = new Lesson(
    [
        "१।",
        "२।",
        "३।",
        "४।",
        "५।",
        "६।",
        "७।",
        "८।",
        "९।",
        "१०।",
        "११।",
        "१२।",
        "१३।",
        "१४।",
        "१५।",
        "१६।",
        "१७।",
        "१८।",
        "१९।",
        "२०।",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    "We will move up the ladder as we keep practicing our reading skills. Have you finished reading these twenty blocks of writings? Do finish. "
);
intermediateReadings.getItem("intermediate-box");
intermediateReadings.getDescription("intermediate-description")

let advancedReadings = new Lesson(
    [
        "१।",
        "२।",
        "३।",
        "४।",
        "५।",
        "६।",
        "७।",
        "८।",
        "९।",
        "१०।",
        "११।",
        "१२।",
        "१३।",
        "१४।",
        "१५।",
        "१६।",
        "१७।",
        "१८।",
        "१९।",
        "२०।",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    "At advanced level, you are almost like a Nepali person. Like my french level now. Maybe a bit better than that. "
);
advancedReadings.getItem("advanced-box");
adverbLesson.getDescription("advanced-description")

let nativeReadings = new Lesson(
    [
        "१।",
        "२।",
        "३।",
        "४।",
        "५।",
        "६।",
        "७।",
        "८।",
        "९।",
        "१०।",
        "११।",
        "१२।",
        "१३।",
        "१४।",
        "१५।",
        "१६।",
        "१७।",
        "१८।",
        "१९।",
        "२०।",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    [
        "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८", "१९", "२०",
    ],
    "This is where you will feel that you are born in Nepali family speaking Nepali day in day out. Welcome. Venture out. Practice, practice, practice."
);
nativeReadings.getItem("native-box");
nativeReadings.getDescription("native-description")