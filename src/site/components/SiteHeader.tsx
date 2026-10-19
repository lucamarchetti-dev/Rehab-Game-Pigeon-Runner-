import { useEffect, useId, useState } from 'react'
import pigeonLogo from '../../assets/Pigeon.png'
import { useI18n } from '../i18n'
import { isActivePath, Link, usePath } from '../router'
import { useTheme } from '../theme'
import {
  CloseIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from './Icons'

export function Brand({
  inverted = false,
  onNavigate,
}: {
  inverted?: boolean
  onNavigate?: () => void
}) {
  return (
    <Link
      to="/"
      className={`brand${inverted ? ' brand--inverted' : ''}`}
      onClick={onNavigate}
    >
      <img
        src={pigeonLogo}
        alt=""
        aria-hidden="true"
        className="brand__mark"
      />

      <span className="brand__text">
        <span className="brand__name">Pigeon Runner</span>
        <span className="brand__sub">Rehab Gam</span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const path = usePath()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    setOpen(false)
  }, [path])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/games/game1', label: t.nav.game1 },
    { to: '/games/game2', label: t.nav.game2 },
    { to: '/about', label: t.nav.about },
    { to: '/technologies', label: t.nav.technologies },
    { to: '/credits', label: t.nav.credits },
  ]

  const renderLinks = (extraClass = '') =>
    links.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className={`nav-link${extraClass ? ` ${extraClass}` : ''}`}
        aria-current={isActivePath(path, link.to) ? 'page' : undefined}
        onClick={() => setOpen(false)}
      >
        {link.label}
      </Link>
    ))

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand onNavigate={() => setOpen(false)} />

        <nav className="site-nav" aria-label={t.nav.navigation}>
          {renderLinks()}
        </nav>

        <div className="site-actions">
          <div className="lang-switch" role="group" aria-label={t.nav.language}>
            <button
              type="button"
              className="lang-switch__button"
              aria-pressed={lang === 'it'}
              onClick={() => setLang('it')}
            >
              IT
            </button>
            <span className="lang-switch__divider" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className="lang-switch__button"
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? t.nav.themeToDark : t.nav.themeToLight}
            title={theme === 'light' ? t.nav.themeToDark : t.nav.themeToLight}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            type="button"
            className="icon-button menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? t.nav.closeMenu : t.nav.menu}
            title={open ? t.nav.closeMenu : t.nav.menu}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id={panelId}
        className={`mobile-menu${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav className="container mobile-menu__nav" aria-label={t.nav.navigation}>
          {renderLinks('nav-link--mobile')}
          <a
            className="mobile-menu__meta"
            href="https://www.gnu.org/licenses/gpl-3.0.html"
            target="_blank"
            rel="noreferrer"
          >
            GPL-3.0 · {t.footer.sourceNote}
          </a>
        </nav>
      </div>
    </header>
  )
}
