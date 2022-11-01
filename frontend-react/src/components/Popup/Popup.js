import React from 'react'

import close_icon from '../../images/CloseIcon.svg'

import './Popup.css'

// pattern="^.+@.+\..+$"

function Popup({ onClose, handleSubmit, name, setName, description, setDescription, date, setDate }) {

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDateChange(e) {
    setDate(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  return (
    <div className="popup popup_opened">
      <div className="popup__container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <fieldset className="form__container">
            <button className="form__close-button" type="button" onClick={onClose}><img src={close_icon} alt="close icon" className="form__close-icon"/></button>
            <h2 className="form__title">Добро пожаловать!</h2>
            <span className="form__description">Имя</span>
            <input type="text" className="form__input" onChange={handleNameChange} value={name || ''} required/>
            <span className="form__description">Услуга</span>
            <input type="text" className="form__input" onChange={handleDescriptionChange} value={description || ''} required/>
            <span className="form__description">Дата</span>
            <input type="text" className="form__input" onChange={handleDateChange} value={date || ''} required/>
            {/* <span className="form__description">Телефон</span>
            <input type="password" className="form__input" required minLength="6"/> */}
            <input type="submit" value="Отправить" name="submit_button" className="form__button" />
          </fieldset> 
        </form>
      </div>
      </div>
    </div>
  )
}

export default Popup;