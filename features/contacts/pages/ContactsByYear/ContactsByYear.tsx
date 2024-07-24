"use client"

import React, { MouseEvent, useContext } from "react"

import { PageHeader } from "@/components/PageHeader"
import { Section } from "@/components/Section"
import { ContactsContext } from "@/features/contacts/context"
import { Loader } from "@/ui"

import { ContactsByYearContainer, Stats, Stat, Year, Quantity } from "./styles"

interface ContactByYearProps {
  stats: { yearMet: number | null; _count: number }[]
}

export const ContactsByYear = ({ stats }: ContactByYearProps) => {
  const { filters, updateFilters } = useContext(ContactsContext)

  const years = stats.map((stat) => stat.yearMet)
  const statsHeight = 400

  const clearFilter = (e: MouseEvent) => {
    const { dataset } = e.target as HTMLDivElement

    if (!dataset.stat) {
      updateFilters({ key: "year", remove: true })
    }
  }

  const handleStatClick = (year: number) => {
    updateFilters({ key: "year", value: year })
  }

  const renderStats = () => {
    const values = stats.map((stat) => stat._count)
    const max = Math.max(...values)

    return stats.map(({ yearMet, _count: quantity }) => {
      if (!yearMet) return null
      const height = (statsHeight / max) * quantity

      return (
        <Stat
          onClick={() => handleStatClick(yearMet)}
          height={height}
          isActive={filters.year === yearMet}
          data-stat={yearMet}
          key={yearMet}
        >
          <Year>{yearMet}</Year>
          <Quantity>{quantity}</Quantity>
        </Stat>
      )
    })
  }

  const subtitle = !!years.length
    ? `From ${years[0]} to ${years[years.length - 1]}`
    : ""

  return stats ? (
    <ContactsByYearContainer onClick={clearFilter}>
      <PageHeader title="Contacts by year" subtitle={subtitle} />
      <Section title="Contacts by year">
        <Stats height={statsHeight}>{renderStats()}</Stats>
      </Section>
    </ContactsByYearContainer>
  ) : (
    <Loader />
  )
}
