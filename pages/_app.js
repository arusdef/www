import React from 'react'
import App, { Container } from 'next/app'
import '../lib/utils/iconLibrary'
import '../fonts/circular.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
