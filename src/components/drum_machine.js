import React from 'react';
import DrumPad from './drum_pad'


const DrumMachine = () => {
    const drums = [
        ['clap','Q'],
        ['hihat','W'],
        ['kick','E'],
        ['openhat','A'],
        ['boom','S'],
        ['ride','D'],
        ['snare','Z'],
        ['tom','X'],
        ['tink','C']
    ];
    const drumPads = drums.map(drum => <DrumPad drum={drum[0]} key={drum[1]} />)
    return (
        <div id="drum-machine">
            <div id="display" />
            {drumPads}
        </div>
    )
}

export default DrumMachine;