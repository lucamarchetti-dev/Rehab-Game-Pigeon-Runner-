import { siteConfig } from '../config'
import { useI18n } from '../i18n'
import { Link } from '../router'
import { ArrowUpRightIcon } from './Icons'
import { Brand } from './SiteHeader'

export function SiteFooter() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Brand inverted />
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer__columns">
          <div className="footer__column">
            <h2>{t.footer.exploreTitle}</h2>
            <ul>
              <li>
                <Link to="/">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/games/game1">{t.nav.game1}</Link>
              </li>
              <li>
                <Link to="/games/game2">{t.nav.game2}</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2>{t.footer.projectTitle}</h2>
            <ul>
              <li>
                <Link to="/about">{t.nav.about}</Link>
              </li>
              <li>
                <Link to="/technologies">{t.nav.technologies}</Link>
              </li>
              <li>
                <Link to="/credits">{t.nav.credits}</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2>{t.footer.resourcesTitle}</h2>
            <ul>
              <li>
                <span className="footer__label">{t.footer.repository}</span>
                {siteConfig.repositoryUrl ? (
                  <a
                    href={siteConfig.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {siteConfig.repositoryName}
                    <ArrowUpRightIcon width={14} height={14} />
                  </a>
                ) : (
                  <span className="footer__mono">{siteConfig.repositoryName}</span>
                )}
              </li>
              <li>
                <span className="footer__label">{t.footer.license}</span>
                <a
                  href={siteConfig.licenseUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.licenseName}
                  <ArrowUpRightIcon width={14} height={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {siteConfig.projectName} · {t.footer.builtWith}
        </p>
        <p>{t.footer.sourceNote}</p>
      </div>
    </footer>
  )
}
