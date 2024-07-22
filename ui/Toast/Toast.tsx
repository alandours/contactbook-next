import { useState, useEffect, useContext } from "react"

import { Status } from "@/types"
import { UIContext } from "@/ui/context"

import { ToastContainer, CloseButton } from "./styles"

export const Toast = () => {
  const { toast, setToast } = useContext(UIContext)
  const [visible, setVisible] = useState(true)

  const { message, type } = toast || {}

  const closeMessage = () => {
    setVisible(false)
    setTimeout(() => {
      setToast(null)
    }, 250)
  }

  useEffect(() => {
    const timeOut = type === Status.SUCCESS ? 1500 : 4000

    if (message) {
      const messageTimeout = setTimeout(() => {
        closeMessage()
        clearTimeout(messageTimeout)
      }, timeOut)
    }

    return () => setVisible(true)
  }, [message])

  return (
    !!message &&
    !!type && (
      <ToastContainer status={type} visible={visible}>
        {message}
        <CloseButton type="button" status={type} handleClick={closeMessage} />
      </ToastContainer>
    )
  )
}