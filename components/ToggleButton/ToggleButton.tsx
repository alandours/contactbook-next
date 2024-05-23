import { useState, useEffect } from "react"

import { ToggleButtonContainer, ToggleContainer } from "./styles"

type ToggleButtonProps = {
  initialState: boolean
  handleClick: (active: boolean) => void
}

export const ToggleButton = ({
  initialState = false,
  handleClick,
}: ToggleButtonProps) => {
  const [active, setActive] = useState(initialState)

  useEffect(() => {
    handleClick(active)
  }, [active])

  return (
    <ToggleContainer
      onClick={() => setActive((prevState) => !prevState)}
      active={active}
    >
      <ToggleButtonContainer active={active} />
    </ToggleContainer>
  )
}
