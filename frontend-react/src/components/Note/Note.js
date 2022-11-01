import React from 'react'

import './Note.css'

function Note({name, description, date}) {

  return (
    <div className="note">
      <div className="note__container">
        <h2>{name}</h2>
        <p>{description}</p>
        <span>{date}</span>
      </div>
    </div>
  )
}

export default Note;
