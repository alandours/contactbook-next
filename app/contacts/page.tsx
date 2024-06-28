import { Metadata } from "next"

import { Dashboard } from "@/components/Dashboard"

export const metadata: Metadata = {
  title: "ContactBook",
}

export default async function Contacts() {
  return <Dashboard />
}
