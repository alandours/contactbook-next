import styled, { css } from 'styled-components'
import Image from 'next/image'

import { responsive } from '@/ui/responsive'

export const ProfilePictureContainer = styled(Image)<{ $thumbnail: boolean }>`
  ${({ theme, $thumbnail, onClick }) => css`
    border: 6px solid ${theme.selected.main[1]};
    border-radius: 100%;
    box-shadow: 0 0 5px ${theme.selected.contrast[4]};
    height: 220px;
    margin: auto;
    min-height: 220px;
    min-width: 220px;
    object-fit: cover;
    position: relative;
    width: 220px;

    ${responsive.md(`
      margin: 0;
      height: 200px;
      min-height: 200px;
      min-width: 200px;
      width: 200px;
    `)}

    ${!!onClick &&
    css`
      &:hover {
        cursor: pointer;
      }
    `};

    ${!!$thumbnail &&
    css`
      border-width: 2px;
      height: 30px;
      margin: 0;
      min-height: 30px;
      min-width: 30px;
      width: 30px;

      ${responsive.md(`
        height: 30px;
        margin: 0;
        min-height: 30px;
        min-width: 30px;
        width: 30px;
      `)}

      &:hover {
        cursor: initial;
      }
    `};
  `}
`
