import styled, { css } from "styled-components"

import { FontSize, FontWeight } from "@/theme/typography"
import { screen } from "@/theme/screen"

export const ContactsByYearContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  width: 100%;
`

export const Stats = styled.div<{ height: number }>`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0rem 3.6rem;

  ${({ height }) =>
    !!height &&
    css`
      height: ${height * 0.8}px;

      ${screen.md(`
        height: ${height}px;
      `)}
    `};

  ${screen.md(`  
    margin: 3rem 2rem;
    max-width: 100%;
  `)}
`

export const Year = styled.div`
  bottom: -40px;
  color: ${({ theme }) => theme.selected.contrast[2]};
  font-size: ${FontSize.SMALL};
  font-weight: ${FontWeight.LIGHT};
  left: calc(50% - 17px);
  position: absolute;
  transform: rotate(90deg);
`

export const Quantity = styled.div`
  color: ${({ theme }) => theme.mainColor.dark};
  display: flex;
  font-size: ${FontSize.SMALL};
  font-weight: ${FontWeight.REGULAR};
  justify-content: center;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: -20px;
  width: 100%;
`

export const Stat = styled.div<{ height: number; isActive: boolean }>`
  background: ${({ theme }) => theme.mainColor.dark};
  cursor: pointer;
  min-width: 50px;
  width: 100%;
  position: relative;

  & + & {
    margin-left: 2px;
  }

  &:hover {
    background: ${({ theme }) => theme.mainColor.light};
    transition: 200ms;
  }

  &:hover ${Quantity} {
    opacity: 1;
    transition: 200ms;
  }

  ${({ height }) =>
    !!height &&
    css`
      height: ${height * 0.8}px;
    `}

  ${({ isActive }) =>
    !!isActive &&
    css`
      background: ${({ theme }) => theme.mainColor.light};

      & ${Quantity} {
        opacity: 1;
        transition: 200ms;
      }
    `}



    ${({ height }) =>
    !!height &&
    css`
      height: ${height}px;

      ${screen.md(`
        min-width: 5px;
      `)}
    `}
`