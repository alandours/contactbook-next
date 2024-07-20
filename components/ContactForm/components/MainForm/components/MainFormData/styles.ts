import styled, { css } from "styled-components"

import { screen } from "@/theme/screen"
import { PageHeader } from "@/components/PageHeader"
import { Checkbox } from "@/components/Form/Checkbox"

export const MainInfoContainer = styled(PageHeader)`
  padding: 1rem;
`

export const FieldContainer = styled.div<{ multiline: boolean }>`
  display: flex;
  margin: 0.25rem 0;

  ${({ multiline }) =>
    !!multiline &&
    css`
      flex-wrap: wrap;
    `}

  ${screen.md(`
    flex-wrap: nowrap;
  `)}
`

export const RemoveImageCheckbox = styled(Checkbox)`
  bottom: -6px;
  position: absolute;

  ${screen.md(`
    bottom: -10px;
  `)}
`
