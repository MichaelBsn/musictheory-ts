# Music Theory in TypeScript - README

This TypeScript module is an interpretation of basic music theory principles. It is designed to handle note names, tuning systems, and chords in a simplified and intuitive way.

Please note, there are many ways to approach music theory, and the methods and representation used in this module are a personal interpretation.

## Features

The module consists of several parts:

- **Note names**: Note names are represented according to the C scale. Enharmonics, for simplicity, are shown as per the C scale representation. For example, E# is represented as "F".

- **Pitch Classes**: These are essentially note names that are represented using a type `PitchClass`. A Pitch Class can be combined with an octave number to form a Pitch in Scientific Pitch Notation.

- **Notes**: A `Note` object represents a musical note, containing properties for the note name, octave, and frequency (assuming equal temperament).

- **Tuning Systems**: Various tuning systems are defined using the `Tuning` interface. These include modern standards and historical references. Each tuning system is defined by a description and a reference frequency (A4).

- **Interval Ratios**: Represents the ratio between two pitches in a just intonation system.

- **Chords**: Represents a musical chord. A `Chord` object contains a name and a list of `Note` objects.

## Limitations

As of now, the module does not support exporting any of the created data types or variables. This module is a work in progress, and the functionality may be expanded in the future.

## Example Use

```typescript
const note: Note = {
    note: "A",
    octave: 4,
    freqET: 440
}

const tuning: Tuning = {
    desc: "A440 is the modern standard reference pitch",
    freqReference: 440
}

const chord: Chord = {
    name: "A Major",
    notes: [
        { note: "A", octave: 4, freqET: 440 },
        { note: "C#Db", octave: 4, freqET: 554.37 },
        { note: "E", octave: 4, freqET: 659.25 }
    ]
}
```

In the example above, we are creating a note, a tuning, and a chord. This is a basic use case and more complex scenarios can be achieved.

## Further Development

This is a very early version of this module and there are a lot of music theory elements and functionality that can be added. Feel free to contribute to this project by improving existing code or adding new features.

## Disclaimer

Please keep in mind that the code and the way music theory is represented are subjective and could vary depending on the particular approach to music theory.