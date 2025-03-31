const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  switch (e.target.name) {
    case 'username':
      setUsername(e.target.value)
      break
    case 'password':
      setPassword(e.target.value)
      break
    case 'confirmPassword':
      setConfirmPassword(e.target.value)
      break
    case 'email':
      setEmail(e.target.value)
      break
    default:
      break
  }
}
