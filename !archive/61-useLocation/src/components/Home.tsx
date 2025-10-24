import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Це головна сторінка</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Демонстрація посилань з параметрами:</h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1rem'
          }}
        >
          <Link
            to="/location?name=John&age=25&city=Kyiv"
            style={{
              textDecoration: 'none',
              color: '#007bff',
              padding: '0.5rem 1rem',
              border: '1px solid #007bff',
              borderRadius: '4px',
              backgroundColor: '#f8f9fa'
            }}
          >
            Location з пошуковими параметрами (name=John&age=25&city=Kyiv)
          </Link>

          <Link
            to="/location#section1"
            style={{
              textDecoration: 'none',
              color: '#28a745',
              padding: '0.5rem 1rem',
              border: '1px solid #28a745',
              borderRadius: '4px',
              backgroundColor: '#f8f9fa'
            }}
          >
            Location з хешем (#section1)
          </Link>

          <Link
            to="/location?tab=settings&mode=advanced#help"
            style={{
              textDecoration: 'none',
              color: '#dc3545',
              padding: '0.5rem 1rem',
              border: '1px solid #dc3545',
              borderRadius: '4px',
              backgroundColor: '#f8f9fa'
            }}
          >
            Location з параметрами та хешем (?tab=settings&mode=advanced#help)
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
