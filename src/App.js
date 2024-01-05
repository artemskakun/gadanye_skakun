import React, { useState } from 'react';
import './App.css';

const TarotReadingApp = () => {
  const [prediction, setPrediction] = useState(null);

  const handleTarotReading = () => {
    const cards = ['pik', 'trefo', 'cherv', 'bubnov'];
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];
    setPrediction(selectedCard);
  };

  return (
    <div className="App">
      <h1>Гадание на картах</h1>
      {prediction && (
        <div>
          <img src={`images/${prediction}_king.png`} alt={`${prediction} king`} />
          <p>{getPredictionDescription(prediction)}</p>
        </div>
      )}
      <button onClick={handleTarotReading}>Гадать</button>
      <div className="description">
        <h2>Описание гаданий</h2>
        <p>Гадание на картах - механика гадания, где каждая карта предсказывает что-то о суженом:</p>
        <ul>
          <li>Пиковый король — суженый будет значительно старше.</li>
          <li>Трефовый король — вдовец или военный.</li>
          <li>Червовый король — жених будет богатым и красивым.</li>
          <li>Бубновый король — обещает большую взаимную любовь.</li>
        </ul>
        <p>Идея взята из < a href="https://clck.ru/37UH6X">сатьи</a></p>
      </div>
    </div>
  );
};

const getPredictionDescription = (card) => {
  switch (card) {
    case 'pik':
      return 'Суженый будет значительно старше.';
    case 'trefo':
      return 'Вдовец или военный.';
    case 'cherv':
      return 'Жених будет богатым и красивым.';
    case 'bubnov':
      return 'Обещает большую взаимную любовь.';
    default:
      return '';
  }
};

export default TarotReadingApp;