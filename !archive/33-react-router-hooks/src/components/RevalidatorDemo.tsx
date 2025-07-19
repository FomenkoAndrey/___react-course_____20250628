import { useEffect, useState } from 'react'
import { useRevalidator, useLoaderData } from 'react-router'

interface LoaderData {
  serverData: string
  timestamp: string
}

interface RefreshButtonProps {
  onRefresh: () => void
}

const RefreshButton = ({ onRefresh }: RefreshButtonProps) => {
  const { revalidate, state } = useRevalidator()
  const isLoading = state === 'loading'

  const handleClick = () => {
    revalidate()
    if (onRefresh) onRefresh()
  }

  return (
    <button onClick={handleClick} disabled={isLoading} className={`refresh-button ${isLoading ? 'loading' : ''}`}>
      {isLoading ? 'Оновлення...' : 'Оновити дані'}
    </button>
  )
}

const RevalidatorDemo = () => {
  const loaderData = useLoaderData() as LoaderData
  const [localTimestamp, setLocalTimestamp] = useState(new Date().toLocaleTimeString())
  const { state } = useRevalidator()

  const updateLocalTimestamp = () => {
    setLocalTimestamp(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    console.log('Revalidator state:', state)
    console.log('Loader data:', loaderData)
  }, [state, loaderData])

  return (
    <div className="revalidator-demo">
      <h1>Демонстрація Revalidator</h1>

      <div className="status-panel">
        <p>
          Поточний стан ревалідатора: <strong>{state}</strong>
        </p>
        <p>
          Локальний час оновлення: <strong>{localTimestamp}</strong>
        </p>
        <p>
          Час з loader'а: <strong>{loaderData?.timestamp || 'Завантаження...'}</strong>
        </p>
        <p>
          Дані з loader'а: <strong>{loaderData?.serverData || 'Завантаження...'}</strong>
        </p>
      </div>

      <div className="buttons">
        <RefreshButton onRefresh={updateLocalTimestamp} />
      </div>

      <div className="explanation">
        <h3>Пояснення:</h3>
        <ul>
          <li>
            <strong>useRevalidator</strong> працює тільки з роутами, що мають loader
          </li>
          <li>
            При натисканні кнопки викликається <code>revalidate()</code>
          </li>
          <li>Це призводить до повторного виконання loader'а роуту</li>
          <li>State змінюється на 'loading' під час ревалідації</li>
          <li>Дані автоматично оновлюються через useLoaderData</li>
        </ul>
      </div>
    </div>
  )
}

export default RevalidatorDemo
