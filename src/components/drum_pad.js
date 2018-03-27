import React from 'react'

const DrumPad = (props) => {
    return (
        <div id={props.desc} class="pad" onClick={props.handleClick}>
            {props.keyPress}
            <audio src={props.drum} id={props.keyPress} />
        </div>
    )
}

export default DrumPad;