import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default function InputBirthDate() {
  const [selectedDate, setSelectedDate] = useState(null)

  return (

    <DatePicker
    selected={selectedDate}
    onChange={date => setSelectedDate(date)}
    id ="data_nascimento"
    required
    className="input"
    />

  );
}