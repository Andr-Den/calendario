import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Calendar from "./components/Calendar/Calendar";
import InfoTooltip from "./components/InfoTooltip/InfoTooltip";
import './App.css'

import done from './images/done.svg'

import * as api from './utils/api';

function App() {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [date, setDate] = React.useState('')

  const [tooltipDoneOpen, setTooltipDoneOpen] = React.useState(false);

  function handleOpenPopup() {
    setPopupOpen(true) 
  }

  function handleClosePopup() {
    setPopupOpen(false) 
  }

  function handleSubmit(e) {
    e.preventDefault();
    api.register(name, description, date)
    .then(() => {
      setPopupOpen(false)
      setTooltipDoneOpen(true)
      setName()
      setDescription()
      setDate()
    })
  }

  function popupErrorClose() {
    setTooltipDoneOpen(false)
  }

  return (
    <div className="App">
      <Header onClick={handleOpenPopup}/>
      {popupOpen ? 
      <Popup 
        onClose={handleClosePopup} 
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        handleSubmit={handleSubmit}/> : ''}
      <InfoTooltip tooltipOpen={tooltipDoneOpen} tooltipErrorText="Заявка оставлена" tooltipClose={popupErrorClose} tooltipIcon={done}/>
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
