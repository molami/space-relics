
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import moonLandscape from '../assets/moon-landscape.jpg';
import surveyor3 from '../assets/surveyor-3.jpg';
import lunarRovingVehicle from '../assets/lunar-roving-vehicle.jpg';
import apollo14Alsep from '../assets/apollo-14-alsep.jpg';

import './MoonExploration.css';

const SCAN_DURATION = 4000;

// ========================================
// MOON EQUIPMENT DATA
// ========================================

// Equipment information is translated in i18n.js.
// Images, marker positions, credits and NASA links stay here.

const relics = [
  {
    id: 'surveyor-3',
    translationKey: 'surveyor3',
    image: surveyor3,
    x: 19,
    y: 51,
    credit: 'NASA/JSC',
    source:
      'https://science.nasa.gov/resource/view-of-surveyor-iii-in-its-crater/',
  },
  {
    id: 'lunar-roving-vehicle',
    translationKey: 'lunarRover',
    image: lunarRovingVehicle,
    x: 66,
    y: 29,
    credit: 'NASA/MSFC',
    source:
      'https://www.nasa.gov/image-article/this-week-nasa-history-first-use-of-lunar-roving-vehicle-july-31-1971/',
  },
  {
    id: 'apollo-14-alsep',
    translationKey: 'alsep',
    image: apollo14Alsep,
    x: 78,
    y: 55,
    credit: 'NASA/JSC',
    source:
      'https://science.nasa.gov/resource/apollo-14-mission-image-view-of-the-alsep-station/',
  },
];

