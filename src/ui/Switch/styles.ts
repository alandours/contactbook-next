import styled, { css } from 'styled-components'

export const SwitchContainer = styled.div<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    background: ${theme.selected.main[4]};
    box-shadow: inset 4px 2px 6px 0 rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    cursor: pointer;
    display: flex;
    height: 15px;
    justify-content: flex-start;
    transition: all 420ms ease;
    transition-property: background, box-shadow, color;
    width: 30px;

    ${!!$active &&
    css`
      background: ${theme.mainColor.main};
      justify-content: flex-end;
    `}
  `}
`

export const SwitchButtonContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.selected.main[2]};
    border: 1px solid ${theme.selected.contrast[4]};
    box-shadow: 1px 0 1px 0 ${theme.selected.main.shadow};
    border-radius: 40px;
    transition: all 420ms ease;
    transition-property: background, border, box-shadow, color;
    width: 50%;
  `}
`
