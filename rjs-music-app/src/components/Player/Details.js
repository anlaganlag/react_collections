import React from 'react'

function Details({song:{img_src,title,artist}}) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={img_src} alt="" />
            </div>
            <h3 className="details-title">{title}</h3>
            <h1 className="details-artist">{artist}</h1>
        </div>
    )
}

export default Details
