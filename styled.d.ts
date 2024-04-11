import "styled-components"
import { theme } from "@/theme/palette"

type CustomTheme = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
