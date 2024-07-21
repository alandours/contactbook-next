import "styled-components"

import { theme } from "@/ui/palette"

type CustomTheme = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
