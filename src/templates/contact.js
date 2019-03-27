import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Link from '../components/Link'
import Section from '../components/Section'
import Image from '../components/Image'
import { Grid, Column } from '../components/Grid'
import { H1, Excerpt, Text } from '../components/Text'
import { formatPhone } from '../lib/format'
import { breakpoints, fluidRange, vw, colors } from '../style'
import getMetaFromPost from '../lib/getMetaFromPost'

const RoleText = styled(Text).attrs({ textColor: colors.steel500 })`
  font-size: ${fluidRange({ min: 11, max: 14 })};
  line-height: 1.2em;

  @media ${breakpoints.medium} {
    font-size: ${vw(16)};
  }
`

export default function Contact({ data }) {
  const siteSettings = data.siteSettings.childContentJson
  const { title, excerpt } = data.page.frontmatter

  return (
    <Layout meta={getMetaFromPost(data.page)}>
      <Hero>
        <H1>{title}</H1>
        <Excerpt>{excerpt}</Excerpt>
      </Hero>
      <Section mb={[4, 7]}>
        <Grid>
          {siteSettings.offices.map(office => (
            <Column md="4" key={office.city}>
              <Text>
                <strong>{office.city}</strong>
                <br />
                {office.address}, {office.zipcode} {office.city}
                <br />
                <Link href={`mailto:${office.email}`}>{office.email}</Link>
                <br />
                <Link href={`tel:${formatPhone(office.phone)}`}>
                  {office.phone}
                </Link>
              </Text>
            </Column>
          ))}
          <Column md="4">
            <Text>
              <strong>New business</strong>
              <br />
              <Link href={`mailto:${data.clientContact.frontmatter.email}`}>
                {data.clientContact.frontmatter.email}
              </Link>
              <br />
              <Link
                href={`tel:${formatPhone(
                  data.clientContact.frontmatter.phone,
                )}`}
              >
                {data.clientContact.frontmatter.phone}
              </Link>
            </Text>
          </Column>
        </Grid>
      </Section>
      <Section pb={[10, 20]}>
        <Grid>
          <Column>
            <Text>
              Reach us directly by e-mailing firstname.surname[a]strateg.se
            </Text>
          </Column>
          {data.employees.edges.map(({ node }) => (
            <Column key={node.id} width="6" md="3" bottomGap>
              {node.frontmatter.image && (
                <Image
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  bg={colors.dark}
                  sizes="(min-width: 768px) 24vw, 46vw"
                />
              )}
              <Text mt={[1, 1]} mb="0">
                {node.frontmatter.first_name} {node.frontmatter.last_name}
              </Text>
              <RoleText mb="0">{node.frontmatter.role}</RoleText>
            </Column>
          ))}
        </Grid>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        excerpt
        seo {
          title
          description
          image {
            childImageSharp {
              og: resize(width: 1200, height: 630, quality: 80) {
                src
              }
            }
          }
        }
      }
    }
    siteSettings: file(relativePath: { eq: "settings.json" }) {
      childContentJson {
        name
        offices {
          address
          zipcode
          city
          email
          phone
        }
      }
    }
    clientContact: markdownRemark(
      frontmatter: { email: { eq: "fredrik.vannestal@strateg.se" } }
    ) {
      frontmatter {
        first_name
        email
        phone
      }
    }
    employees: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/employees/" }
        frontmatter: { published: { ne: false } }
      }
      sort: { fields: [frontmatter___first_name, frontmatter___last_name] }
    ) {
      edges {
        node {
          id
          frontmatter {
            first_name
            last_name
            role
            image {
              childImageSharp {
                fluid(
                  quality: 80
                  maxWidth: 520
                  srcSetBreakpoints: [175, 328, 420]
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
