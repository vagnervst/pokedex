import { useEffect, useState } from 'react'

type useBookmark = {
  add: (id: number) => number[],
  get: (id: number) => number | undefined,
  getAll: () => number[],
  remove: (id: number) => number[],
  loading: boolean,
}

const useBookmark = (): useBookmark => {
  const [bookmarks, setBookmarks] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const bookmarked = localStorage.getItem('bookmarks')

    if (bookmarked) {
      setBookmarks(JSON.parse(bookmarked))
    }

    setLoading(false)
  }, [])

  const setLocalStorage = (newState: number[]) => {
    localStorage.setItem('bookmarks', JSON.stringify(newState))
  }

  const setState = (newState: number[]) => {
    setBookmarks(newState)
    setLocalStorage(newState)

    return bookmarks
  }

  const add = (id: number) => {
    const newBookmarks = [
      ...bookmarks.filter(pid => pid !== id),
      id,
    ]

    return setState(newBookmarks)
  }

  const remove = (id: number) => {
    const newBookmarks = [
      ...bookmarks.filter(pid => pid !== id)
    ]

    return setState(newBookmarks)
  }

  const get = (id: number) =>
    bookmarks.find(pid => pid === id)

  const getAll = () => bookmarks

  return {
    add,
    get,
    getAll,
    remove,
    loading,
  }
}

export default useBookmark
