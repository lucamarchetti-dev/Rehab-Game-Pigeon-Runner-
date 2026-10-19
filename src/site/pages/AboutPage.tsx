import piccioneTerra from '../../assets/Pigeon.png'
import { siteConfig } from '../config'
import { useI18n } from '../i18n'
import { Link } from '../router'
import { ArrowUpRightIcon, PixelArrowIcon } from '../components/Icons'

export function AboutPage() {
  const { t } = useI18n()
  const about = t.about

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden="true" />
            {about.eyebrow}
          </p>
          <h1 className="page-title">{about.title}</h1>
          <p className="page-lead">{about.intro}</p>
        </div>
        <img
          src={piccioneTerra}
          alt=""
          className="page-hero__pigeon"
          aria-hidden="true"
        />
      </section>

      <section className="section about-section">
        <div className="container about-layout">
          <div className="prose">
            {about.sections.map((section, index) => (
              <section className="prose-block" key={section.title}>
                <span className="prose-block__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              </section>
            ))}

            <section className="relation-block">
              <h2 className="relation-block__title">{about.relationTitle}</h2>
              <div className="relation-grid">
                {about.relation.map((item, index) => (
                  <article
                    className={`relation-card relation-card--${index === 0 ? 'west' : 'sky'}`}
                    key={item.title}
                  >
                    <span className="relation-card__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="about-aside" aria-label={t.ui.onThisPage}>
            <div className="aside-card">
              <h2>{about.teamTitle}</h2>
              <p>{about.teamText}</p>
              {siteConfig.team.length > 0 ? (
                <ul className="team-list">
                  {siteConfig.team.map((member) => (
                    <li key={member.name}>
                      <strong>{member.name}</strong>
                      <span>{member.role}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="aside-card">
              <h2>{about.repoTitle}</h2>
              <p>{about.repoText}</p>
              {siteConfig.repositoryUrl ? (
                <a
                  className="aside-link"
                  href={siteConfig.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteConfig.repositoryName}
                  <ArrowUpRightIcon width={16} height={16} />
                </a>
              ) : (
                <code className="aside-code">{siteConfig.repositoryName}</code>
              )}
            </div>

            <div className="aside-card aside-card--accent">
              <h2>{about.licenseTitle}</h2>
              <p>{about.licenseText}</p>
              <a
                className="aside-link"
                href={siteConfig.licenseUrl}
                target="_blank"
                rel="noreferrer"
              >
                {siteConfig.licenseName}
                <ArrowUpRightIcon width={16} height={16} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section disclaimer-section">
        <div className="container">
          <div className="disclaimer">
            <PixelArrowIcon />
            <p>{about.disclaimer}</p>
            <Link className="text-link" to="/credits">
              {t.nav.credits}
              <ArrowUpRightIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
