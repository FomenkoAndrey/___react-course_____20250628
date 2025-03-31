import { object, ref, string } from 'yup'

export const validationSchema = object({
  username: string()
    .min(3, 'Логін повинен містити не менше 3 символів')
    .max(15, 'Логін повинен містити не більше 15 символів')
    .required("Логін є обов'язковим"),
  password: string()
    .min(5, 'Пароль повинен містити не менше 5 символів')
    .max(20, 'Пароль повинен містити не більше 20 символів')
    .required("Пароль є обов'язковим"),
  confirmPassword: string()
    .oneOf([ref('password')], 'Паролі не співпадають')
    .required("Підтвердження пароля є обов'язковим"),
  email: string().email('Неправильний email').required("Email є обов'язковим")
})
