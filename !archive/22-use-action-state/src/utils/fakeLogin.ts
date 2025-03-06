interface LoginData {
  username: string
  password: string
}

export const fakeLogin = async ({
  username,
  password
}: LoginData): Promise<LoginData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username !== 'admin' || password !== '123') {
        reject(new Error('Invalid username or password'))
      } else {
        resolve({ username, password })
      }
    }, 2000)
  })
}
