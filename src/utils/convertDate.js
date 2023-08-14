import { format } from 'date-fns'
import idLocale from 'date-fns/locale/id'

class ConvertDate {
  static fullYearInd(date) {
    return format(date, 'd MMMM yyyy', { locale: idLocale })
  }

  static dateMonthYear(date) {
    return format(date, 'dd-MM-yyyy', { locale: idLocale })
  }
}

export default ConvertDate
