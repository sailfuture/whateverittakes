import React from 'react';
import './Header.css'; // Import the CSS file for styling

interface HeaderProps {
  logo: string;
  onDonateClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ logo, onDonateClick }) => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <button className="donate-button" onClick={onDonateClick}>
        Donate Now
      </button>
    </header>
  );
};

export default Header;