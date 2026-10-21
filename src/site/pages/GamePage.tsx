import { lazy, Suspense, useEffect, useState } from 'react'
import sfondoCielo from '../../assets/png/sfondo-cielo.png'
import piccioneVolante from '../../assets/png/piccione-volante-2.png'
import piccioneTerra from '../../assets/png/piccione-terra.png'
import { asset } from '../assets'
import { useI18n } from '../useI18n'
import { Link, navigate } from '../router'
import {
  ArrowRightIcon,
  CameraIcon,
} from '../components/Icons'

const OutlawRun = lazy(() => import('../../components/OutlawRun'))
const PigeonBlaster = lazy(() => import('../../components/PigeonBlaster'))

const westernCover = asset('images/country1.jpg')
const cowboy = asset('player.png')

type GameId = 'outlaw' | 'pigeon'

export function GamePage({ game }: { game: GameId }) {
  const { t } = useI18n()
  const page = game === 'outlaw' ? t.gamesPage.outlaw : t.gamesPage.pigeon
  const [started, setStarted] = useState(false)

  useEffect(() => {
    setStarted(false)
  }, [game])

  const otherGame: GameId = game === 'outlaw' ? 'pigeon' : 'outlaw'
  const otherRoute = otherGame === 'outlaw' ? '/games/game1' : '/games/game2'
  const otherTitle =
    otherGame === 'outlaw' ? t.gamesPage.outlaw.title : t.gamesPage.pigeon.title

  const scrollToGame = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('play')?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  const startGame = () => {
    setStarted(true)
    window.setTimeout(scrollToGame, 30)
  }

  const goHome = () => navigate('/')

  return (
    <>
      <section className={`game-hero game-hero--${game}`}>
        <div className="container game-hero__grid">
          <div className="game-hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden="true" />
              {page.eyebrow}
            </p>
            <h1 className="page-title game-hero__title">{page.title}</h1>
            <p className="game-hero__tagline">{page.tagline}</p>
            <p className="page-lead">{page.description}</p>

            <div className="game-hero__actions">
              <button
                type="button"
                className="button button--primary"
                onClick={startGame}
              >
                {t.ui.play}
                <ArrowRightIcon />
              </button>
              <Link className="button button--ghost" to={otherRoute}>
                {t.ui.otherGame}
              </Link>
            </div>

            <dl className="game-facts">
              {page.facts.map((fact) => (
                <div className="game-fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`game-hero__art game-hero__art--${game}`}>
            <span className="game-hero__art-frame">
              <img
                src={game === 'outlaw' ? westernCover : sfondoCielo}
                alt=""
              />
            </span>
            <img
              src={game === 'outlaw' ? cowboy : piccioneVolante}
              alt=""
              className="game-hero__character"
            />
            <span className="game-hero__sticker" aria-hidden="true">
              {game === 'outlaw' ? 'Far West · 01' : 'Sky · 02'}
            </span>
            <p className="game-hero__caption">{page.character}</p>
          </div>
        </div>
      </section>

      <section
        id="play"
        className={`section game-stage-section game-stage-section--${game}`}
      >
        <div className="container">
          <div className="game-stage__head">
            <div>
              <p className="eyebrow">
                <span className="eyebrow__mark" aria-hidden="true" />
                {t.ui.gameLabel} {game === 'outlaw' ? '01' : '02'}
              </p>
              <h2 className="section-title">{t.ui.playArea}</h2>
            </div>
            <span className="game-stage__status">
              <span aria-hidden="true" />
              WebRTC · 640×480
            </span>
          </div>

          <div className={`game-frame game-frame--${game}`}>
            {!started ? (
              <div className="game-gate">
                <img
                  src={game === 'outlaw' ? cowboy : piccioneTerra}
                  alt=""
                  className="game-gate__art"
                  aria-hidden="true"
                />
                <div className="game-gate__copy">
                  <span className="game-gate__badge">
                    <CameraIcon width={15} height={15} />
                    Webcam
                  </span>
                  <h2>{t.ui.gateTitle}</h2>
                  <p>{t.ui.gateText}</p>
                  <button
                    type="button"
                    className="button button--primary"
                    onClick={startGame}
                  >
                    {t.ui.gateCta}
                    <ArrowRightIcon />
                  </button>
                  <p className="game-gate__hint">{t.ui.gateHint}</p>
                </div>
              </div>
            ) : (
              <Suspense
                fallback={<p className="game-loading">{t.ui.loading}</p>}
              >
                {game === 'outlaw' ? (
                  <OutlawRun onBack={goHome} />
                ) : (
                  <PigeonBlaster onBack={goHome} />
                )}
              </Suspense>
            )}
          </div>

          <div className="game-help">
            <article className="game-help__card">
              <h3>{page.controlTitle}</h3>
              <ol className="game-controls">
                {page.controls.map((control, index) => (
                  <li key={control}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{control}</p>
                  </li>
                ))}
              </ol>
            </article>

            <article className="game-help__card">
              <h3>{page.objectiveTitle}</h3>
              <p className="game-help__objective">{page.objectiveText}</p>
              <div className="camera-note">
                <CameraIcon width={20} height={20} />
                <div>
                  <strong>{t.ui.cameraTitle}</strong>
                  <p>{t.ui.cameraText}</p>
                </div>
              </div>
              <p className="game-help__hint">{t.ui.gateHint}</p>
            </article>
          </div>

          <div className="game-next">
            <p>{page.nextLabel}</p>
            <Link className="game-next__link" to={otherRoute}>
              {otherTitle}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
