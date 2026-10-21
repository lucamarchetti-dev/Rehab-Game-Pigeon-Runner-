import { siteConfig } from '../config'
import { useI18n } from '../useI18n'
import { ArrowUpRightIcon } from '../components/Icons'
import teamPhoto from '../../assets/png/piccione-terra.png'

export function CreditsPage() {
  const { t } = useI18n()
  const team = t.team

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container page-hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden="true" />
            {team.eyebrow}
          </p>

          <h1 className="page-title">{team.title}</h1>
          <p className="page-lead">{team.intro}</p>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          {/* Banner Foto Team (Ampio, senza card) */}
          <div className="team-photo-banner">
            <img
              src={teamPhoto}
              alt={team.photoAlt}
              loading="eager"
            />
          </div>

          {/* Storia dell'Hackathon e del progetto */}
          <div className="team-story">
            <span className="team-badge">Hackathon & Progetto</span>
            <p className="team-text-lead">{team.storyEyebrow}</p>
            <p className="team-text">{team.storyTitle}</p>
          </div>

          {/* Sezione Sviluppatori e dettagli */}
          <div className="team-heading">
            <h2 className="team-section-title">{team.peopleTitle}</h2>
            <p className="team-text-lead">{team.peopleEyebrow}</p>
            
            <div className="team-body-content">
              <p className="team-text">{team.peopleDescription}</p>
              <p className="team-text">{team.peopleStory}</p>
              <p className="team-text">{team.peopleConclusion}</p>
            </div>
          </div>

          {/* Call To Action Repository */}
          <div className="team-footer">
            <div className="team-footer__copy">
              <h2>{team.projectTitle}</h2>
              <p>{team.projectText}</p>
            </div>

            <a
              className="button button--cream"
              href={siteConfig.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              {team.repositoryCta}
              <ArrowUpRightIcon width={16} height={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}