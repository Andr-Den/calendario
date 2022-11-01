import React from 'react'

import close_icon from '../../images/CloseIcon.svg'

import './Popup.css'

function Popup({ onClose }) {
  return (
    <div className="popup popup_opened">
      <div className="popup__container">
      <div className="form">
        <form>
          <fieldset className="form__container">
            <button className="form__close-button" type="button" onClick={onClose}><img src={close_icon} alt="close icon" className="form__close-icon"/></button>
            <h2 className="form__title">Добро пожаловать!</h2>
            <span className="form__description">Имя</span>
            <input type="text" className="form__input" required/>
            <span className="form__description">E-mail</span>
            <input type="email" className="form__input" required pattern="^.+@.+\..+$"/>
            <span className="form__description">Пароль</span>
            <input type="password" className="form__input" required minLength="6"/>
            <span className="form__description">Телефон</span>
            <input type="password" className="form__input" required minLength="6"/>
            <input type="submit" value="Отправить" name="submit_button" className="form__button" />
          </fieldset> 
        </form>
      </div>
      </div>
    </div>
  )
}

export default Popup;