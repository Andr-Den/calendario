import React from 'react'
import * as api from '../../utils/api';

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
    <>
      {notes.map(({name, description, date}) => (
        <Note name={name} description={description} date={date}/>
    ))}
  </>
  )
}

export default Calendar;