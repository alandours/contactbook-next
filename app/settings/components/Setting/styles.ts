import styled from "styled-components"

export const SettingContainer = styled.li`
  align-items: center;
  margin: 0.5rem 0;
  display: flex;
`

export const SettingLabel = styled.span<{ labelFirst: boolean }>`
  margin-left: 1rem;
  transition: all 420ms ease;
  transition-property: color;

  ${({ labelFirst }) =>
    !!labelFirst &&
    `
    margin-right: 1rem;
    margin-left: 0;
    order: -10;
  `}
`
