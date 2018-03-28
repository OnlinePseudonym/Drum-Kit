import React from 'react'

const DrumPad = (props) => {
    return (
        <div id={props.desc} class="drum-pad" onClick={props.handleClick}>
            {props.keyPress}
            <audio class="clip" src={props.drum} id={props.keyPress} />
        </div>
    )
}

export default DrumPad;