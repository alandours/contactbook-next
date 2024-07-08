import React, { ReactNode } from 'react'

import { ErrorMessageContainer } from './styles'

interface ErrorMessageProps {
  children: ReactNode
}

export const ErrorMessage = ({ children }: ErrorMessageProps) =>
  !!children && <ErrorMessageContainer>{children}</ErrorMessageContainer>
