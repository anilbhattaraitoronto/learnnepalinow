import { Lesson } from './js/lessonClass.mjs'


export let vowelLesson = new Lesson(
    ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अ:"],
    ["a", "aa", "i", "ee", "u", "oo", "eh", "aih", "o", "au", "ahm", "aha"],
    ["./sounds/vowels/mp3/a.mp3", "./sounds/vowels/mp3/aa.mp3", "./sounds/vowels/mp3/i.mp3", "./sounds/vowels/mp3/ee.mp3", "./sounds/vowels/mp3/u.mp3", "./sounds/vowels/mp3/oo.mp3", "./sounds/vowels/mp3/eh.mp3", "./sounds/vowels/mp3/aih.mp3", "./sounds/vowels/mp3/o.mp3", "./sounds/vowels/mp3/au.mp3", "./sounds/vowels/mp3/ahm.mp3", "./sounds/vowels/mp3/aha.mp3"],
    ["a.png", "aa.png", "i.png", "ee.png", "u.png", "oo.png", "eh.png", "aih.png", "o.png", "au.png", "ahm.png", "aha.png"],
    "There are 12 vowels: अ, आ, इ, ई, उ, ऊ, ए, ऐ, ओ, औ, अं, अ:. These vowels are the main building blocks. "
)

vowelLesson.getItem("vowel-box")
vowelLesson.getDescription("vowel-description")

export let syllableLesson = new Lesson(
    ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "स", "ष", "श", "ह", "क्ष", "त्र", "ज्ञ"],
    ["ka", "kha", "ga", "gha", "nga", "cha", "chha", "ja", "jha", "yan", "ta", "tha", "da", "dha", "nna", "tta", "ttha", "dda", "ddha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sa", "ssha", "sha", "ha", "chya", "tra", "gyan"],
    ["./sounds/root_syllables/syllables/ka.mp3", "./sounds/root_syllables/syllables/kha.mp3", "./sounds/root_syllables/syllables/ga.mp3", "./sounds/root_syllables/syllables/gha.mp3", "./sounds/root_syllables/syllables/nga.mp3", "./sounds/root_syllables/syllables/cha.mp3", "./sounds/root_syllables/syllables/chha.mp3", "./sounds/root_syllables/syllables/ja.mp3", "./sounds/root_syllables/syllables/jha.mp3", "./sounds/root_syllables/syllables/yan.mp3", "./sounds/root_syllables/syllables/ta.mp3", "./sounds/root_syllables/syllables/tha.mp3", "./sounds/root_syllables/syllables/da.mp3", "./sounds/root_syllables/syllables/dha.mp3", "./sounds/root_syllables/syllables/nna.mp3", "./sounds/root_syllables/syllables/tta.mp3", "./sounds/root_syllables/syllables/ttha.mp3", "./sounds/root_syllables/syllables/dda.mp3", "./sounds/root_syllables/syllables/ddha.mp3", "./sounds/root_syllables/syllables/na.mp3", "./sounds/root_syllables/syllables/pa.mp3", "./sounds/root_syllables/syllables/pha.mp3", "./sounds/root_syllables/syllables/ba.mp3", "./sounds/root_syllables/syllables/bha.mp3", "./sounds/root_syllables/syllables/ma.mp3", "./sounds/root_syllables/syllables/ya.mp3", "./sounds/root_syllables/syllables/ra.mp3", "./sounds/root_syllables/syllables/la.mp3", "./sounds/root_syllables/syllables/va.mp3", "./sounds/root_syllables/syllables/sa.mp3", "./sounds/root_syllables/syllables/ssha.mp3", "./sounds/root_syllables/syllables/sha.mp3", "./sounds/root_syllables/syllables/ha.mp3", "./sounds/root_syllables/syllables/chya.mp3", "./sounds/root_syllables/syllables/tra.mp3", "./sounds/root_syllables/syllables/gyan.mp3"],
    ["ka.png", "kha.mp3", "ga.mp3", "gha", "nga", "cha", "chha", "ja", "jha", "yan", "ta", "tha", "da", "dha", "nna", "tta", "ttha", "dda", "ddha", "na", "pa", "pha", "ba", "bha", "ma", "ya", "ra", "la", "va", "sa", "ssha", "sha", "ha", "chya", "tra", "gyan"],
    "These 36 syllables are another building blocks of Nepali language. These syllables are formed through the combination of the first vowel अ and 36 root consonants. One example is: क्‌ + अ = क । Now you can see how others are formed. Practice writing. There is no other way to learn a language than to practicing the building blocks. "
);
syllableLesson.getItem("syllable-box")
syllableLesson.getDescription("syllable-description")

export let compoundLesson = new Lesson(
    ["क", "का", "कि", "की", "कु", "कू", "के", "कै", "को", "कौ", "कं", "क:"],
    ["ka", "kaa", "ki", "kee", "ku", "koo", "keh", "kaih", "ko", "kau", "kahm", "kaha"],
    ["./sounds/root_syllables/compounds/ka.mp3", "./sounds/root_syllables/compounds/kaa.mp3", "./sounds/root_syllables/compounds/ki.mp3", "./sounds/root_syllables/compounds/kee.mp3", "./sounds/root_syllables/compounds/ku.mp3", "./sounds/root_syllables/compounds/koo.mp3", "./sounds/root_syllables/compounds/ke.mp3", "./sounds/root_syllables/compounds/kai.mp3", "./sounds/root_syllables/compounds/ko.mp3", "./sounds/root_syllables/compounds/kau.mp3", "./sounds/root_syllables/compounds/kam.mp3", "./sounds/root_syllables/compounds/kaha.mp3"],
    ["ka.png", "kaa.png", "ki.png", "kee.png", "ku.png", "koo.png", "ke.png", "kai.png", "ko.png", "kau.png", "kam.png", "kaha.png"],
    "Compounds are formed by the combination of roots and each of the 12 vowels such that: क् + अ = क, क् + आ = का, and so on. Practice, practice, practice. I cannot emphasize this core task of learning language."
);
compoundLesson.getItem("compound-box")
compoundLesson.getDescription("compound-description")