import React from "react"

import { Icon } from "@/ui"
import { Icons } from "@/ui/icons"

import { LoaderContainer } from "./styles"

export const Loader = () => (
  <LoaderContainer>
    <Icon name={Icons.spinner} />
  </LoaderContainer>
)
