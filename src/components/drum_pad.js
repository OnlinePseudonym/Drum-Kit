import React from 'react'

const DrumPad = (props) => {
    return (
        <div id={props.desc} className="drum-pad" onClick={props.handleClick}>
            {props.keyPress}
            <audio className="clip" src={props.drum} id={props.keyPress} />
        </div>
    )
}

export default DrumPad;