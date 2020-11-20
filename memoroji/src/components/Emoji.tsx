import React from 'react';
import './Emoji.css'

type EmojiProps = {
    emoji: number,
    index: number,
    active: boolean,
    onPick: (emoji: number, index: number) => void
}
export function Emoji({ emoji, index, active, onPick }: EmojiProps) {
    return (
        <div className={'emoji ' + (active ? 'active' : 'covered')} onClick={() => onPick(emoji, index)}>
            {active && <div dangerouslySetInnerHTML={{ __html: `&#${emoji};` }} />}
        </div>
    );
}