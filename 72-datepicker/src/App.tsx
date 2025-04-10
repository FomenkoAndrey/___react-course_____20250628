import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const substractDays = (date: Date, days: number) => {
    const result = new Date(date)
    result.setDate(result.getDate() - days)
    return result
  }

  const addDays = (date: Date, days: number) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  const today = new Date()
  const minDate = substractDays(today, 30)
  const maxDate = addDays(today, 90)

  const filterDate = (date: Date): boolean => {
    return date >= minDate && date <= maxDate
  }

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd.MM.yyyy"
        // minDate={substractDays(selectedDate, 30)}
        // maxDate={addDays(selectedDate, 30)}
        filterDate={filterDate}
        showYearDropdown
        showMonthDropdown
        isClearable
      />
    </div>
  )
}

export default App
