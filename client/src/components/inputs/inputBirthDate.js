import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import pt from "date-fns/locale/pt"

import 'react-datepicker/dist/react-datepicker.css'

export default function InputBirthDate() {
  const [selectedDate, setSelectedDate] = useState(null)
  registerLocale("pt-BR", pt)
  return (

    <DatePicker
    selected={selectedDate}
    onChange={date => setSelectedDate(date)}
    id ="data_nascimento"
    required
    className="input"
    dateFormat='dd/MM/yyyy'
    locale="pt-BR"
    />

  );
}