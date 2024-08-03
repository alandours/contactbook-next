'use client'

import { ReactNode } from 'react'

import { Toast } from '@/ui'

import { MainContentContainer } from './styles'

interface MainContentProps {
  children: ReactNode
}

export const MainContent = ({ children }: MainContentProps) => (
  <>
    <MainContentContainer>{children}</MainContentContainer>
    <Toast />
  </>
)
