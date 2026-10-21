import { useEffect, useState } from 'react'
import { SiteLayout } from './site/components/SiteLayout'
import { I18nProvider } from './site/i18n'
import { useI18n } from './site/useI18n.ts'
import { ThemeProvider } from './site/theme'
import { usePath } from './site/router'
import { AboutPage } from './site/pages/AboutPage'
import { CreditsPage } from './site/pages/CreditsPage'
import { GamePage } from './site/pages/GamePage'
import { HomePage } from './site/pages/HomePage'
import { NotFoundPage } from './site/pages/NotFoundPage'
import { TechnologiesPage } from './site/pages/TechnologiesPage'

function usePageMetadata(path: string) {
  const { t, lang } = useI18n()
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    const metadata =
      path === '/'
        ? t.metadata.home
        : path === '/games/game1'
          ? t.metadata.game1
          : path === '/games/game2'
            ? t.metadata.game2
            : path === '/about'
              ? t.metadata.about
              : path === '/technologies'
                ? t.metadata.technologies
                : path === '/credits'
                  ? t.metadata.credits
                  : t.metadata.notFound

    document.title = metadata.title

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (description) description.content = metadata.description

    const ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    )
    if (ogTitle) ogTitle.content = metadata.title

    const ogDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    )
    if (ogDescription) ogDescription.content = metadata.description

    const ogLocale = document.querySelector<HTMLMetaElement>(
      'meta[property="og:locale"]',
    )
    if (ogLocale) ogLocale.content = lang === 'it' ? 'it_IT' : 'en_GB'

    const ogLocaleAlternate = document.querySelector<HTMLMetaElement>(
      'meta[property="og:locale:alternate"]',
    )
    if (ogLocaleAlternate) ogLocaleAlternate.content = lang === 'it' ? 'en_GB' : 'it_IT'

    setAnnouncement(metadata.title)
  }, [path, t, lang])

  return announcement
}

function RoutedContent() {
  const path = usePath()
  const announcement = usePageMetadata(path)

  let page
  if (path === '/') {
    page = <HomePage />
  } else if (path === '/games/game1') {
    page = <GamePage game="outlaw" />
  } else if (path === '/games/game2') {
    page = <GamePage game="pigeon" />
  } else if (path === '/about') {
    page = <AboutPage />
  } else if (path === '/technologies') {
    page = <TechnologiesPage />
  } else if (path === '/credits') {
    page = <CreditsPage />
  } else {
    page = <NotFoundPage />
  }

  return (
    <SiteLayout>
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>
      {page}
    </SiteLayout>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <RoutedContent />
      </I18nProvider>
    </ThemeProvider>
  )
}
