import React from 'react'
import styled from 'styled-components'
import { Grid, Column } from './Grid'
import Logo from './Logo'
import Link from './Link'
import { breakpoints, fluidRange, vw } from '../lib/style'
import { Navigation, NavLink } from './Nav'
import routes from '../lib/routes'

export default function Header() {
  return (
    <StyledHeader>
      <Grid justifyContent="space-between">
        <Column width="auto">
          <LogoLink to="/">
            <Logo />
          </LogoLink>
        </Column>
        <Column width="auto">
          <Navigation>
            {routes.map(route => (
              <NavLink key={route.link} to={route.link}>
                {route.title}
              </NavLink>
            ))}
          </Navigation>
        </Column>
      </Grid>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: ${fluidRange({ min: 24, max: 32 })} 0;

  @media screen and ${breakpoints.small} {
    padding: ${34 / 7.68}vw 0;
  }

  @media screen and ${breakpoints.medium} {
    padding: ${vw(56)} 0;
  }
`

const LogoLink = styled(Link)`
  display: block;
`
