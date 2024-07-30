import { ReactNode, useEffect, useRef } from 'react'

import { BackdropContainer } from './styles'

interface BackdropProps {
  children: ReactNode
  handleClick: () => void
  handleKeyDown: () => void
}

export const Backdrop = ({
  children,
  handleClick,
  handleKeyDown,
}: BackdropProps) => {
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (backdropRef.current) backdropRef.current.focus()
  }, [])

  return (
    <BackdropContainer
      ref={backdropRef}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key.toLowerCase() === 'escape') handleKeyDown()
      }}
    >
      {children}
    </BackdropContainer>
  )
}
