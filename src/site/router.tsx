import {
  useSyncExternalStore,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

const RAW_BASE = import.meta.env.BASE_URL || '/'
export const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`

export type RoutePath =
  | '/'
  | '/games/game1'
  | '/games/game2'
  | '/about'
  | '/technologies'
  | '/credits'

function normalize(path: string): string {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`
  const withoutTrailingSlash =
    withLeadingSlash.length > 1
      ? withLeadingSlash.replace(/\/+$/, '')
      : withLeadingSlash
  return withoutTrailingSlash || '/'
}

export function readPath(): string {
  let pathname = window.location.pathname

  if (BASE !== '/') {
    if (pathname === BASE.slice(0, -1)) {
      pathname = '/'
    } else if (pathname.startsWith(BASE)) {
      pathname = `/${pathname.slice(BASE.length)}`
    }
  }

  return normalize(pathname)
}

export function hrefFor(to: string): string {
  const normalized = normalize(to)
  if (normalized === '/') return BASE
  return `${BASE}${normalized.slice(1)}`
}

let currentPath = readPath()
const listeners = new Set<() => void>()

function emit() {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    currentPath = readPath()
    emit()
  })
}

export function usePath(): string {
  return useSyncExternalStore(
    subscribe,
    () => currentPath,
    () => '/',
  )
}

export function navigate(to: string, options?: { replace?: boolean }) {
  const target = normalize(to)

  if (target === currentPath) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return
  }

  const href = hrefFor(target)

  if (options?.replace) {
    window.history.replaceState(null, '', href)
  } else {
    window.history.pushState(null, '', href)
  }

  currentPath = target
  emit()
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  children: ReactNode
}

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (event.defaultPrevented) return
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={hrefFor(to)} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export function isActivePath(current: string, to: string): boolean {
  const target = normalize(to)
  if (target === '/') return current === '/'
  return current === target || current.startsWith(`${target}/`)
}
