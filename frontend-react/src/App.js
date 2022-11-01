import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
// import Calendar from "./components/Calendar/Calendar";
import './App.css'

function App() {
  const [popupOpen, setPopupOpen] = React.useState(false)

  function handleOpenPopup() {
    setPopupOpen(true) 
  }

  function handleClosePopup() {
    setPopupOpen(false) 
  }
  return (
    <div className="App">
      <Header onClick={handleOpenPopup}/>
      {popupOpen ? <Popup onClose={handleClosePopup}/> : ''}
      {/* <Calendar /> */}
      <Footer />
    </div>
  );
}

export default App;
