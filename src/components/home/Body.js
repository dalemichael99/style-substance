import React from 'react';
import '../../styles/Body.css';

const Body = () => {
  return (
    <div className="body-top">
        <img className="landscape_1" src="/images/landscape_1.jpg" alt="Beach Landscape"/>
        <img className="haircut_1" src="/images/haircut_1.jpg" alt="Beardtrim"/>
        <button className="book_online_button-home">Book Online</button>
    </div>
  );
};

export default Body;