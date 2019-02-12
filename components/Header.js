import React from 'react'
import styled from 'styled-components'
import { Grid, Column } from './Grid'
import Logo from './Logo'
import Icon from './Icon'
import { IconButton } from './Button'
import Toggle from './Toggle'
import Link from './Link'
import MediaQuery from './MediaQuery'
import { colors, breakpoints, fluidRange, vw } from '../lib/style'
import { Nav, NavLink, NavButton } from './Nav'
import routes from '../lib/routes'

export default function Header() {
  return (
    <StyledHeader>
      <Grid justifyContent="space-between">
        <Column width="auto">
          <LogoLink href="/">
            <Logo />
          </LogoLink>
        </Column>
        <Column width="auto">
          <MediaQuery>
            {queries => (
              <Toggle>
                {({ on, toggle }) => (
                  <>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <NavButton
                      as="button"
                      type="button"
                      textColor={colors.watermelonRed}
                      onClick={toggle}
                    >
                      meny.
                    </NavButton>
                    <Nav hidden={!queries.medium ? !on : undefined}>
                      <IconButton
                        type="button"
                        onClick={toggle}
                        textColor="white"
                        aria-label="Stäng meny"
                      >
                        <Icon name={['fal', 'times']} />
                      </IconButton>
                      <NavLink href="/">Hem</NavLink>
                      {routes.map(route => (
                        <NavLink key={route.link} href={route.link}>
                          {route.title}
                        </NavLink>
                      ))}
                    </Nav>
                  </>
                )}
              </Toggle>
            )}
          </MediaQuery>
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
