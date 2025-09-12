const randomizer = (from: number = 0, to: number = 100) => {
  return Math.floor(Math.random() * (to - from + 1)) + from
}

export default randomizer
