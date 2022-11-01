import React from 'react'
import * as api from '../../utils/api';
import './Calendar.css'
import Note from '../Note/Note';

function Calendar() {
  const [notes, setNotes] = React.useState([])

  React.useEffect(() => {
    api.getNotes()
    .then((res) => {
      setNotes(res.data)
    })
  }, [])

  return (
    <div className="calendar">
      {notes.map(({name, description, date}, index) => (
        <Note name={name} description={description} date={date} key={index}/>
    ))}
  </div>
  )
}

export default Calendar;