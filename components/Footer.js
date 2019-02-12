import React from 'react'
import styled from 'styled-components'
import { Grid, Column } from './Grid'
import { Text } from './Text'
import Section from './Section'
import { ScrollToTopButton } from './Button'
import { colors, breakpoints, fluidRange, vw } from '../lib/style'
import { formatPhone } from '../lib/utils'
import Link from './Link'
import routes from '../lib/routes'
import siteSettings from '../content/settings.json'

const CopyrightText = styled(Text)`
  font-size: ${fluidRange({ min: 10, max: 14 })};

  @media ${breakpoints.medium} {
    font-size: ${vw(12)};
  }
`

export default function Footer() {
  return (
    <Section as="footer" bg={colors.ice} py={[4, 7]}>
      <Grid>
        <Column tablet="3">
          <Text as="address">
            {siteSettings.name} <br />
            {siteSettings.contact.address} <br />
            {siteSettings.contact.zipcode} {siteSettings.contact.city}
          </Text>
        </Column>
        <Column tablet="3">
          <Text as="address">
            {siteSettings.contact.email && (
              <>
                <a href={`mailto:${siteSettings.contact.email}`}>
                  {siteSettings.contact.email}
                </a>
                <br />
              </>
            )}
            {siteSettings.contact.phone && (
              <a href={`tel:${formatPhone(siteSettings.contact.phone)}`}>
                {siteSettings.contact.phone}
              </a>
            )}
          </Text>
        </Column>
        <Column tablet="3">
          <Text>
            <a
              href={siteSettings.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <br />
            <a
              href={siteSettings.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <br />
            <a
              href={siteSettings.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <a
              href={siteSettings.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <br />
          </Text>
        </Column>
        <Column tablet="3">
          <Text as="ul">
            {routes.map(route => (
              <li key={route.link}>
                <Link to={route.link} thin>
                  {route.title}
                </Link>
              </li>
            ))}
          </Text>
        </Column>
      </Grid>
      <Grid justifyContent="space-between" alignItems="flex-end" mt="4">
        <Column width="auto">
          <CopyrightText as="small">
            © 2018 <br />
            {siteSettings.name} <br />
            En del av{' '}
            <a
              href="//diplomatgruppen.se/sv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diplomatgruppen
            </a>
          </CopyrightText>
        </Column>
        <Column width="auto">
          <ScrollToTopButton />
        </Column>
      </Grid>
    </Section>
  )
}
