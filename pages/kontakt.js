import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Image from '../components/Image'
import { Grid, Column } from '../components/Grid'
import { H1, Excerpt, Text } from '../components/Text'
import { formatPhone } from '../lib/utils'
import { breakpoints, fluidRange, vw, colors } from '../lib/style'
import siteSettings from '../content/settings'

const RoleText = styled(Text).attrs({ textColor: colors.steel })`
  font-size: ${fluidRange({ min: 11, max: 14 })};
  line-height: 1.2em;

  @media ${breakpoints.medium} {
    font-size: ${vw(16)};
  }
`

export default function Contact() {
  return (
    <Layout title="Kontakt">
      <Hero>
        <H1>Här är vi. Allihop.</H1>
        <Excerpt>
          Vill du jobba med oss? Hos oss? Snacka om japansk kultur,
          skrattgaranti eller världens bästa låt? Det är bara att hojta till.
          Eller svänga förbi det stora, svarta huset på Slöjdgatan.
        </Excerpt>
      </Hero>
      <Section mb={[4, 7]}>
        <Grid>
          <Column tablet="4">
            <Text>
              {siteSettings.name}
              <br />
              {siteSettings.contact.address}, {siteSettings.contact.zipcode}{' '}
              {siteSettings.contact.city}
              <br />
              <a href={`mailto:${siteSettings.contact.email}`}>
                {siteSettings.contact.email}
              </a>
              <br />
              <a href={`tel:${formatPhone(siteSettings.contact.phone)}`}>
                {siteSettings.contact.phone}
              </a>
            </Text>
          </Column>
          {/* <Column tablet="4">
            <Text>
              Vill du jobba med Strateg?
              <br />
              Hör av dig till {data.clientContact.frontmatter.first_name}.
              <br />
              <a href={`mailto:${data.clientContact.frontmatter.email}`}>
                {data.clientContact.frontmatter.email}
              </a>
              <br />
              <a
                href={`tel:${formatPhone(
                  data.clientContact.frontmatter.phone,
                )}`}
              >
                {data.clientContact.frontmatter.phone}
              </a>
            </Text>
          </Column>
          <Column tablet="4">
            <Text>
              Vill du jobba eller praktisera på Strateg?
              <br />
              Hör av dig till {data.careerContact.frontmatter.first_name}.
              <br />
              <a href={`mailto:${data.careerContact.frontmatter.email}`}>
                {data.careerContact.frontmatter.email}
              </a>
              <br />
              <a
                href={`tel:${formatPhone(
                  data.careerContact.frontmatter.phone,
                )}`}
              >
                {data.careerContact.frontmatter.phone}
              </a>
            </Text>
          </Column> */}
        </Grid>
      </Section>
      <Section pb={[10, 20]}>
        <Grid>
          <Column>
            <Text>
              Vill du kontakta någon av oss skicka ett mejl till
              fornamn.efternamn[a]strateg.se
            </Text>
          </Column>
          {/* {data.employees.edges.map(({ node }) => (
            <Column key={node.id} width="6" tablet="3" bottomGap>
              {node.frontmatter.image && (
                <Image
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  sizes="(min-width: 768px) 24vw, 46vw"
                />
              )}
              <Text mt={[1, 1]} mb="0">
                {node.frontmatter.first_name} {node.frontmatter.last_name}
              </Text>
              <RoleText mb="0">{node.frontmatter.role}</RoleText>
            </Column>
          ))} */}
        </Grid>
      </Section>
    </Layout>
  )
}
