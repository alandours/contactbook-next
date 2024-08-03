import { ReactNode, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { DropzoneContainer, DropzoneOverlay } from './styles'
import { isMedia } from '../responsive'

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
      <input type="file" {...getInputProps()} />
      <DropzoneOverlay>
        {isMedia('desktop') ? (
          isDragActive ? (
            <p>Drop it</p>
          ) : (
            <p>Drag a new photo</p>
          )
        ) : (
          <p>Change photo</p>
        )}
      </DropzoneOverlay>
      {children}
    </DropzoneContainer>
  )
}
