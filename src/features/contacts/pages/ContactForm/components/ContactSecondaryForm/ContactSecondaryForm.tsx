import { Section } from '@/components/Section'
import { Textarea } from '@/ui'
import { Icons } from '@/ui/icons'

import { AliasesSection } from '../Sections/AliasesSection'
import { NumbersSection } from '../Sections/NumbersSection'
import { EmailsSection } from '../Sections/EmailsSection'
import { SocialsSection } from '../Sections/SocialsSection'
import { TagsSection } from '../Sections/TagsSection'

export const ContactSecondaryForm = () => (
  <>
    <AliasesSection />
    <NumbersSection />
    <EmailsSection />
    <SocialsSection />
    <TagsSection />
    <Section title="Notes" icon={Icons.notes} sticky>
      <Textarea name="notes" />
    </Section>
  </>
)
