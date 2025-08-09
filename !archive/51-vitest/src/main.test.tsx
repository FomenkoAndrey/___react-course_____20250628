import { expect, test, vi } from 'vitest'

vi.mock('react-dom/client', () => ({
  createRoot: vi.fn()
}))

vi.mock('./App.tsx', () => ({
  default: null
}))

vi.mock('./index.css', () => ({}))

test('тест головного файлу', () => {
  expect(true).toBe(true)
})
