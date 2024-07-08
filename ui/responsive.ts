import { css } from 'styled-components'

enum Breakpoints {
  VIEWPORT_360 = 360,
  VIEWPORT_480 = 480,
  VIEWPORT_768 = 768,
  VIEWPORT_1024 = 1024,
}

export const responsive = {
  xs: (styles: string) => css`
    @media screen and (min-width: ${Breakpoints.VIEWPORT_360}px) {
      ${styles}
    }
  `,
  sm: (styles: string) => css`
    @media screen and (min-width: ${Breakpoints.VIEWPORT_480}px) {
      ${styles}
    }
  `,
  md: (styles: string) => css`
    @media screen and (min-width: ${Breakpoints.VIEWPORT_768}px) {
      ${styles}
    }
  `,
  lg: (styles: string) => css`
    @media screen and (min-width: ${Breakpoints.VIEWPORT_1024}px) {
      ${styles}
    }
  `,
  custom: (size: number, styles: string) => css`
    @media screen and (min-width: ${size}px) {
      ${styles}
    }
  `,
}

const devices = {
  mobileXs: () => Breakpoints.VIEWPORT_360,
  mobile: () => Breakpoints.VIEWPORT_480,
  tablet: () => Breakpoints.VIEWPORT_768,
  desktop: () => Breakpoints.VIEWPORT_1024,
  custom: (custom?: string) => custom,
}

export const isMedia = (media: keyof typeof devices, custom?: string) => {
  if (typeof window !== 'undefined') {
    return window?.matchMedia(
      `(min-width: ${Number(devices[media](custom))}px)`
    ).matches
  }

  return false
}
