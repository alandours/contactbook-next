import { css } from "styled-components"

enum Breakpoints {
  VIEWPORT_360 = 360,
  VIEWPORT_480 = 480,
  VIEWPORT_768 = 768,
  VIEWPORT_992 = 992,
  VIEWPORT_1024 = 1024,
  VIEWPORT_1280 = 1280,
}

const getResponsiveStyles = (breakpoint: number, styles: string) => css`
  @media screen and (min-width: ${breakpoint}px) {
    ${styles}
  }
`

export const screen = {
  xs: (styles: string) => getResponsiveStyles(Breakpoints.VIEWPORT_360, styles),
  sm: (styles: string) => getResponsiveStyles(Breakpoints.VIEWPORT_480, styles),
  md: (styles: string) => getResponsiveStyles(Breakpoints.VIEWPORT_768, styles),
  lg: (styles: string) =>
    getResponsiveStyles(Breakpoints.VIEWPORT_1024, styles),
  custom: (size: number, styles: string) => getResponsiveStyles(size, styles),
}
