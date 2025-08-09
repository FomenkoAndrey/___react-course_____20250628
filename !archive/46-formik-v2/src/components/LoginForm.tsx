import { Form, Formik } from 'formik'
import { object, string } from 'yup'
import FormField from './FormField'

type InitialState = {
  login: string
  password: string
}

const initialState: InitialState = {
  login: '',
  password: ''
}

const validationSchema = object({
  login: string()
    .required('Login is required')
    .min(3, 'Login must be at least 3 characters long')
    .max(15, 'Login must be at most 15 characters long'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be at most 20 characters long')
})

const handleSubmit = (values: InitialState) => {
  console.log(values)
}

const randomSuffix = () => Math.random().toString(36).substring(2, 15)

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialState} // Початкові порожні значення полів
      validationSchema={validationSchema} // Правила валідації (required, min, max)
      onSubmit={handleSubmit}
      /*
       * КЛЮЧОВЕ РІШЕННЯ ПРОБЛЕМИ З АВТОКОМПЛІТ:
       * validateOnMount={true} - запускає валідацію відразу при завантаженні форми
       *
       * БЕЗ цього флага:
       * - Автокомпліт заповнює поля невалідними значеннями
       * - Formik не валідує їх автоматично (тільки після touch/change)
       * - isValid залишається true (початкове значення)
       * - Кнопка активна, але данні невалідні ❌
       *
       * З validateOnMount={true}:
       * - Формик одразу валідує initialValues та автокомпліт значення
       * - Якщо щось невалідне → isValid = false, errors заповнюються
       * - Кнопка стає неактивною до виправлення помилок ✅
       * - ErrorMessage одразу показує помилки валідації
       */
      validateOnMount={true}
      validateOnChange={true} // Валідація при кожній зміні поля
    >
      {({ isValid, errors }) => (
        <Form autoComplete="new-password">
          {/*
           * ПЕРЕДАЧА ПОМИЛОК В FormField:
           * error={errors.login} - передаємо конкретну помилку для кожного поля
           *
           * Як це працює:
           * - Formik валідує поле login згідно validationSchema
           * - Якщо невалідне → errors.login = "Login is required" (або інша помилка)
           * - Якщо валідне → errors.login = undefined
           * - FormField отримує error prop і передає його в:
           *   - ErrorMessage (для показу помилки)
           *   - SuccessMessage (для приховування успіху при помилці)
           */}
          <FormField
            id={`login-${randomSuffix()}`}
            label="Login"
            name="login"
            type="text"
            placeholder="Enter your login"
            successMessage="Login is valid"
            error={errors.login}
            autoComplete="new-password"
          />
          <FormField
            id={`password-${randomSuffix()}`}
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            successMessage="Password is valid"
            error={errors.password}
            autoComplete="new-password"
          />
          {/*
           * ЛОГІКА КНОПКИ SUBMIT:
           * disabled={!isValid} - кнопка активна тільки коли ВСІ поля валідні
           *
           * isValid автоматично обчислюється Formik на основі:
           * - Всіх правил validationSchema
           * - Поточних значень полів
           *
           * Завдяки validateOnMount={true}:
           * - При завантаженні з порожніми полями: isValid = false (required fields)
           * - При автокомпліт з невалідними значеннями: isValid = false
           * - Тільки коли ВСІ поля відповідають правилам: isValid = true ✅
           */}
          <button type="submit" disabled={!isValid}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
