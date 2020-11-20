import React from 'react';
import '../styles/components/HistoryDisplay.css'
import GlobalContext from '../contexts/GlobalContext';
const HistoryDisplay = () => {
    return (
        <GlobalContext.Consumer>
            {(state) => {
                return (
                    <div className='history-display'>
                        <p>{state.GlobalState.history}</p>
                    </div>
                );
            }}
        </GlobalContext.Consumer>
    );
}

export default HistoryDisplay;