function MoonExploration({ onContinueToMars }) {
  const { t, i18n } = useTranslation();

  // ========================================
  // STATE
  // ========================================

  const [discovered, setDiscovered] = useState([]);
  const [selectedRelic, setSelectedRelic] = useState(null);
  const [phase, setPhase] = useState('idle');
  const [scanProgress, setScanProgress] = useState(0);

  const scanStartRef = useRef(null);

  // ========================================
  // TRANSLATE EQUIPMENT INFORMATION
  // ========================================

  const translateRelic = (relic, field) => {
    return t(`relics.${relic.translationKey}.${field}`);
  };

  // ========================================
  // DISCOVERY PROGRESS
  // ========================================

  const discoveredCount = discovered.length;
  const totalLocations = relics.length;

  const allDiscovered =
    discoveredCount === totalLocations;

  // ========================================
  // SCANNING ANIMATION
  // ========================================

  useEffect(() => {
    if (phase !== 'scanning') return;

    let frameId;

    scanStartRef.current = null;

    const animate = (timestamp) => {
      if (scanStartRef.current === null) {
        scanStartRef.current = timestamp;
      }

      const elapsed = timestamp - scanStartRef.current;

      const progress = Math.min(
        (elapsed / SCAN_DURATION) * 100,
        100
      );

      setScanProgress(progress);

      if (progress >= 100) {
        setPhase('details');
        return;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [phase, selectedRelic]);

  // ========================================
  // OPEN EQUIPMENT MARKER
  // ========================================

  const openRelic = (relic) => {
    setSelectedRelic(relic);

    // Previously discovered equipment opens
    // immediately without scanning again.
    if (discovered.includes(relic.id)) {
      setPhase('details');
      return;
    }

    setScanProgress(0);
    setPhase('scanning');
  };

  // ========================================
  // FINISH EXPLORING
  // ========================================

  const closeDetails = () => {
    if (selectedRelic && phase === 'details') {
      setDiscovered((previous) => {
        if (previous.includes(selectedRelic.id)) {
          return previous;
        }

        return [...previous, selectedRelic.id];
      });
    }

    setSelectedRelic(null);
    setScanProgress(0);
    setPhase('idle');
  };

  // ========================================
  // ESCAPE KEY SUPPORT
  // ========================================

  useEffect(() => {
    if (phase !== 'details') return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeDetails();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [phase, selectedRelic]);

  // ========================================
  // MOON EXPLORATION SCREEN
  // ========================================

  return (
    <main
      className="moon-exploration"
      style={{
        backgroundImage: `url(${moonLandscape})`,
      }}
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* =====================================
          DISCOVERY MARKERS
      ===================================== */}

      {relics.map((relic) => {
        const isDiscovered = discovered.includes(relic.id);

        return (
          <button
            key={relic.id}
            type="button"
            className={`discovery-pin ${
              isDiscovered ? 'discovery-pin--found' : ''
            }`}
            style={{
              left: `${relic.x}%`,
              top: `${relic.y}%`,
            }}
            onClick={() => openRelic(relic)}
            aria-label={translateRelic(relic, 'name')}
            disabled={phase !== 'idle' || allDiscovered}
          >
            <span className="discovery-pin-glow" />

            <svg
              className="discovery-pin-shape"
              viewBox="0 0 110 135"
              aria-hidden="true"
            >
              <path
                className="discovery-pin-outline"
                d="M55 3 C26 3 3 26 3 55 C3 91 55 130 55 130 C55 130 107 91 107 55 C107 26 84 3 55 3 Z"
              />

              <circle
                className="discovery-pin-blue-ring"
                cx="55"
                cy="55"
                r="44"
              />

              <circle
                className="discovery-pin-inner"
                cx="55"
                cy="55"
                r="31"
              />

              <text
                className="discovery-pin-symbol"
                x="55"
                y="70"
                textAnchor="middle"
              >
                {isDiscovered ? '✓' : '?'}
              </text>
            </svg>
          </button>
        );
      })}

      {/* =====================================
          DISCOVERY PROGRESS TRACKER
      ===================================== */}

      <section className="moon-progress-panel">
        <p className="moon-progress-instruction">
          {allDiscovered
            ? t('moonAllDiscovered', {
                defaultValue:
                  'All objects have been discovered',
              })
            : phase === 'scanning'
              ? t('moonScanningInstruction')
              : t('moonSelectMarker')}
        </p>

        {phase !== 'scanning' && (
          <div className="moon-progress-row">
            <span className="moon-progress-count">
              {t('moonDiscoveredCount', {
                count: discoveredCount,
                total: totalLocations,
              })}
            </span>

            <div
              className="moon-progress-track"
              role="progressbar"
              aria-valuenow={discoveredCount}
              aria-valuemin={0}
              aria-valuemax={totalLocations}
              aria-label={t('moonDiscoveryProgress')}
            >
              {relics.map((relic, index) => {
                const completed = discovered.includes(relic.id);

                return (
                  <span
                    key={relic.id}
                    className={`moon-progress-dot ${
                      completed
                        ? 'moon-progress-dot--complete'
                        : ''
                    }`}
                    style={{
                      left: `${
                        (index / (totalLocations - 1)) * 100
                      }%`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* =====================================
          SCANNING OVERLAY
      ===================================== */}

      {selectedRelic && phase === 'scanning' && (
        <div className="moon-scan-overlay">
          <section
            className="moon-scan-card"
            role="status"
            aria-label={t('moonScanning')}
          >
            {/* Blurred equipment image */}
            <img
              src={selectedRelic.image}
              alt=""
              className="moon-scan-image"
            />

            {/* Frosted glass */}
            <div className="moon-scan-glass" />

            {/* Scanning text and progress */}
            <div className="moon-scan-content">
              <h2>{t('moonScanning')}</h2>

              <div
                className="moon-scan-track"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(scanProgress)}
                aria-label={t('moonScanning')}
              >
                <div
                  className="moon-scan-fill"
                  style={{
                    width: `${scanProgress}%`,
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =====================================
          EQUIPMENT INFORMATION CARD
      ===================================== */}

      {selectedRelic && phase === 'details' && (
        <div className="moon-details-overlay">
          <section
            className="moon-details-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="moon-relic-name"
          >
            {/* Close button */}
            <button
              type="button"
              className="moon-details-close"
              onClick={closeDetails}
              aria-label={t('moonClose')}
            >
              ×
            </button>

            {/* LEFT: EQUIPMENT IMAGE */}
            <div className="moon-details-image-column">
              <img
                src={selectedRelic.image}
                alt={translateRelic(selectedRelic, 'name')}
                className="moon-details-image"
              />

              <span className="moon-image-credit">
                {t('moonImageCredit')}: {selectedRelic.credit}
              </span>
            </div>

            {/* RIGHT: EQUIPMENT INFORMATION */}
            <div className="moon-details-content">
              <h2 id="moon-relic-name">
                {translateRelic(selectedRelic, 'name')}
              </h2>

              {/* WHAT IS IT */}
              <h3>{t('moonWhatIsIt')}</h3>

              <p>
                {translateRelic(selectedRelic, 'description')}
              </p>

              {/* MISSION DETAILS */}
              <h3>{t('moonMissionDetails')}</h3>

              <dl className="moon-mission-facts">
                <div>
                  <dt>{t('moonMission')}:</dt>
                  <dd>
                    {translateRelic(selectedRelic, 'mission')}
                  </dd>
                </div>

                <div>
                  <dt>{t('moonDate')}:</dt>
                  <dd>
                    {translateRelic(selectedRelic, 'date')}
                  </dd>
                </div>

                <div>
                  <dt>{t('moonLocation')}:</dt>
                  <dd>
                    {translateRelic(selectedRelic, 'location')}
                  </dd>
                </div>

                <div>
                  <dt>{t('moonStatus')}:</dt>
                  <dd>
                    {translateRelic(selectedRelic, 'status')}
                  </dd>
                </div>
              </dl>

              {/* ITS STORY */}
              <h3>{t('moonItsStory')}</h3>

              <p>
                {translateRelic(selectedRelic, 'story')}
              </p>

              {/* FUN FACT */}
              <h3>{t('moonFunFact')}</h3>

              <p>
                {translateRelic(selectedRelic, 'fact')}
              </p>

              {/* NASA SOURCE */}
              <a
                className="moon-nasa-source"
                href={selectedRelic.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('moonViewNasaSource')} ↗
              </a>

              {/* FINISH EXPLORING */}
              <button
                type="button"
                className="moon-finish-button"
                onClick={closeDetails}
              >
                {t('moonFinishExploring')} ✓
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =====================================
          MOON EXPLORATION COMPLETE
      ===================================== */}

      {allDiscovered && phase === 'idle' && (
        <div className="moon-complete-overlay">
          <section
            className="moon-complete-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="moon-complete-heading"
          >
            <h2
              id="moon-complete-heading"
              className="moon-complete-heading"
            >
              {t('moonExplorationComplete', {
                defaultValue: 'Moon Exploration Complete',
              })}
            </h2>

            <div
              className="moon-complete-rocket"
              role="img"
              aria-label="Rocket"
            >
              🚀
            </div>

            <button
              type="button"
              className="moon-continue-button"
              onClick={onContinueToMars}
              disabled={!onContinueToMars}
            >
              <span>
                {t('moonContinueToMars', {
                  defaultValue: 'Continue To Mars',
                })}
              </span>

              <span aria-hidden="true">→</span>
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default MoonExploration;
