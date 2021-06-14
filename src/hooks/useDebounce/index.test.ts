import { renderHook } from '@testing-library/react-hooks'

import useDebounce from '.'

it('should return the debounced value', () => {
  const { result } = renderHook(() => useDebounce('testing', 400))

  expect(result.current).toEqual('testing')
})
