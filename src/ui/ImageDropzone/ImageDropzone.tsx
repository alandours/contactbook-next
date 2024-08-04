import { ReactNode } from 'react'
import { useDropzone } from 'react-dropzone'

import {
  DropzoneContainer,
  HoverOverlay,
  Overlay,
  OverlayContainer,
} from './styles'

import { isMedia } from '@/ui/responsive'

interface ImageDropzoneProps {
  onDrop: (files: File[]) => void
  children: ReactNode
}

export const ImageDropzone = ({ onDrop, children }: ImageDropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => onDrop(acceptedFiles),
    accept: {
      'image/*': [],
    },
    maxFiles: 1,
  })

  return (
    <DropzoneContainer {...getRootProps()}>
      <input type="file" {...getInputProps()} aria-label="Photo" />
      <OverlayContainer>
        {isMedia('desktop') ? (
          isDragActive ? (
            <Overlay>Drop photo</Overlay>
          ) : (
            <HoverOverlay>Click or drag to change photo</HoverOverlay>
          )
        ) : (
          <Overlay>Change photo</Overlay>
        )}
      </OverlayContainer>
      {children}
    </DropzoneContainer>
  )
}
