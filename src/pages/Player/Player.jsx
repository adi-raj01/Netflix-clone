import React from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example video ID - replace with the actual video ID or pass it dynamically
  const videoId ='MWOlnZSnXJo';

  return (
    <div className='player'>
      <img 
        src={back_arrow_icon} 
        alt='Back' 
        onClick={() => navigate(-1)} // Navigate one step back in history
        className='back-arrow'
      />
      <iframe 
        width='90%' 
        height='90%' 
        src={`https://www.youtube.com/embed/${videoId}`} 
        title='trailer' 
        frameBorder='0' 
        allowFullScreen
      ></iframe>
      
    </div>
  );
}

export default Player;
