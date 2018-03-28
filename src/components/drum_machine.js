import React, { Component } from 'react';
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

class DrumMachine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastDrum: '',
        }
        this.getDrumPads = this.getDrumPads.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    drums = [
        [clap,'Q','clap'],
        [hihat,'W','hihat'],
        [kick,'E','kick'],
        [openhat,'A','openhat'],
        [boom,'S','boom'],
        [ride,'D','ride'],
        [snare,'Z','snare'],
        [tom,'X','tom'],
        [tink,'C','tink']
    ]

    handleKeyPress(e) {
        console.log(e.key);
        const el = document.getElementById(e.key.toUpperCase());
        if (!el) return;
        this.playSound(el);
        this.setState({
            lastDrum: el.parentElement.id,
        });
    }

    handleClick =(e) => {
        this.playSound(e.target.children[0]);
        this.setState({
            lastDrum: e.target.id,
        });
    }
    
    playSound = (el) => {
        el.parentElement.classList.add('played');
        setTimeout(() => el.parentElement.classList.remove('played'), 300);
        const audio = el;
        audio.currentTime = 0;
        audio.play();
    }

    getDrumPads = () => {
        return this.drums.map(drum => <DrumPad
            handleClick={this.handleClick}
            key={drum[1]}
            drum={drum[0]}
            keyPress={drum[1]}
            desc={drum[2]}
            />);
    }

    render() {
        return (
            <div id="drum-machine" class="drum-machine">
                <div class="display" id="display">{this.state.lastDrum}</div>
                {this.getDrumPads()}
            </div>
        )
    }
}

export default DrumMachine;