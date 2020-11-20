import React,{useState}from 'react'
import Controls from './Controls';
import Details from './Details';

function Player({idx,song,nextSong:{title,artist}}) {
    return (
        <div className="c-player">
            <audio></audio>
            <h4>播放中</h4>
            <Details song={song} />
            <Controls  idx={idx}/>
            <p>接着是: <span>  {artist} ({title})</span></p>
        </div>
    )
}

export default Player
