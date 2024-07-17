'use client'

import { useContext } from 'react'

import { Section } from '@/components/Section'
import { ColorSelector } from '@/features/settings/ColorSelector'
import { Setting } from '@/features/settings/Setting'
import { Switch } from '@/ui'
import { UIContext } from '@/ui/context'
import { Colors, ThemeColor, colors, getTheme, palette } from '@/ui/palette'

export const ColorSettings = () => {
  const { themeKey, setTheme } = useContext(UIContext)

  const toggleDarkTheme = (active: boolean) => {
    const theme = active ? ThemeColor.DARK : ThemeColor.LIGHT

    if (active) {
      localStorage.setItem('darkTheme', theme.toString())
    } else {
      localStorage.removeItem('darkTheme')
    }

    setTheme((prevTheme) => ({ ...prevTheme, selected: palette[theme] }))
  }

  const changeMainColor = (color: Colors) => {
    localStorage.setItem('mainColor', color.toString())
    setTheme((prevTheme) => ({ ...prevTheme, mainColor: colors[color] }))
  }
  const colorKeys = Object.keys(Colors).filter(
    (v) => !isNaN(Number(v))
  ) as Array<keyof typeof Colors>

  const ColorButtons = colorKeys.map((key) => {
    const colorKey = key as unknown as Colors
    return (
      <ColorSelector
        key={colorKey}
        colorKey={colorKey}
        handleClick={changeMainColor}
      />
    )
  })

  return (
    <Section title="Colors">
      <Setting label="Dark theme">
        <Switch
          active={!!localStorage.getItem('darkTheme')}
          handleClick={toggleDarkTheme}
        />
      </Setting>
      <Setting label="Main Color:" labelFirst>
        {ColorButtons}
      </Setting>
    </Section>
  )
}
