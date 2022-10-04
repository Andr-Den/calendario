import React from 'react'

function Note({name, description, date}) {
  return (
    <div className="note">
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{date}</span>
    </div>
  )
}

export default Note;