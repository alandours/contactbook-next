import styled from "styled-components"
import Link from "next/link"

import { FontSize, FontWeight } from "@/theme/typography"

export const ContactLinkContainer = styled(Link)`
  align-items: center;
  border-radius: 2px;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  position: relative;
  transition: all ease 200ms;

  &:hover {
    background: ${({ theme }) => theme.selected.main[2]};
    transition: all ease 100ms;
  }
`

export const Date = styled.div`
  color: ${({ theme }) => theme.mainColor.dark};
  font-weight: ${FontWeight.MEDIUM};
  margin-right: 1rem;
  text-align: center;
  width: 35px;
`

export const NamedDate = styled.span`
  border-radius: 2px;
  color: ${({ theme }) => theme.mainColor.dark};
  font-size: 0.7rem;
  font-weight: ${FontWeight.SEMIBOLD};
  margin-left: 0;
  padding: 0.125rem 0.5rem;
  text-align: center;
  text-transform: uppercase;
`

export const Name = styled.div`
  color: ${({ theme }) => theme.selected.contrast[1]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 420ms ease;
  transition-property: color;
`

export const Age = styled.div`
  color: ${({ theme }) => theme.selected.contrast[3]};
`
