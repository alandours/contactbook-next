import { Link } from '@/ui'
import { DatafieldContainer, DataContainer, Name, Label, Text } from './styles'
import { ButtonVariants } from '@/types'

type DataField = {
  name: string
  label?: string
  url?: string | null
  external?: boolean
}

export const Datafield = ({ name, label, url, external = true }: DataField) => (
  <DatafieldContainer>
    {url || label ? (
      <Link
        href={url || '#'}
        variant={ButtonVariants.DATAFIELD}
        external={external}
      >
        <Name>{name}</Name>
        <Label>{label}</Label>
      </Link>
    ) : (
      <Text>{name}</Text>
    )}
  </DatafieldContainer>
)
