import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const adjustDate = (date: Date, days: number): Date => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  const today = new Date()
  const minDate = adjustDate(today, -360)
  const maxDate = adjustDate(today, 360)

  const filterDate = (date: Date): boolean => {
    return date >= minDate && date <= maxDate
  }

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd.MM.yyyy"
        // minDate={adjustDate(selectedDate, -60)}
        // maxDate={adjustDate(selectedDate, 90)}
        filterDate={filterDate}
        showYearDropdown
        showMonthDropdown
        isClearable
      />
    </div>
  )
}

export default App
