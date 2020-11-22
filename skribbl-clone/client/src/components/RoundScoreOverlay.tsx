import React from 'react';
import { GameContext, GameContextProps } from '../providers/GameProvider';

const RoundScoreOverlay: React.FC = () => {
  const context = React.useContext(GameContext) as GameContextProps;
  if (!context.isWaitingForNextRd) {
    return <></>;
  }
  return (
    <div id="overlay">
      <h3>The word was &apos;{context.wordReal}&apos;</h3>
      {context.roundScores.map((roundScore) => (
        <div
          className="round-score"
          key={roundScore.userId}
          style={{ color: roundScore.score === 0 ? 'red' : 'green' }}
        >
          <b>{roundScore.username}:</b> {roundScore.score}
        </div>
      ))}
    </div>
  );
};
export default RoundScoreOverlay;
