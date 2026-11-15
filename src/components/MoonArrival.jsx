
import { useTranslation } from 'react-i18next';
import moonLandscape from '../assets/moon-landscape.jpg';
import './MoonArrival.css';

function MoonArrival({ onExplore }) {
  const { t, i18n } = useTranslation();

  return (
    <main
      className="moon-arrival"
      style={{
        backgroundImage: `url(${moonLandscape})`,
      }}
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <h1 className="moon-arrival-title">
        {t('moonWelcome')}
      </h1>

      <section className="moon-welcome-card">
        <h2>{t('moonIntroTitle')}</h2>

        <p>{t('moonIntroDescription')}</p>

        <button
          type="button"
          className="moon-explore-button"
          onClick={onExplore}
        >
          {t('startExploring')}
          <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  );
}

export default MoonArrival;
