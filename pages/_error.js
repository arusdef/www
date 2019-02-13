import React, { Suspense } from 'react'
import NextError from 'next/error'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Cover from '../components/Cover'
import NoSSR from '../components/NoSSR'
import { H1, Excerpt } from '../components/Text'
import Link from '../components/Link'

const Playground = React.lazy(() => import('../components/Playground'))

export function NotFound() {
  return (
    <Layout title="404">
      <Hero>
        <H1>Vad letar du efter, kompis?</H1>
        <Excerpt>
          Sidan du vill till finns tyvärr inte. Testa igen eller gå till
          startsidan, därifrån hittar du förhoppningsvis rätt.
        </Excerpt>
        <Link to="/">Till startsidan</Link>
      </Hero>
      <Cover>
        <NoSSR>
          <Suspense fallback={null}>
            <Playground />
          </Suspense>
        </NoSSR>
      </Cover>
    </Layout>
  )
}

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const { statusCode = null } = res || err || {}
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    if (statusCode === 404) {
      return <NotFound />
    }

    return <NextError statusCode={statusCode} />
  }
}
