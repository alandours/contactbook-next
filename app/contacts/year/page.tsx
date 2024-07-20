import { getStats } from "@/actions/actions"
import { ContactsByYear } from "./ContactsByYear"

export default async function YearPage() {
  const stats = await getStats()
  return <ContactsByYear stats={stats} />
}