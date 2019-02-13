import React, { useRef } from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { useSpring, config, animated } from 'react-spring'
import { IconButton } from './Button'
import Link from './Link'
import Icon from './Icon'
import { useToggle, useFocusTrap, useDisableScroll } from '../lib/hooks'
import { colors, fluidRange } from '../lib/style'

function RouterLink({ router, ...props }) {
  const isActive = router.pathname === props.to
  const isPartiallyActive =
    router.pathname.includes(props.to) && props.to !== '/'
  return (
    <StyledNavLink
      aria-current={isActive ? 'page' : undefined}
      data-active={isPartiallyActive || undefined}
      {...props}
    />
  )
}

export const NavLink = withRouter(RouterLink)

export const StyledNavLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${fluidRange({ min: 8, max: 12 })};
  font-size: ${fluidRange({ min: 36, max: 48 })};
  line-height: 1.2777777778em;
  font-weight: 700;
  text-decoration: none;
  color: white;

  &:last-child {
    margin-right: 0;
  }

  &[aria-current],
  &[data-active] {
    text-indent: ${fluidRange({ min: 24, max: 32 })};
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const Nav = animated(styled.nav`
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: ${fluidRange({ min: 48, max: 56 })};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.watermelonRed};

  ${IconButton} {
    position: absolute;
    top: ${fluidRange({ min: 24, max: 32 })};
    right: ${fluidRange({ min: 24, max: 32 })};
    font-size: ${fluidRange({ min: 32, max: 40 })};
    color: white;
  }
`)

export function Navigation({ children }) {
  const [isOpen, toggle] = useToggle(false)

  const overlayRef = useRef()
  const contentRef = useRef()
  useFocusTrap({ overlayRef, contentRef }, isOpen)
  useDisableScroll(isOpen)

  // const springRef = useRef()
  const navAnimationStyle = useSpring({
    // ref: springRef,
    config: { ...config.stiff, friction: 28 },
    from: {
      // opacity: 0,
    },
    to: {
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'auto' : 'none',
      transform: isOpen ? 'translate3d(0,0,0)' : 'translate3d(-100%, 0, 0)',
    },
  })

  return (
    <>
      <Link
        as="button"
        type="button"
        textColor={colors.watermelonRed}
        onClick={toggle}
      >
        meny.
      </Link>
      <Nav ref={overlayRef} style={{ ...navAnimationStyle }}>
        <IconButton
          type="button"
          onClick={toggle}
          textColor="white"
          aria-label="Stäng meny"
        >
          <Icon name={['fal', 'times']} />
        </IconButton>
        <ul ref={contentRef}>
          <li>
            <NavLink to="/">Hem</NavLink>
          </li>
          {React.Children.map(children, child => (
            <li>{child}</li>
          ))}
        </ul>
      </Nav>
    </>
  )
}
