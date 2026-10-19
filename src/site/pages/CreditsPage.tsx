import { siteConfig } from '../config'
import { useI18n } from '../i18n'
import { ArrowUpRightIcon, PixelArrowIcon } from '../components/Icons'

export function CreditsPage() {
  const { t } = useI18n()
  const credits = t.credits

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container page-hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden="true" />
            {credits.eyebrow}
          </p>
          <h1 className="page-title">{credits.title}</h1>
          <p className="page-lead">{credits.intro}</p>
        </div>
      </section>

      <section className="section credits-section">
        <div className="container">
          <div className="credits-grid">
            {credits.sections.map((section, index) => (
              <article className="credits-card" key={section.title}>
                <header className="credits-card__head">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h2>{section.title}</h2>
                </header>
                <dl className="credits-list">
                  {section.items.map((item) => (
                    <div className="credits-item" key={item.name}>
                      <dt>{item.name}</dt>
                      <dd>
                        {item.detail}
                        {'href' in item && item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t.ui.externalLink}
                            <ArrowUpRightIcon width={13} height={13} />
                          </a>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <div className="license-panel">
            <div className="license-panel__mark" aria-hidden="true">
              <PixelArrowIcon width={22} height={22} />
            </div>
            <div className="license-panel__copy">
              <h2>{credits.licenseTitle}</h2>
              <p>{credits.licenseText}</p>
            </div>
            <a
              className="button button--cream"
              href={siteConfig.licenseUrl}
              target="_blank"
              rel="noreferrer"
            >
              {credits.licenseCta}
              <ArrowUpRightIcon width={16} height={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
