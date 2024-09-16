import React, { useEffect, useRef } from 'react';
import './TitleCard.css';
import cards_data from '../../assets/cards/Cards_data'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router

const TitleCard = ({ title, category }) => {
  const cardsRef = useRef();
  const navigate = useNavigate(); // Hook for navigation

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const currentRef = cardsRef.current;
    currentRef.addEventListener('wheel', handleWheel);

    return () => {
      currentRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleCardClick = (card) => {
    // Assuming `player` is a route or function to handle navigation
    navigate(`/player`); // Navigate to the player page with card id
  };

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className='card' key={index}>
            <img 
              src={card.image} 
              alt={card.name} 
              onClick={() => handleCardClick(card)}
            />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
