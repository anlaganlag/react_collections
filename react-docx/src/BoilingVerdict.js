import React from 'react'

const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
        return <p> The water will boil</p>
    }
    else {
        return <p> The water will not boil</p>
    }
}

export default BoilingVerdict;