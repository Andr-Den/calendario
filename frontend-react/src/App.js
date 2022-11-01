import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Calendar from "./components/Calendar/Calendar";
import './App.css'

import * as api from './utils/api';

function App() {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [date, setDate] = React.useState('')

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
    })
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
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
