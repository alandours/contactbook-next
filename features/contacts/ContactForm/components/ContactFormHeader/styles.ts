import styled from "styled-components"

import { Checkbox } from "@/ui"
import { zindex } from "@/ui/constants"
import { responsive } from "@/ui/responsive"
import { FontWeight } from "@/ui/typography"

export const ContactFormHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  width: 100%;
  z-index: 1000;

  ${responsive.lg(`
    flex-direction: row;
  `)}
`

export const PhotoLabel = styled.label`
  position: relative;
  cursor: pointer;

  &:before {
    content: "Change photo";
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    color: #eee;
    display: flex;
    font-weight: ${FontWeight.SEMIBOLD};
    justify-content: center;
    opacity: 1;
    position: absolute;
    top: 6px;
    left: 6px;
    width: 208px;
    height: 208px;
    transition: all ease 200ms;
    z-index: ${zindex.tooltip};

    ${responsive.md(`
      width: 188px;
      height: 188px;
    `)}

    ${responsive.lg(`
      opacity: 0;
    `)}
  }

  &:hover {
    &:before {
      opacity: 1;
      transition: all ease 400ms;
    }
  }
`

export const ImageInput = styled.input`
  display: none;
`

export const RemovePhotoCheckbox = styled(Checkbox)`
  margin-top: 0.5rem;
`
