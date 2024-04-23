import { Metadata } from "next"
import { Open_Sans } from "next/font/google"

import StyledComponentsRegistry from "@/lib/registry"

import { ThemeClient } from "@/components/ThemeClient"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { MainContent } from "@/components/MainContent"
import { Footer } from "@/components/Footer"
import { ContactList } from "@/components/ContactList"

import "./globals.css"

import { ContactBook, Main } from "./styles"

const inter = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ContactBook",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeClient>
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
          </ThemeClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
