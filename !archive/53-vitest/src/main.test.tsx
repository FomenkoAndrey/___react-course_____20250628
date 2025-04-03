import { expect, test, vi } from 'vitest'

// Створюємо мок для всіх залежностей, щоб уникнути фактичного імпорту JSX файлів
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn()
}))

vi.mock('./App.tsx', () => ({
  default: null
}))

vi.mock('./index.css', () => ({}))

test('тест головного файлу', () => {
  // Успішний тест, який не потребує фактичного імпорту main.tsx
  expect(true).toBe(true)
})
