import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi
} from 'vitest'
import PostsList from './PostsList'

beforeAll(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  vi.restoreAllMocks()
})

describe('PostsList component', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.clearAllMocks()
  })

  test('loads and displays posts', async () => {
    const mockPosts = [
      { id: 1, title: 'Test Post 1', body: 'Test Body 1', userId: 1 },
      { id: 2, title: 'Test Post 2', body: 'Test Body 2', userId: 1 }
    ]

    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPosts)
    } as Response)

    render(<PostsList />)

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1)
    })

    for (const post of mockPosts) {
      expect(await screen.findByText(post.title)).toBeInTheDocument()
      expect(await screen.findByText(post.body)).toBeInTheDocument()
    }
  })

  test('displays error message on failed fetch', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Failed to fetch'))
    render(<PostsList />)
    expect(
      await screen.findByText(/Failed to fetch posts/i)
    ).toBeInTheDocument()
  })

  test('displays error message when response is not ok', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    } as Response)

    render(<PostsList />)

    expect(
      await screen.findByText(/Failed to fetch posts/i)
    ).toBeInTheDocument()
  })

  test('displays loading message while fetching posts', async () => {
    // Створюємо проміс, який можемо контролювати
    let resolvePromise!: (value: Response) => void // використовуємо ! для вказівки, що значення буде присвоєно
    const fetchPromise = new Promise<Response>((resolve) => {
      resolvePromise = resolve
    })

    vi.mocked(fetch).mockImplementationOnce(() => fetchPromise)

    render(<PostsList />)
    expect(screen.getByText(/Loading posts\.\.\./i)).toBeInTheDocument()

    // Резолвимо проміс з пустим масивом
    resolvePromise({
      ok: true,
      json: () => Promise.resolve([])
    } as Response)

    // Чекаємо поки повідомлення про завантаження зникне
    await waitFor(() => {
      expect(screen.queryByText(/Loading posts\.\.\./i)).not.toBeInTheDocument()
    })
  })
})
