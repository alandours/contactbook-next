'use client'

import { ROUTES } from '@/constants/routes'
import { lighten, darken } from 'polished'

export enum Colors {
  GREEN = 1,
  BLUE,
  RED,
  PURPLE,
  ORANGE,
  TURQUOISE,
  PINK,
}

export enum ThemeColor {
  DARK,
  LIGHT,
}

const danger = {
  main: '#d42222',
  light: lighten('0.02', '#d42222'),
  dark: darken('0.1', '#d42222'),
}

const warning = {
  main: '#d4ca22',
  light: lighten('0.02', '#d4ca22'),
  dark: darken('0.1', '#d4ca22'),
}

export const palette = {
  [ThemeColor.LIGHT]: {
    main: {
      1: '#ffffff',
      2: darken('0.02', '#ffffff'),
      3: darken('0.06', '#ffffff'),
      4: darken('0.15', '#ffffff'),
      shadow: darken('0.15', '#ffffff'),
    },
    contrast: {
      1: '#000000',
      2: lighten('0.45', '#000000'),
      3: lighten('0.6', '#000000'),
      4: lighten('0.78', '#000000'),
    },
    danger,
    warning,
  },
  [ThemeColor.DARK]: {
    main: {
      1: lighten('0.06', '#080808'),
      2: '#080808',
      3: lighten('0.1', '#080808'),
      4: lighten('0.12', '#080808'),
      shadow: darken('0.1', '#080808'),
    },
    contrast: {
      1: '#e9e9e9',
      2: darken('0.4', '#e9e9e9'),
      3: darken('0.5', '#e9e9e9'),
      4: darken('0.75', '#e9e9e9'),
    },
    danger,
    warning,
  },
}

export const colors = {
  [Colors.GREEN]: {
    main: '#12c450',
    light: lighten('0.1', '#12c450'),
    dark: darken('0.2', '#12c450'),
    name: 'Green',
  },
  [Colors.BLUE]: {
    main: '#158de8',
    light: lighten('0.1', '#158de8'),
    dark: darken('0.2', '#158de8'),
    name: 'Blue',
  },
  [Colors.RED]: {
    main: '#f31717',
    light: lighten('0.1', '#f31717'),
    dark: darken('0.2', '#f31717'),
    name: 'Red',
  },
  [Colors.PURPLE]: {
    main: '#9a60ed',
    light: lighten('0.1', '#9a60ed'),
    dark: darken('0.2', '#9a60ed'),
    name: 'Purple',
  },
  [Colors.ORANGE]: {
    main: '#de9d2b',
    light: lighten('0.1', '#de9d2b'),
    dark: darken('0.2', '#de9d2b'),
    name: 'Orange',
  },
  [Colors.TURQUOISE]: {
    main: '#12d0ae',
    light: lighten('0.1', '#12d0ae'),
    dark: darken('0.2', '#12d0ae'),
    name: 'Turquoise',
  },
  [Colors.PINK]: {
    main: '#e8158c',
    light: lighten('0.1', '#e8158c'),
    dark: darken('0.2', '#e8158c'),
    name: 'Pink',
  },
}

export const DEFAULT_PHOTOS = {
  [Colors.GREEN]: ROUTES.profilePictures('default/contact-1.jpg'),
  [Colors.BLUE]: ROUTES.profilePictures('default/contact-2.jpg'),
  [Colors.RED]: ROUTES.profilePictures('default/contact-3.jpg'),
  [Colors.PURPLE]: ROUTES.profilePictures('default/contact-4.jpg'),
  [Colors.ORANGE]: ROUTES.profilePictures('default/contact-5.jpg'),
  [Colors.TURQUOISE]: ROUTES.profilePictures('default/contact-6.jpg'),
  [Colors.PINK]: ROUTES.profilePictures('default/contact-7.jpg'),
}

export const theme = {
  selected: palette[ThemeColor.LIGHT],
  mainColor: colors[Colors.GREEN],
}

export const getMainColor = () =>
  (typeof window !== 'undefined' &&
    (localStorage.getItem('mainColor') as Colors | null)) ||
  Colors.GREEN

export const getTheme = () =>
  typeof window !== 'undefined' && localStorage.getItem('darkTheme')
    ? ThemeColor.DARK
    : ThemeColor.LIGHT
