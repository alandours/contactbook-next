import React from "react"

import { Icon } from "@/ui/Icon"
import { Icons } from "@/utils/icons"

import { LoaderContainer } from "./styles"

export const Loader = () => (
  <LoaderContainer>
    <Icon name={Icons.spinner} />
  </LoaderContainer>
)
