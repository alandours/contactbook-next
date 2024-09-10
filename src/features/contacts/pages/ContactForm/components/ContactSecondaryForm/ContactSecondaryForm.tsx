import { Section } from '@/components/Section'
import { Textarea } from '@/ui'
import { Icons } from '@/ui/icons'

import { TagsSection } from '../Sections/TagsSection'
import { AliasesSection } from '../Sections/AliasesSection'
import { NumbersSection } from '../Sections/NumbersSection'
import { EmailsSection } from '../Sections/EmailsSection'
import { SocialsSection } from '../Sections/SocialsSection'
import { RelationsSection } from '../Sections/RelationsSection'

export const ContactSecondaryForm = () => (
  <>
    <TagsSection />
    <AliasesSection />
    <NumbersSection />
    <EmailsSection />
    <SocialsSection />
    <RelationsSection />
    <Section title="Notes" icon={Icons.notes} sticky>
      <Textarea name="notes" />
    </Section>
  </>
)
