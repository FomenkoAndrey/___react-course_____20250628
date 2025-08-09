import { Field, ErrorMessage } from 'formik'
import SuccessMessage from './SuccessMessage'

/*
 * FormField - МІСТ між Formik та кастомними компонентами
 *
 * Роль компонента:
 * 1. Об'єднує стандартні Formik компоненти (Field, ErrorMessage)
 * 2. Додає кастомний SuccessMessage для позитивного фідбеку
 * 3. Забезпечує консистентну структуру для всіх полів форми
 * 4. Приймає error prop з LoginForm для синхронізації з Formik validation
 *
 * Переваги такого підходу:
 * - Переиспользуемість (один компонент для всіх полів)
 * - Консистентність UI/UX
 * - Легке додавання нових полів
 * - Централізоване управління виглядом полів
 */

type FormFieldProps = {
  id: string
  label: string
  name: string
  type?: string
  autoComplete?: string
  error?: string
  placeholder: string
  successMessage: string
}

const FormField = ({
  id,
  label,
  name,
  type = 'text',
  autoComplete,
  error,
  placeholder,
  successMessage
}: FormFieldProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      {/*
       * FORMIK FIELD - автоматично зв'язується з Formik context:
       * - name prop зв'язує з відповідним полем у values/errors
       * - автоматично обробляє onChange, onBlur
       * - синхронізується з Formik state
       */}
      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />

      {/*
       * FORMIK ERROR MESSAGE - автоматично показує помилки валідації:
       * - name prop зв'язує з errors[name] з Formik
       * - показується тільки якщо є помилка для цього поля
       * - автоматично оновлюється при зміні валідації
       */}
      <ErrorMessage name={name} component="div" className="error" />

      {/*
       * КАСТОМНИЙ SUCCESS MESSAGE:
       * - error prop передається з LoginForm (errors.login/errors.password)
       * - показується тільки коли error = undefined (поле валідне)
       * - працює синхронно з Formik валідацією завдяки validateOnMount
       */}
      <SuccessMessage message={successMessage} error={error} />
    </div>
  )
}

export default FormField
