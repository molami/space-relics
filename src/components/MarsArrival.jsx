
import { useTranslation } from 'react-i18next';

import marsLandscape from '../assets/mars-landscape.jpg';

import './MarsArrival.css';

function MarsArrival({ onExplore }) {
  const { t, i18n } = useTranslation();

  return (
    <main
      className="mars-arrival"
      style={{
        backgroundImage: `url(${marsLandscape})`,
      }}
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* =====================================
          WELCOME TO MARS
      ===================================== */}

      <h1 className="mars-arrival-title">
        {t('marsWelcome')}
      </h1>

      {/* =====================================
          MARS INTRODUCTION CARD
      ===================================== */}

      <section className="mars-welcome-card">
        <h2>{t('marsIntroTitle')}</h2>

        <p>{t('marsIntroDescription')}</p>

        <button
          type="button"
          className="mars-explore-button"
          onClick={onExplore}
        >
          {t('marsStartExploring')}

          <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  );
}

export default MarsArrival;
