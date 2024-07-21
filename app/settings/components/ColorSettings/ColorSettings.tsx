import React, { useContext } from "react"

import { Section } from "@/components/Section"
import { ToggleButton } from "@/components/ToggleButton"
import { ColorSelector } from "@/components/ColorSelector"
import { Setting } from "../Setting"
import { Colors, ThemeColor, colors, palette } from "@/ui/palette"
import { UIContext } from "@/ui/context"

export const ColorSettings = () => {
  const { setTheme } = useContext(UIContext)

  const toggleDarkTheme = (active: boolean) => {
    const theme = active ? ThemeColor.DARK : ThemeColor.LIGHT

    if (active) {
      localStorage.setItem("darkTheme", theme.toString())
    } else {
      localStorage.removeItem("darkTheme")
    }

    setTheme((prevTheme) => ({ ...prevTheme, selected: palette[theme] }))
  }

  const changeMainColor = (color: Colors) => {
    localStorage.setItem("mainColor", color.toString())
    setTheme((prevTheme) => ({ ...prevTheme, mainColor: colors[color] }))
  }
  const colorKeys = Object.keys(Colors).filter(
    (v) => !isNaN(Number(v))
  ) as Array<keyof typeof Colors>

  const ColorButtons = colorKeys.map((key) => {
    const colorKey = key as unknown as Colors
    return <ColorSelector colorKey={colorKey} handleClick={changeMainColor} />
  })

  return (
    <Section title="Colors">
      <Setting label="Dark theme">
        <ToggleButton
          initialState={!!localStorage.getItem("darkTheme")}
          handleClick={toggleDarkTheme}
        />
      </Setting>
      <Setting label="Main Color:" labelFirst>
        {ColorButtons}
      </Setting>
    </Section>
  )
}
