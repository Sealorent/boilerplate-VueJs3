import { format, getYear } from 'date-fns'
import idLocale from 'date-fns/locale/id'

class DateUtils {
  static listMonth() {
    const currentYear = getYear(new Date())
    const months = []
    for (let i = 0; i < 12; i++) {
      const date = new Date(currentYear, i, 1)
      const monthName = format(date, 'MMMM', { locale: idLocale })
      months.push({ index: i + 1, name: monthName })
    }
    return months
  }

  static listYear() {
    const yearList = []
    const currentYear = new Date().getFullYear() // Get the current year
    const startYear = 2020
    const endYear = new Date().getFullYear()
    for (let year = startYear; year <= Math.min(endYear, currentYear); year++) {
      yearList.push(year)
    }

    return yearList
  }
}

export default DateUtils
