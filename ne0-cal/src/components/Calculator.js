import React from 'react';
import Buttons from './Buttons';
import Display from './Display';
import '../styles/components/Calculator.css'
import GlobalContext from '../contexts/GlobalContext';
const Calculator = (props) => {
    return (
        <GlobalContext.Consumer>
            { 
                state => {
                console.log(JSON.stringify(state));
                return (
                    <div className='calculator'>
                        <Display />
                        <Buttons />
                    </div>)
                }
            }
        </GlobalContext.Consumer>
    );
}

export default Calculator;