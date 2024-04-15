"use client"

import { FooterContainer } from "./styles"

export const Footer = () => (
  <FooterContainer>{`© ${new Date().getFullYear()} Alan Dours`}</FooterContainer>
)
