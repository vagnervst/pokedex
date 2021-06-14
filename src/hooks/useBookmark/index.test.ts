import { act, renderHook } from '@testing-library/react-hooks'

import useBookmark from '.'

beforeEach(() => {
  localStorage.clear()
})

it('should start empty when there are no bookmarks on localstorage', () => {
  const { result } = renderHook(() => useBookmark())

  expect(result.current.getAll()).toHaveLength(0)
})

it('should add pokemon to bookmark list', () => {
  const { result } = renderHook(() => useBookmark())

  act(() => {
    result.current.add(1)
  })

  expect(result.current.get(1)).toEqual(1)
})

it('should remove pokemon from bookmark list', () => {
  const { result } = renderHook(() => useBookmark())

  act(() => {
    result.current.add(1)
    result.current.remove(1)
  })

  expect(result.current.get(1)).toBeFalsy()
})

it('should load initial state from localstorage', () => {
  localStorage.setItem('bookmarks', JSON.stringify([1, 2, 3]))

  const { result } = renderHook(() => useBookmark())

  const all = result.current.getAll()
  const storage = localStorage.getItem('bookmarks')

  expect(JSON.stringify(all)).toEqual(storage)
})

it('should set state to localstorage', () => {
  const { result } = renderHook(() => useBookmark())

  act(() => {
    result.current.add(1)
    result.current.add(2)
    result.current.add(3)
    result.current.remove(2)
  })

  const all = result.current.getAll()
  const storage = localStorage.getItem('bookmarks')

  expect(JSON.stringify(all)).toEqual(storage)
})
