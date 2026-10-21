import { siteConfig } from '../config'
import { useI18n } from '../useI18n'
import { ArrowUpRightIcon } from '../components/Icons'
import teamPhoto1 from '../../assets/png/Team.jpeg'
// Sostituisci questo percorso con la seconda foto che vuoi inserire:
import teamPhoto2 from '../../assets/png/WorkingTeam.jpeg'

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
          {/* Griglia con le 2 Foto del Team */}
          <div className="team-photo-grid">
            <div className="team-photo-item">
              <img
                src={teamPhoto1}
                alt={team.photoAlt}
                loading="eager"
              />
            </div>
            <div className="team-photo-item">
              <img
                src={teamPhoto2}
                alt={team.photoAlt}
                loading="eager"
              />
            </div>
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