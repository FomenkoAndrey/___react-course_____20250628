import { useState, useEffect } from 'react'
import { useRevalidator } from 'react-router'

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
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`refresh-button ${isLoading ? 'loading' : ''}`}
    >
      {isLoading ? 'Оновлення...' : 'Оновити дані'}
    </button>
  )
}

// Імітація API для отримання даних
const fetchServerData = () => {
  return new Promise<string>((resolve) => {
    // Імітуємо затримку мережі
    setTimeout(() => {
      resolve(`Дані з сервера: ${Math.floor(Math.random() * 1000)}`)
    }, 1500)
  })
}

const RevalidatorDemo = () => {
  const [timeStamp, setTimeStamp] = useState(new Date().toLocaleTimeString())
  const [serverData, setServerData] = useState<string | null>(null)
  const { state } = useRevalidator()

  // Завантаження даних при першому рендері
  useEffect(() => {
    const loadInitialData = async () => {
      const data = await fetchServerData()
      setServerData(data)
      setTimeStamp(new Date().toLocaleTimeString())
    }

    loadInitialData()
  }, [])

  // Ця функція викликається при натисканні кнопки оновлення
  const updateTimestamp = () => {
    setTimeStamp(new Date().toLocaleTimeString())
  }

  // Ефект, який спрацьовує при зміні стану ревалідатора
  useEffect(() => {
    // Якщо стан ревалідатора змінився на 'loading', завантажуємо нові дані
    if (state === 'loading') {
      const loadNewData = async () => {
        const data = await fetchServerData()
        setServerData(data)
      }

      loadNewData()
    }
  }, [state])

  return (
    <div className="revalidator-demo">
      <h1>Демонстрація Revalidator</h1>

      <div className="status-panel">
        <p>
          Поточний стан ревалідатора: <strong>{state}</strong>
        </p>
        <p>
          Останнє оновлення: <strong>{timeStamp}</strong>
        </p>
        <p>
          Дані: <strong>{serverData || 'Завантаження...'}</strong>
        </p>
      </div>

      <div className="buttons">
        <RefreshButton onRefresh={updateTimestamp} />
      </div>

      <div className="info">
        <h3>Як це працює?</h3>
        <p>
          <em>
            1. При натисканні кнопки "Оновити дані" викликається{' '}
            <code>revalidate()</code> з хука <code>useRevalidator</code>.
          </em>
        </p>
        <p>
          <em>
            2. React Router змінює стан на <code>'loading'</code> і
            перезавантажує всі дані, які були завантажені через{' '}
            <code>loader</code> функції маршрутів.
          </em>
        </p>
        <p>
          <em>
            3. У нашому прикладі ми імітуємо це, завантажуючи нові дані при
            зміні стану на <code>'loading'</code>.
          </em>
        </p>
        <p>
          <em>
            4. Головна перевага:{' '}
            <strong>ви можете оновити дані з будь-якого компонента</strong>, не
            передаючи функції оновлення через пропси.
          </em>
        </p>
        <p>
          <em>
            5. Це особливо корисно для глибоко вкладених компонентів, які
            потребують оновлення даних на рівні маршруту.
          </em>
        </p>
      </div>
    </div>
  )
}

export default RevalidatorDemo

/*

✔️ Тепер я значно покращив демонстрацію, щоб показати справжню цінність хука `useRevalidator`. Ось у чому полягає показовість цього прикладу:

### Головні переваги useRevalidator:

1. **Глобальне оновлення даних**: `useRevalidator` дозволяє оновити всі дані, які були завантажені через `loader` функції маршрутів React Router, з будь-якого місця вашого додатку.

2. **Відсутність prop drilling**: Вам не потрібно передавати функції оновлення через пропси через весь дерево компонентів.

3. **Стан завантаження**: Ви отримуєте стан завантаження (`'idle'`, `'loading'`, `'submitting'`), який можна використовувати для відображення індикаторів завантаження.

### Що я додав у демонстрацію:

1. **Імітація API**: Додав функцію `fetchServerData`, яка імітує запит до сервера з затримкою 1.5 секунди.

2. **Відображення даних**: Тепер компонент показує випадкові дані, які оновлюються при ревалідації.

3. **Реакція на зміну стану**: Додав ефект, який спостерігає за станом ревалідатора і завантажує нові дані, коли стан змінюється на `'loading'`.

4. **Детальне пояснення**: Додав розділ "Як це працює?", який пояснює принцип роботи ревалідатора.

### Коли це особливо корисно:

- У великих додатках з глибоко вкладеними компонентами
- Коли потрібно оновити дані після певних дій користувача (наприклад, після успішного відправлення форми)
- Коли потрібно синхронізувати дані між різними частинами додатку

Тепер при натисканні кнопки ви побачите:
1. Зміну стану ревалідатора на `'loading'`
2. Зміну тексту кнопки на "Оновлення..."
3. Завантаження нових даних з "сервера"
4. Оновлення часової мітки
5. Повернення стану ревалідатора до `'idle'`

Це набагато краще демонструє реальне використання `useRevalidator` у продакшн-додатках.


*/
