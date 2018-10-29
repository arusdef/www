import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Column } from './Grid'
import { Text } from './Text'
import Link from './Link'
import Icon from './Icon'
import Section from './Section'
import { ScrollButton } from './Button'
import routes from '../routes'
import { colors, breakpoints, fluidRange } from '../style'

const CopyrightText = styled(Text)`
  font-size: ${fluidRange(9, 12)};

  @media ${breakpoints.medium} {
    font-size: ${12 / 15.2}vw;
  }
`

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              name
              adress
              zipcode
              city
              email
              phone
              facebook
              instagram
              linkedin
              github
            }
          }
        }
      `}
    >
      {({ site: { siteMetadata } }) => (
        <Section as="footer" bg={colors.ice} py={[4, 7]}>
          <Grid>
            <Column tablet="3">
              <Text>
                {siteMetadata.name} <br />
                {siteMetadata.adress} <br />
                {siteMetadata.zipcode} {siteMetadata.city}
              </Text>
            </Column>
            <Column tablet="3">
              <Text>
                <Link
                  textColor={colors.dark}
                  thin
                  href={`mailto:${siteMetadata.email}`}
                >
                  {siteMetadata.email}
                </Link>
                <br />
                <Link
                  textColor={colors.dark}
                  thin
                  href={`tel:${siteMetadata.phone}`}
                >
                  {siteMetadata.phone}
                </Link>
              </Text>
            </Column>
            <Column tablet="3">
              <Text>
                <Link
                  textColor={colors.dark}
                  thin
                  href={siteMetadata.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
                <br />
                <Link
                  textColor={colors.dark}
                  thin
                  href={siteMetadata.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
                <br />
                <Link
                  textColor={colors.dark}
                  thin
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                <br />
                <Link
                  textColor={colors.dark}
                  thin
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
                <br />
              </Text>
            </Column>
            <Column tablet="3">
              <Text as="ul">
                {routes.map(route => (
                  <li key={route.link}>
                    <Link to={route.link} textColor={colors.dark} thin>
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
                © 2018 Strateg Marknadsföring
              </CopyrightText>
            </Column>
            <Column width="auto">
              <ScrollButton
                onClick={(event) => {
                  event.preventDefault()
                  window.scroll({
                    top: 0,
                    behavior: 'smooth',
                  })
                }}
              >
                <Icon name={['fal', 'long-arrow-up']} />
              </ScrollButton>
            </Column>
          </Grid>
        </Section>
      )}
    </StaticQuery>
  )
}
