import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import { colors, breakpoints, fluidRange, vw } from '../lib/style'

export default function Tags({ items, linked = true, ...rest }) {
  if (!items || !items.length) {
    return null
  }

  return (
    <TagsWrapper {...rest}>
      <Hyphen />
      <TagList>
        {items.map(item => (
          <li key={item}>
            {linked ? (
              <TagLink
                href={`/case?filter=${encodeURIComponent(item.toLowerCase())}`}
              >
                {item}
              </TagLink>
            ) : (
              item
            )}
          </li>
        ))}
      </TagList>
    </TagsWrapper>
  )
}

function tagsWrapperModifiers(props) {
  if (props.variant === 'small') {
    return {
      fontSize: fluidRange({ min: 11, max: 14 }),
      [`@media ${breakpoints.medium}`]: {
        fontSize: `${vw(14)}`,
      },
    }
  }

  return {
    fontSize: fluidRange({ min: 14, max: 18 }),
    [`@media ${breakpoints.medium}`]: {
      fontSize: `${vw(18)}`,
    },
  }
}

const TagsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 1.3em;
  ${tagsWrapperModifiers}
  color: ${props => props.textColor || colors.dark};
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  & li:not(:last-child) {
    &::after {
      content: ',\00a0';
    }
  }
`

const Hyphen = styled.span`
  flex-shrink: 0;

  &::before {
    content: '—\00a0';
  }
`

const TagLink = styled(Link).attrs({
  fontSize: 'inherit',
  thin: true,
  textColor: 'inherit',
})({})
