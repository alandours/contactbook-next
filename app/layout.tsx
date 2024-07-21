import { Metadata } from "next"
import { Open_Sans } from "next/font/google"

import { getContacts } from "@/actions/actions"
import { ThemeClient } from "@/components/ThemeClient"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { MainContent } from "@/components/MainContent"
import { Footer } from "@/components/Footer"
import { ContactList } from "@/components/ContactList"
import { ContactsProvider } from "@/features/contacts/context"
import StyledComponentsRegistry from "@/lib/registry"
import { UIProvider } from "@/ui/context"

import { ContactBook, Main } from "./styles"

import "./globals.css"

const inter = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ContactBook",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const contacts = await getContacts()

  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <UIProvider>
            <ThemeClient>
              <ContactsProvider data={contacts}>
                <ContactBook>
                  <Header />
                  <Main>
                    <Sidebar>
                      <ContactList hasSearch />
                    </Sidebar>
                    <MainContent>{children}</MainContent>
                  </Main>
                  <Footer />
                </ContactBook>
              </ContactsProvider>
            </ThemeClient>
          </UIProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
