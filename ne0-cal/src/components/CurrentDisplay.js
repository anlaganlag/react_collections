import React from 'react';
import '../styles/components/CurrentDisplay.css'
import GlobalContext from '../contexts/GlobalContext';

const CurrentDisplay = () => {
    return (
        <GlobalContext.Consumer>
            {(state) => {
                return (
                    <div className='current-display'>
                        <p>{state.GlobalState.expression || '0'}</p>
                    </div>
                )
            }}

        </GlobalContext.Consumer>
    );
}

export default CurrentDisplay;