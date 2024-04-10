import { css } from "styled-components"
import { Styles } from "styled-components/dist/types"

enum Breakpoints {
  VIEWPORT_360 = 360,
  VIEWPORT_480 = 480,
  VIEWPORT_768 = 768,
  VIEWPORT_992 = 992,
  VIEWPORT_1024 = 1024,
  VIEWPORT_1280 = 1280,
}

const getResponsiveStyles = (breakpoint: number, styles: Styles<object>) => css`
  @media screen and (min-width: ${breakpoint}px) {
    ${css(styles)}
  }
`

export const screen = {
  xs: (styles: Styles<object>) =>
    getResponsiveStyles(Breakpoints.VIEWPORT_360, styles),
  sm: (styles: Styles<object>) =>
    getResponsiveStyles(Breakpoints.VIEWPORT_480, styles),
  md: (styles: Styles<object>) =>
    getResponsiveStyles(Breakpoints.VIEWPORT_768, styles),
  lg: (styles: Styles<object>) =>
    getResponsiveStyles(Breakpoints.VIEWPORT_1024, styles),
  custom: (size: number, styles: Styles<object>) =>
    getResponsiveStyles(size, styles),
}
