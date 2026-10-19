import sfondoCielo from '../../assets/png/sfondo-cielo.png'
import piccioneVolante from '../../assets/png/piccione-volante-2.png'
import piccioneTerra from '../../assets/Pigeon.png'
import { asset } from '../assets'
import { useI18n } from '../i18n'
import { Link } from '../router'
import {
  ArrowRightIcon,
  CameraIcon,
  PixelArrowIcon,
  ShieldIcon,
} from '../components/Icons'

const cowboy = asset('player.png')
const westernCover = asset('images/country1.jpg')

export function HomePage() {
  const { t, lang } = useI18n()
  const home = t.home

  const ticker =
    lang === 'it'
      ? ['17 keypoint', 'solo webcam', 'nessun backend', 'muovi il corpo', 'rehab games', 'piccioni pixel']
      : ['17 keypoints', 'webcam only', 'no backend', 'move your body', 'rehab games', 'pixel pigeons']

  const techChips = [
    'React 19',
    'TypeScript',
    'Vite',
    'TensorFlow.js',
    'MoveNet',
    'Canvas API',
    'WebRTC',
    'WebGL',
  ]

  const cardOutlaw = home.cards.outlaw
  const cardPigeon = home.cards.pigeon

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden="true" />
              {home.eyebrow}
            </p>
            <h1 className="hero__title">
              {home.titleLead}
              <br />
              {' '}
              <em>{home.titleAccent}</em>
            </h1>
            <p className="hero__lead">{home.intro}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#games">
                {home.ctaGames}
                <ArrowRightIcon />
              </a>
              <Link className="button button--ghost" to="/about">
                {home.ctaAbout}
              </Link>
            </div>

            <dl className="hero__stats">
              {home.stats.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero__art" aria-hidden="true">
            <span className="pixel-spark pixel-spark--a" />
            <span className="pixel-spark pixel-spark--b" />
            <div className="hero-collage">
              <div className="hero-collage__frame">
                <img
                  src={westernCover}
                  alt=""
                  className="hero-collage__image"
                />
                <span className="hero-collage__label">Outlaw Run · 01</span>
              </div>
              <img
                src={piccioneVolante}
                alt=""
                className="hero-collage__pigeon"
              />
              <img
                src={cowboy}
                alt=""
                className="hero-collage__cowboy"
              />
              <span className="hero-collage__stamp">{home.stamp}</span>
              <span className="hero-collage__keys">17 KEYPOINTS</span>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[0, 1].map((copy) => (
            <div className="ticker__group" key={copy}>
              {ticker.map((word) => (
                <span className="ticker__item" key={`${copy}-${word}`}>
                  <PixelArrowIcon />
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section games-section" id="games">
        <div className="container">
          <header className="section-head">
            <div className="section-head__main">
              <p className="eyebrow">
                <span className="eyebrow__mark" aria-hidden="true" />
                {home.gamesEyebrow}
              </p>
              <h2 className="section-title">{home.gamesTitle}</h2>
            </div>
            <p className="section-head__intro">{home.gamesIntro}</p>
          </header>

          <div className="game-grid">
            <Link
              to="/games/game1"
              className="game-card game-card--west"
            >
              <div className="game-card__cover">
                <img src={westernCover} alt="" className="game-card__image" />
                <span className="game-card__number">{cardOutlaw.number}</span>
                <span className="game-card__tag">{cardOutlaw.tag}</span>
                <span className="game-card__setting">{cardOutlaw.setting}</span>
              </div>
              <div className="game-card__body">
                <h3 className="game-card__title">{cardOutlaw.title}</h3>
                <p className="game-card__description">{cardOutlaw.description}</p>
                <div className="game-card__foot">
                  <span className="game-card__meta">{cardOutlaw.meta}</span>
                  <span className="game-card__cta">
                    {cardOutlaw.cta}
                    <ArrowRightIcon />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/games/game2"
              className="game-card game-card--sky"
            >
              <div className="game-card__cover">
                <img src={sfondoCielo} alt="" className="game-card__image" />
                <img
                  src={piccioneVolante}
                  alt=""
                  className="game-card__character"
                />
                <span className="game-card__number">{cardPigeon.number}</span>
                <span className="game-card__tag">{cardPigeon.tag}</span>
                <span className="game-card__setting">{cardPigeon.setting}</span>
              </div>
              <div className="game-card__body">
                <h3 className="game-card__title">{cardPigeon.title}</h3>
                <p className="game-card__description">{cardPigeon.description}</p>
                <div className="game-card__foot">
                  <span className="game-card__meta">{cardPigeon.meta}</span>
                  <span className="game-card__cta">
                    {cardPigeon.cta}
                    <ArrowRightIcon />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section how-section">
        <div className="container">
          <header className="section-head section-head--centered">
            <div className="section-head__main">
              <p className="eyebrow">
                <span className="eyebrow__mark" aria-hidden="true" />
                {home.howEyebrow}
              </p>
              <h2 className="section-title">{home.howTitle}</h2>
            </div>
            <p className="section-head__intro">{home.howText}</p>
          </header>

          <ol className="steps">
            {home.steps.map((step) => (
              <li className="step" key={step.number}>
                <span className="step__number">{step.number}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section privacy-section">
        <div className="container">
          <div className="privacy-panel">
            <div className="privacy-panel__icon" aria-hidden="true">
              <CameraIcon width={26} height={26} />
            </div>
            <div className="privacy-panel__copy">
              <h2>{home.privacyTitle}</h2>
              <p>{home.privacyText}</p>
            </div>
            <div className="privacy-panel__badge" aria-hidden="true">
              <ShieldIcon width={18} height={18} />
              WebGL · on-device
            </div>
          </div>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container tech-section__grid">
          <div className="tech-section__copy">
            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden="true" />
              {home.techEyebrow}
            </p>
            <h2 className="section-title">{home.techTitle}</h2>
            <p className="tech-section__text">{home.techText}</p>
            <Link className="text-link" to="/technologies">
              {home.techCta}
              <ArrowRightIcon />
            </Link>
          </div>
          <ul className="tech-chips" aria-label={t.nav.technologies}>
            {techChips.map((tech) => (
              <li key={tech}>
                <Link className="tech-chip" to="/technologies">
                  {tech}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section quote-section">
        <div className="container quote">
          <span className="quote__mark" aria-hidden="true">
            &ldquo;
          </span>
          <p className="quote__label">{home.quoteLabel}</p>
          <blockquote className="quote__text">{home.quote}</blockquote>
          <img
            src={piccioneTerra}
            alt=""
            className="quote__pigeon"
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="section closing-section">
        <div className="container">
          <div className="closing-panel">
            <div className="closing-panel__copy">
              <p className="eyebrow eyebrow--light">
                <span className="eyebrow__mark" aria-hidden="true" />
                {home.closingEyebrow}
              </p>
              <h2 className="closing-panel__title">{home.closingTitle}</h2>
              <p className="closing-panel__text">{home.closingText}</p>
            </div>
            <img
              src={piccioneVolante}
              alt=""
              className="closing-panel__pigeon"
              aria-hidden="true"
            />
            <span className="closing-panel__pixels" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
