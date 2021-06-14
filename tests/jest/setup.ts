import localStorageMock from '../../src/mocks/localStorage'

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock(),
})
