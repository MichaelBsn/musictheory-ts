//musictheory.ts is my attempt at putting my music theory to Typescript
//DISCLAIMER: There are many approaches to music theory, and this is simply my own interpretation of it.


//NOTENAMES AND LOCALIZATION

//for this project, Enharmonics will be represented according to the C scale
//THIS IS ONE OF THOSE CASES WHERE IT DOESN'T HAVE TO BE REPRESENTED THIS WAY, BUT IT IS FOR THE SAKE OF SIMPLICITY
//e.g. the note E# is represented here as "F"
//e.g. an A major triad is represented in this code as ["A", "C#Db", "E"] even though it is more commonly written as just ["A", "C#", "E"]
type PitchClass = "C" | "C#Db" | "D" | "D#Eb" | "E" | "F" | "F#Gb" | "G" | "G#Ab" | "A" | "A#Bb" | "B";

//a Pitch Class can be combined with an octave number to form a Pitch in Scientific Pitch Notation
type Octave = number;

interface Note {
    note: PitchClass;
    octave: Octave;
    freqET: number;
}


type ReferenceFreq = number; //represents note A4

interface Tuning {
    desc: string;
    freqReference: ReferenceFreq;
}

const tunings: { [key: string]: Tuning } = {
    modern: {
        desc: "A440 is the modern standard reference pitch",
        freqReference: 440
    },
    nyc: {
        desc: "A441 was the tuning standard used by the music schools in New York City",
        freqReference: 441
    },
    modernHigh: {
        desc: "A442 is a tuning standard used by some orchestras",
        freqReference: 442
    },
    badOrgan: {
        desc: "A438 is an example of how organ tuning varies in some situations",
        freqReference: 438
    },
    baroque: {
        desc: "A415 is the tuning standard used by historical musicians for works from the Baroque period",
        freqReference: 415
    },
    classical: {
        desc: "A430 is the tuning standard used by historical musicians for works from the Classical period",
        freqReference: 430
    },
    frenchBaroque: {
        desc: "A392 is the tuning standard used by historical musicians for works from the French Baroque period",
        freqReference: 392
    },
};

type IntervalRatio = [number, number];
let justIntonationRatios: { [key: string]: IntervalRatio } = {
    "Unison": [1, 1],
    "Major second": [9, 8],
    "Major third": [5, 4],
    "Perfect fourth": [4, 3],
    "Perfect fifth": [3, 2],
    "Major sixth": [5, 3],
    "Major seventh": [15, 8],
    "Octave": [2, 1]
};

interface Chord {
    name: string;
    notes: Note[];
}



//Because this project is still a work in progress, there is no need to export anything yet.
export { }
