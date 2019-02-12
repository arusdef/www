import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Section from '../components/Section'
import { H1, Excerpt } from '../components/Text'
import { Grid, Column } from '../components/Grid'
import { colors } from '../lib/style'

export default function News() {
  return (
    <Layout title="Aktuellt">
      <Hero>
        <H1>Nytt från Strateg.</H1>
        <Excerpt>
          Vi gillar att dela med oss. Av riktigt-bra-att-ha-kunskap, guidning i
          kommunikationsdjungeln och sånt som händer här på Strateg. Stort och
          smått. Självklart och oväntat. Haka på.
        </Excerpt>
      </Hero>
      <Section bg={colors.ice} pt={[5, 8]} pb={[10, 20]}>
        {/* <Grid>
          {data.articles.edges.map(({ node }) => (
            <Column key={node.id} tablet="6" bottomGap>
              <Card
                date={node.frontmatter.date}
                title={node.frontmatter.title}
                url={node.fields.slug}
                image={node.frontmatter.image}
              />
            </Column>
          ))}
        </Grid> */}
      </Section>
    </Layout>
  )
}
