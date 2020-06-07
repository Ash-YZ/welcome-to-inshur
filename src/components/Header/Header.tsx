import React from 'react';
import logo from '../../assets/logo.png';
import './styles.css';

const Header = (props: any) => {
  return (
    <div className='header-container'>
      <img className="header-logo"
        src={logo}
        alt="Inshur logo"
        title="Inshur logo" />
      <h1 className="header-title">{props.title}</h1>
    </div>
  );
}

export default Header;