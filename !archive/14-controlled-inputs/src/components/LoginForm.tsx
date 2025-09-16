import { type FormEvent, useState, type ChangeEvent } from 'react'

interface LoginFormData {
  username: string
  password: string
}

const initialFormData: LoginFormData = {
  username: '',
  password: ''
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>(initialFormData)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          value={formData.username}
          onChange={handleChange}
          className="form-control"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="off"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  )
}

export default LoginForm
