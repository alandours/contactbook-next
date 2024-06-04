import { DatafieldContainer, DataContainer, Name, Label, Text } from "./styles"

type DataField = {
  name: string
  label?: string
  url?: string
}

export const Datafield = ({ name, label, url }: DataField) => (
  <DatafieldContainer>
    {url || label ? (
      <DataContainer
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        as={url ? "a" : "div"}
      >
        <Name>{name}</Name>
        <Label>{label}</Label>
      </DataContainer>
    ) : (
      <Text>{name}</Text>
    )}
  </DatafieldContainer>
)
