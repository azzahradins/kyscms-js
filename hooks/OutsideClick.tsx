/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'

const useOutsideClick = (callback: any): React.MutableRefObject<any> => {
  const ref = React.useRef<HTMLInputElement>()

  React.useEffect(() => {
    const handleClick = (event: React.ChangeEvent<HTMLInputElement> | any): void => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref])

  return ref
}

export default useOutsideClick
