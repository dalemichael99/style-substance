import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>Style&Substance</h1>
      </div>
      <div className="navigation">
        <nav>
          <a href="#">Product Store</a>
          <a href="#">Our Services</a>
          <a href="#">Our Location</a>
        </nav>
      </div>
      <div>
        <button className="book_online_button">Book Online</button>
      </div>
    </header>
  );
};

export default Header;