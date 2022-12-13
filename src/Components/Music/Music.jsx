import React from "react";

const Music = (props) => {
    return <div>
        <Song songName='Serega pirat 1' />
        <Song songName='Serega pirat 2' />
    </div>

}
const Song = (props) => {
    return <div>
        <span>{props.songName}</span>
    </div>

}

export default Music;
