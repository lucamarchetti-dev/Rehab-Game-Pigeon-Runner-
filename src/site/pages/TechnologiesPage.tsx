import { useI18n } from '../useI18n'
import { ArrowUpRightIcon, PixelArrowIcon } from '../components/Icons'

function hostnameOf(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return href
  }
}

export function TechnologiesPage() {
  const { t } = useI18n()
  const tech = t.technologies

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container page-hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden="true" />
            {tech.eyebrow}
          </p>
          <h1 className="page-title">{tech.title}</h1>
          <p className="page-lead">{tech.intro}</p>
        </div>
      </section>

      <section className="section tech-page">
        <div className="container tech-layout">
          <aside className="tech-toc" aria-label={t.ui.onThisPage}>
            <p className="tech-toc__label">{t.ui.onThisPage}</p>
            <nav>
              <ol>
                {tech.categories.map((category, index) => (
                  <li key={category.title}>
                    <a href={`#tech-${index + 1}`}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {category.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="tech-toc__note">
              <PixelArrowIcon />
              <span>{t.ui.browserNote}</span>
            </div>
          </aside>

          <div className="tech-categories">
            {tech.categories.map((category, index) => {
              const id = `tech-${index + 1}`
              return (
                <section className="tech-category" id={id} key={category.title}>
                  <header className="tech-category__head">
                    <span className="tech-category__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2>{category.title}</h2>
                  </header>

                  <div className="tech-list">
                    {category.items.map((item) => (
                      <article className="tech-item" key={item.name}>
                        <div className="tech-item__head">
                          <h3>{item.name}</h3>
                          <span className="tech-item__version">
                            {item.version}
                          </span>
                          {'license' in item && item.license ? (
                            <span className="tech-item__license">
                              {item.license}
                            </span>
                          ) : null}
                        </div>
                        <p className="tech-item__role">{item.role}</p>
                        <a
                          className="tech-item__link"
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {hostnameOf(item.href)}
                          <span className="sr-only">
                            {' '}
                            — {item.name}, {t.ui.externalLink}
                          </span>
                          <ArrowUpRightIcon width={14} height={14} />
                        </a>
                      </article>
                    ))}
                  </div>
                </section>
              )
            })}

            <aside className="tech-note">
              <h2>{tech.noteTitle}</h2>
              <p>{tech.note}</p>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
