import { useState, useEffect, useContext, useCallback } from 'react'

import { UIContext } from '@/ui/context'

import { ToastContainer, CloseButton, ToastWrapper } from './styles'

export const Toast = () => {
  const { toast, setToast } = useContext(UIContext)
  const [visible, setVisible] = useState(true)

  const { message, status } = toast || {}

  const closeMessage = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setToast(null)
    }, 250)
  }, [setToast])

  useEffect(() => {
    const timeOut = 4000

    if (message) {
      const messageTimeout = setTimeout(() => {
        closeMessage()
        clearTimeout(messageTimeout)
      }, timeOut)
    }

    return () => setVisible(true)
  }, [message, closeMessage, status])

  return (
    !!message &&
    !!status && (
      <ToastWrapper>
        <ToastContainer $status={status} $visible={visible}>
          {message}
          <CloseButton
            type="button"
            $status={status}
            handleClick={closeMessage}
          />
        </ToastContainer>
      </ToastWrapper>
    )
  )
}
