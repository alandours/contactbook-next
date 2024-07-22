import { NotFound } from "@/components/NotFound"
import { NotFoundType } from "@/types"

export default function NotFoundPage() {
  return <NotFound page={NotFoundType.CONTACT} />
}
