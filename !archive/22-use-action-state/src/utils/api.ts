interface LoginResponse {
  username: string
  password: string
}

export const fakeLogin = async ({ username, password }: LoginResponse): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username.trim() || !password.trim()) {
        reject(new Error('Username and password are required'))
      } else {
        resolve({ username, password })
      }
    }, 1000)
  })
}
