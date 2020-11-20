import React from 'react';
import Button from './Button';
import '../styles/components/Buttons.css'
const Buttons = () => {
    return (
        <div className="button-grid">
            <Button name="AC" type="func" />
            <Button name="del" type="func" />
            <Button name="%" type="math" />
            <Button name="/" type="math" />
            <Button name="7" type="normal" />
            <Button name="8" type="normal" />
            <Button name="9" type="normal" />
            <Button name="X" type="math" />
            <Button name="4" type="normal" />
            <Button name="5" type="normal" />
            <Button name="6" type="normal" />
            <Button name="-" type="math" />
            <Button name="1" type="normal" />
            <Button name="2" type="normal" />
            <Button name="3" type="normal" />
            <Button name="+" type="math" />
            <Button name="." type="normal" />
            <Button name="0" type="normal" />
            <Button name="()" type="func" />
            <Button name="=" type="equals" />
        </div>
    );
}

export default Buttons;