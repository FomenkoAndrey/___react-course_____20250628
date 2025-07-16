interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement
  password: HTMLInputElement
}

interface LoginFormElement extends HTMLFormElement {
  elements: FormElements
}

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent<LoginFormElement>) => {
    e.preventDefault()
    const formElements = e.currentTarget.elements
    const username = formElements.username.value
    const password = formElements.password.value
    console.log({
      username,
      password
    })
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          name="username"
          id="username"
          placeholder="Enter your username"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="Enter your password"
          autoComplete="off"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm
