
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import earthBackground from './assets/earth-background.jpg';

import LaunchScreen from './components/LaunchScreen';
import MoonArrival from './components/MoonArrival';
import MoonExploration from './components/MoonExploration';
import MarsLaunch from './components/MarsLaunch';
import MarsArrival from './components/MarsArrival';
import MarsExploration from './components/MarsExploration';
import ReturnToEarth from './components/ReturnToEarth';

import './App.css';

// ========================================
// AVAILABLE LANGUAGES
// ========================================

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'it', name: 'Italian', native: 'Italiano' },
  { code: 'ja', name: 'Japanese', native: '日本語' },
  { code: 'pt', name: 'Portuguese', native: 'Português' },
];

function App() {
  const { t, i18n } = useTranslation();

  // ========================================
  // STATE
  // ========================================

  const [languageOpen, setLanguageOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');

  // ========================================
  // CHANGE LANGUAGE
  // ========================================

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('spaceRelicsLanguage', code);
    setLanguageOpen(false);
  };

  const isRTL = i18n.language === 'ar';

  // ========================================
  // RESTART ADVENTURE
  // ========================================

  const exploreAgain = () => {
    setLanguageOpen(false);
    setAboutOpen(false);
    setCurrentScreen('home');
  };

  // ========================================
  // EARTH TO MOON LAUNCH
  // ========================================

  if (currentScreen === 'launch') {
    return (
      <LaunchScreen
        onComplete={() =>
          setCurrentScreen('arrival')
        }
      />
    );
  }

  // ========================================
  // MOON ARRIVAL
  // ========================================

  if (currentScreen === 'arrival') {
    return (
      <MoonArrival
        onExplore={() =>
          setCurrentScreen('moon-explore')
        }
      />
    );
  }

  // ========================================
  // MOON EXPLORATION
  // ========================================

  if (currentScreen === 'moon-explore') {
    return (
      <MoonExploration
        onContinueToMars={() =>
          setCurrentScreen('mars-launch')
        }
      />
    );
  }

  // ========================================
  // MOON TO MARS LAUNCH
  // ========================================

  if (currentScreen === 'mars-launch') {
    return (
      <MarsLaunch
        onComplete={() =>
          setCurrentScreen('mars-arrival')
        }
      />
    );
  }

  // ========================================
  // MARS ARRIVAL
  // ========================================

  if (currentScreen === 'mars-arrival') {
    return (
      <MarsArrival
        onExplore={() =>
          setCurrentScreen('mars-explore')
        }
      />
    );
  }

  // ========================================
  // MARS EXPLORATION
  // ========================================

  if (currentScreen === 'mars-explore') {
    return (
      <MarsExploration
        onBackToEarth={() =>
          setCurrentScreen('return-to-earth')
        }
      />
    );
  }

  // ========================================
  // RETURN TO EARTH
  // ========================================

  if (currentScreen === 'return-to-earth') {
    return (
      <ReturnToEarth
        onComplete={() =>
          setCurrentScreen('earth-arrival')
        }
      />
    );
  }

  // ========================================
  // EARTH ARRIVAL — MISSION COMPLETE
  // ========================================

  if (currentScreen === 'earth-arrival') {
    return (
      <main
        className="home earth-arrival-screen"
        style={{
          backgroundImage: `url(${earthBackground})`,
        }}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="earth-arrival-content">

          {/* WELCOME HEADING */}

          <h1>
            {t('earthArrivalTitle', {
              defaultValue:
                'Welcome Back, Explorer!',
            })}
          </h1>

          {/* MISSION ACCOMPLISHED */}

          <h2>
            {t('missionAccomplished', {
              defaultValue:
                'Mission Accomplished!',
            })}
          </h2>

          {/* MISSION DESCRIPTION */}

          <p className="earth-arrival-description">
            {t('earthArrivalMessage', {
              defaultValue:
                "You've successfully explored the Moon and Mars, uncovered the stories of six remarkable pieces of space equipment, and returned safely to Earth.",
            })}
          </p>

          {/* MISSION ACHIEVEMENTS */}

          <div className="earth-arrival-achievements">

            <div className="achievement-card">
              <strong>6/6</strong>

              <span>
                {t('relicsDiscovered', {
                  defaultValue:
                    'Relics Discovered',
                })}
              </span>
            </div>

            <div className="achievement-card">
              <strong>2</strong>

              <span>
                {t('worldsExplored', {
                  defaultValue:
                    'Worlds Explored',
                })}
              </span>
            </div>

          </div>

          {/* ANOTHER ADVENTURE */}

          <p className="earth-arrival-question">
            {t('anotherAdventure', {
              defaultValue:
                'Ready for another adventure?',
            })}
          </p>

          {/* EXPLORE AGAIN BUTTON */}

          <button
            type="button"
            className="begin-button"
            onClick={exploreAgain}
          >
            {t('exploreAgain', {
              defaultValue: 'Explore Again',
            })}

            <span>→</span>
          </button>

        </div>
      </main>
    );
  }

  // ========================================
  // HOMEPAGE
  // ========================================

  return (
    <main
      className="home"
      style={{
        backgroundImage: `url(${earthBackground})`,
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* HEADER */}

      <header className="top-bar">

        {/* LANGUAGE SELECTOR */}

        <div className="language-wrapper">
          <button
            type="button"
            className="language-button"
            onClick={() =>
              setLanguageOpen(!languageOpen)
            }
          >
            <span>◎</span>

            {t('selectLanguage')}

            <span className="chevron">⌄</span>
          </button>

          {languageOpen && (
            <div className="language-menu">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  className={`language-option ${
                    i18n.language === language.code
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() =>
                    changeLanguage(language.code)
                  }
                >
                  {language.native}

                  {i18n.language === language.code && (
                    <span>✓</span>
                  )}
                </button>
              ))}
            </div>
          )}

        </div>

        {/* ABOUT MISSION BUTTON */}

        <button
          type="button"
          className="about-button"
          onClick={() =>
            setAboutOpen(true)
          }
        >
          {t('aboutMission')}
          <span>↗</span>
        </button>

      </header>

      {/* HERO SECTION */}

      <section className="hero-content">
        <div className="hero-text">

          <h1>{t('title')}</h1>

          <p>{t('subtitle')}</p>

          <button
            type="button"
            className="begin-button"
            onClick={() =>
              setCurrentScreen('launch')
            }
          >
            {t('beginMission')}
            <span>→</span>
          </button>

        </div>
      </section>

      {/* ABOUT THE MISSION POPUP */}

      {aboutOpen && (
        <div className="about-overlay">
          <div className="about-card">

            <button
              type="button"
              className="close-button"
              onClick={() =>
                setAboutOpen(false)
              }
              aria-label={t('moonClose', {
                defaultValue: 'Close',
              })}
            >
              ×
            </button>

            <h2>{t('aboutMission')}</h2>

            <div className="mission-features">

              {/* EXPLORE */}

              <div className="mission-feature">
                <span className="feature-icon">
                  ✧
                </span>

                <div>
                  <h3>{t('explore')}</h3>
                  <p>
                    {t('exploreDescription')}
                  </p>
                </div>
              </div>

              {/* DISCOVER */}

              <div className="mission-feature">
                <span className="feature-icon">
                  ⌕
                </span>

                <div>
                  <h3>{t('discover')}</h3>
                  <p>
                    {t('discoverDescription')}
                  </p>
                </div>
              </div>

              {/* LEARN */}

              <div className="mission-feature">
                <span className="feature-icon">
                  ✦
                </span>

                <div>
                  <h3>{t('learn')}</h3>
                  <p>
                    {t('learnDescription')}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
