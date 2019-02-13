import { useState, useRef, useEffect } from 'react'
import createFocusTrap from 'focus-trap'

export function useForceUpdate() {
  const [, setState] = useState(true)
  return () => setState(i => !i)
}

export function useToggle(defaultState = true) {
  const [state, setState] = useState(defaultState)

  return [state, () => setState(on => !on)]
}

export function useDisableScroll(shouldDisable = true) {
  useEffect(() => {
    if (shouldDisable) {
      document.body.style.setProperty('overflow', 'hidden')

      return () => {
        document.body.style.setProperty('overflow', null)
      }
    }

    return undefined
  }, [shouldDisable])
}

export function useFocusTrap(
  { initialFocusRef, overlayRef, contentRef },
  shouldTrap = true,
) {
  const focusTrap = useRef()

  useEffect(() => {
    focusTrap.current = createFocusTrap(overlayRef.current, {
      initialFocus: initialFocusRef ? () => initialFocusRef.current : undefined,
      fallbackFocus: contentRef.current,
      escapeDeactivates: false,
      clickOutsideDeactivates: false,
    })
  }, [])

  useEffect(() => {
    if (shouldTrap) {
      focusTrap.current.activate()

      return () => {
        focusTrap.current.deactivate()
      }
    }

    return undefined
  }, [shouldTrap])

  return focusTrap
}

export function useMediaQuery(query, defaultState = false) {
  if (!query) {
    throw new TypeError('The "query" parameter is required in "useMediaQuery"')
  }

  const [state, setState] = useState(defaultState)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => {
      setState(!!mql.matches)
    }

    mql.addListener(onChange)
    setState(mql.matches)

    return () => {
      mql.removeListener(onChange)
    }
  }, [query])

  return state
}
