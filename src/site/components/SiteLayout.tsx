import type { ReactNode } from 'react'
import { useI18n } from '../i18n'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t } = useI18n()

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {t.nav.skip}
      </a>
      <SiteHeader />
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
