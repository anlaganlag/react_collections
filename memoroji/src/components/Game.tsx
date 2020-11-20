import './Game.css';
import React from 'react';
import availableEmojies from '../utils/availableEmojies.json'
import { Emoji } from './Emoji';
import { getRandomArbitrary, shuffleArray } from '../utils/game';

let items = generateEmojies(6)

type ActiveEmojiType = {
  index: number
  emoji: number
}

function Game() {
  const [activeEmoji, setActiveEmoji] = React.useState<number | undefined>(undefined)
  const [activeEmojies, setActiveEmojies] = React.useState<ActiveEmojiType[]>([])


  const onPick = (emoji: number, index: number) => {
    console.log('onPick', emoji, index)
    activeEmojies.push({ index, emoji })
    setActiveEmojies([...activeEmojies])

    if (!activeEmoji) {
      setActiveEmoji(emoji)
    } else {
      if (activeEmoji !== emoji) {
        setTimeout(() => {
          const newArray = activeEmojies.filter(activeEmojItem => activeEmojItem.emoji !== emoji && activeEmojItem.emoji !== activeEmoji)
          console.log(newArray)
          setActiveEmojies(newArray)
          setActiveEmoji(undefined)
        }
          , 1500)
      }
    }
  }

  return (
    <div className="Game">
      <div className="items">
        {items.map((emoji, index) =>
          <Emoji
            key={index}
            emoji={emoji}
            index={index}
            active={activeEmojies.find(activeEmoji => activeEmoji.index === index) !== undefined}
            onPick={onPick}
          />)}
      </div>
    </div>
  );
}

function generateEmojies(size = 6) {
  let items = []
  for (let i = 0; i < size; i++) {
    items.push(availableEmojies[getRandomArbitrary(0, availableEmojies.length)])
  }
  items = items.concat(items)
  shuffleArray(items)
  return items
}

export default Game;
