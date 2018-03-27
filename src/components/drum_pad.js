import React, { Component } from 'react'

class DrumPad extends Component {
    constructor(props) {
        super(props)
        
        this.playSound = this.playSound.bind(this);
    }
    
    playSound = (e) => {
        const audio = document.getElementById(this.props.keyPress);
        audio.currentTime = 0;
        audio.play();
    }

    render() {
        return (
            <div id={this.props.drum} onClick={this.playSound}>
                {this.props.keyPress}
                <audio src={this.props.drum} id={this.props.keyPress} />
            </div>
        )
    }
}

export default DrumPad;