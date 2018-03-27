import React from 'react';
import DrumPad from './drum_pad'
import clap from '../sounds/clap.wav'
import hihat from '../sounds/hihat.wav'
import kick from '../sounds/kick.wav'
import openhat from '../sounds/openhat.wav'
import boom from '../sounds/boom.wav'
import ride from '../sounds/ride.wav'
import snare from '../sounds/snare.wav'
import tom from '../sounds/tom.wav'
import tink from '../sounds/tink.wav'


const DrumMachine = (props) => {
    const drums = [
        [clap,'Q'],
        [hihat,'W'],
        [kick,'E'],
        [openhat,'A'],
        [boom,'S'],
        [ride,'D'],
        [snare,'Z'],
        [tom,'X'],
        [tink,'C']
    ];
    const drumPads = drums.map(drum => <DrumPad key={drum[1]} drum={drum[0]} keyPress={drum[1]} />)
    return (
        <div id="drum-machine">
            <div id="display" />
            {drumPads}
        </div>
    )
}

export default DrumMachine;