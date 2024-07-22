import { SwitchButtonContainer, SwitchContainer } from "./styles"

interface SwitchProps {
  active: boolean
  handleClick: (active: boolean) => void
}

export const Switch = ({ active = false, handleClick }: SwitchProps) => (
  <SwitchContainer onClick={() => handleClick(!active)} active={active}>
    <SwitchButtonContainer active={active} />
  </SwitchContainer>
)
