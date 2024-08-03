import styled, { css } from 'styled-components'

export const StylesWrapper = styled.div`
  width: 100%;

  ${({ theme }) => css`
    .contactbook-select {
      &__control {
        border: 0;
        border-bottom: 1px solid ${theme.selected.contrast[4]};
        border-radius: 0;
        box-shadow: none;
        background: ${theme.selected.main[1]};
        cursor: pointer;
        min-height: auto;
        padding: 0;

        &:hover,
        &:active,
        &:focus {
          border-color: ${theme.mainColor.main};
        }
      }

      &__indicator {
        padding: 0 0.25rem;
      }

      &__input-container {
        color: ${theme.selected.contrast[1]};
      }

      &__menu-notice {
        font-size: 0.875rem;
      }

      &__multi-value {
        background: ${theme.selected.contrast[1]};
        border-radius: 1rem;
        color: ${theme.selected.main[2]};
        padding: 0.125rem 0.625rem;

        &__label {
          padding: 0;
        }

        &__remove {
          margin-top: 0.125rem;
          margin-right: -0.5rem;

          &:hover {
            color: ${theme.selected.danger.dark};
            background: inherit;
          }
        }
      }

      &__single-value {
        color: ${theme.selected.contrast[1]};
      }

      &__value-container {
        padding: 0.125rem 0;
      }
    }
  `}
`

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.selected.main[3]};

    .contactbook-select__menu-list {
      padding: 0;
      box-shadow: 0 0 4px 0 ${theme.selected.main[2]};
    }
  `}
`

export const OptionContainer = styled.div<{
  $isFocused: boolean
  $isSelected: boolean
}>`
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;

  ${({ theme, $isFocused }) => css`
    color: ${theme.selected.contrast[1]};
    background: ${$isFocused ? theme.selected.main[4] : theme.selected.main[3]};
  `}
`

export const SelectedIcon = styled.span`
  ${({ theme }) => css`
    color: ${theme.mainColor.main};
  `}
`

export const NoOptions = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.selected.contrast[1]};
    display: flex;
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  `}
`
