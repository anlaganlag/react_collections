import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function Controls() {
    const [isPlaying, setIsPlaying] = useState(false)
    // const function handleBack() {
        
    // } 


    return (
        <div className="c-player--controls">
            <button className="skip-btn">
                <FontAwesomeIcon icon={faBackward} 
                onClick={()=>
                    setIsPlaying(!isPlaying)}

                />
            </button>
            <button className="play-btn">
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} 
                onClick={()=>setIsPlaying(!isPlaying)}
                />
            </button>
            <button className="skip-btn">
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default Controls
