import React, { useState, useEffect } from 'react';
import './Game.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJs, faPython, faHtml5, faCss3, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';
import { faLeaf, faCogs, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Confetti from 'react-confetti';

const icons = [faReact, faNode, faJs, faPython, faDatabase, faHtml5, faCss3, faDocker, faLeaf, faAws, faCogs];

const difficulties = {
  easy: { pairs: 6, maxMoves: 30 },
  medium: { pairs: 8, maxMoves: 40 },
  hard: { pairs: 10, maxMoves: 55 },
};

const shuffleIcons = (level) => {
  const selectedIcons = icons.slice(0, difficulties[level].pairs);
  console.log("icons",selectedIcons)
  return [...selectedIcons, ...selectedIcons].sort(() => 0.5 - Math.random());
};

const Game = () => {
  const [difficulty, setDifficulty] = useState('medium');
  const [shuffledIcons, setShuffledIcons] = useState(shuffleIcons('medium'));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [moves, setMoves] = useState(0);
  const [gameLost, setGameLost] = useState(false);

  const handleCardClick = (index) => {
    if (disabled || flippedCards.includes(index) || matchedCards.includes(index) || gameOver || gameLost) return;

    setMoves(moves + 1);

    if (moves >= difficulties[difficulty].maxMoves) {
      setGameLost(true);
      setTimeout(() => resetGame(difficulty), 10000);
      return;
    }

    if (flippedCards.length === 0) {
      setFlippedCards([index]);
    } else if (flippedCards.length === 1) {
      setFlippedCards([...flippedCards, index]);
      setDisabled(true);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (shuffledIcons[firstIndex] === shuffledIcons[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        setFlippedCards([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setDisabled(false);
        }, 1000);
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedCards.length === shuffledIcons.length) {
      setGameOver(true);
      setTimeout(() => resetGame(difficulty), 10000);
    }
  }, [matchedCards]);

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    setShuffledIcons(shuffleIcons(e.target.value));
    resetGame(e.target.value);
  };

  const resetGame = (value) => {
    setMatchedCards([]);
    setFlippedCards([]);
    setMoves(0);
    setGameOver(false);
    setGameLost(false);
    setDisabled(false);
    setShuffledIcons(shuffleIcons(value));
  };

  return (
    <div className={`game-container ${gameLost ? 'game-lost' : ''}`}>
      {gameOver && <Confetti />}
      {gameLost && <h2 className="lose-message dramatic-loss">You Lose! Try Again.</h2>}
      <h1>Memory Matching Game</h1>
      <div className="game-info">
        <label>Difficulty: </label>
        <select className="styled-dropdown" value={difficulty} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <p>Moves: {moves} / {difficulties[difficulty].maxMoves}</p>
      </div>
      <div className="cards-container">
        {shuffledIcons.map((icon, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(index) || matchedCards.includes(index) ? 'flipped' : ''} ${matchedCards.includes(index) ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {flippedCards.includes(index) || matchedCards.includes(index) ? (
              <FontAwesomeIcon icon={icon} className="icon" />
            ) : (
              <div className="card-back">?</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
