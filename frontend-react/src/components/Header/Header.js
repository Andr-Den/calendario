import React from 'react'
// import logo from '../../images/logo.svg'
import logo  from '../../images/logo.svg'
import './Header.css'

function Header({ onClick }) {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo" />
      <button className="header__button" onClick={onClick}>Записаться</button>
    </header>
  )
}

export default Header;
