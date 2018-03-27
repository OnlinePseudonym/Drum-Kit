import React from 'react';
import DrumPad from './drum_pad'


const DrumMachine = () => {
    const drums = ['clap','hihat','kick','openhat','boom','ride','snare','tom','tink'];
    const drumPads = drums.map(drum => <DrumPad drum={drum} />)
    return (
        <div id="drum-machine">
            <div id="display" />
            {drumPads}
        </div>
    )
}

export default DrumMachine;