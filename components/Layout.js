import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../lib/style'
import Meta from './Meta'
import SkipNavLink from './SkipNav'
import Header from './Header'
import Footer from './Footer'
import NoSSR from './NoSSR'
import CookieToast from './CookieToast'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

export default function Layout({
  children,
  title,
  description,
  meta,
  hideFooter,
}) {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Meta title={title} description={description}>
        {meta}
      </Meta>
      <SkipNavLink />
      <Header />
      <Main id="main-content">{children}</Main>
      <NoSSR>
        <CookieToast />
      </NoSSR>
      {!hideFooter && <Footer />}
    </PageWrapper>
  )
}
