import React from 'react';
import CurrentDisplay from './CurrentDisplay';
import HistoryDisplay from './HistoryDisplay';
import '../styles/components/Display.css'

const Display = () => {
    return (
            <div className='display'>
                <HistoryDisplay />
                <CurrentDisplay />
            </div>
    );
}

export default Display;