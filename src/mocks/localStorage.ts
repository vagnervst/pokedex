type mockedLocalStorage = {
  getItem: (key: string) => unknown,
  setItem: (key: string, value: string) => void,
  removeItem: (key: string) => void,
  clear: () => void,
}

const mockedLocalStorage = (): mockedLocalStorage => {
  let store: {[key: string]: string} = {}

  return {
    getItem: (key: string) => store[key],
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
}

export default mockedLocalStorage
