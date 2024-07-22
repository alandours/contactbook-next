import { Section } from "@/components/Section"
import { Textarea } from "@/ui"
import { Icons } from "@/ui/icons"

import { AliasesSection } from "../Sections/AliasesSection"
import { NumbersSection } from "../Sections/NumbersSection"
import { EmailsSection } from "../Sections/EmailsSetions"
import { SocialsSection } from "../Sections/SocialsSection"

export const ContactSecondaryForm = () => (
  <>
    <AliasesSection />
    <NumbersSection />
    <EmailsSection />
    <SocialsSection />
    <Section title="Notes" icon={Icons.notes} sticky>
      <Textarea name="notes" />
    </Section>
  </>
)
