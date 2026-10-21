import piccioneTerra from '../../assets/png/piccione-terra.png'
import { useI18n } from '../useI18n'
import { Link } from '../router'
import { ArrowRightIcon } from '../components/Icons'

export function NotFoundPage() {
  const { t } = useI18n()

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="eyebrow">
          <span className="eyebrow__mark" aria-hidden="true" />
          {t.notFound.eyebrow}
        </p>
        <h1 className="page-title">{t.notFound.title}</h1>
        <p className="page-lead">{t.notFound.text}</p>
        <Link className="button button--primary" to="/">
          {t.notFound.cta}
          <ArrowRightIcon />
        </Link>
        <img src={piccioneTerra} alt="" aria-hidden="true" />
      </div>
    </section>
  )
}
