type SuccessMessageProps = {
  message: string
  error?: string
}

const SuccessMessage = ({ message, error }: SuccessMessageProps) => {
  /*
   * Логіка роботи SuccessMessage з validateOnMount={true}:
   *
   * 1. При завантаженні сторінки:
   *    - initialState = { login: '', password: '' } (порожні поля)
   *    - validateOnMount={true} одразу запускає валідацію
   *    - validationSchema з .required() перевіряє порожні поля
   *    - Результат: error = 'Login is required' (не undefined!)
   *    - if (error) return null ← Спрацьовує! SuccessMessage приховується
   *
   * 2. Коли користувач вводить валідний текст:
   *    - Formik валідує знову через validateOnChange={true}
   *    - Якщо все ОК → error = undefined
   *    - if (error) return null ← НЕ спрацьовує
   *    - SuccessMessage з'являється! ✅
   *
   * 3. При автокомпліт (основна проблема, яку ми вирішили):
   *    - Браузер заповнює поля автоматично
   *    - validateOnMount={true} одразу валідує ці значення
   *    - Якщо автокомпліт значення невалідні → error існує → SuccessMessage приховується
   *    - Якщо валідні → error = undefined → SuccessMessage показується
   */
  if (error) return null
  return <div className="success">{message}</div>
}

export default SuccessMessage
