import { ToggleButtonContainer, ToggleContainer } from "./styles"

type ToggleButtonProps = {
  active: boolean
  handleClick: (active: boolean) => void
}

export const ToggleButton = ({
  active = false,
  handleClick,
}: ToggleButtonProps) => (
  <ToggleContainer onClick={() => handleClick(!active)} active={active}>
    <ToggleButtonContainer active={active} />
  </ToggleContainer>
)
