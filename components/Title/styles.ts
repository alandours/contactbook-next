import styled from "styled-components"
import { FontSize, FontWeight } from "@/theme/typography"
import { screen } from "@/theme/screen"

export const TitleContainer = styled.h1`
  align-items: center;
  color: ${({ theme }) => theme.selected.contrast[1]};
  display: flex;
  font-size: ${FontSize.LARGE};
  font-weight: ${FontWeight.BOLD};
  margin: 0.5rem 0;
  transition: all 420ms ease;
  transition-property: color;

  ${screen.xs(`
    font-size: ${FontSize.XL};
  `)}

  ${screen.lg(`
    font-size: ${FontSize.XXL};
  `)}
`
