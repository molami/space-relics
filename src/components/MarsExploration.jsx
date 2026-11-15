
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import marsLandscape from '../assets/mars-landscape.jpg';
import opportunityRover from '../assets/opportunity-rover.jpg';
import ingenuityHelicopter from '../assets/ingenuity-helicopter.jpg';
import insightLander from '../assets/insight-lander.jpg';

import './MarsExploration.css';

const SCAN_DURATION = 4000;

// ========================================
// MARS EQUIPMENT DATA
// ========================================

const relics = [
  {
    id: 'opportunity-rover',
    translationKey: 'opportunity',
    image: opportunityRover,
    x: 19,
    y: 51,
    credit:
      'NASA/JPL-Caltech/Cornell Univ./Arizona State Univ.',
    source:
      'https://science.nasa.gov/mission/mer-opportunity/',
    info: {
      name: 'Opportunity Rover',
      description:
        'Opportunity was a robotic rover sent to explore the surface of Mars. It studied rocks and soil to help scientists understand whether Mars once had conditions suitable for life.',
      mission: 'Mars Exploration Rover (MER)',
      date: 'January 25, 2004',
      location: 'Meridiani Planum, Mars',
      status: 'Mission ended in 2018',
      story:
        'Opportunity was designed to operate for just 90 Martian days, but it explored Mars for nearly 15 years. It travelled more than 45 kilometres and found evidence that liquid water existed on ancient Mars. A major dust storm in 2018 prevented the rover from recharging its solar-powered batteries.',
      fact:
        'Opportunity travelled farther on another world than any previous wheeled vehicle, covering approximately 45.16 kilometres.',
    },
  },
  {
    id: 'ingenuity-helicopter',
    translationKey: 'ingenuity',
    image: ingenuityHelicopter,
    x: 66,
    y: 29,
    credit: 'NASA/JPL-Caltech',
    source:
      'https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/',
    info: {
      name: 'Ingenuity Mars Helicopter',
      description:
        'Ingenuity was a small robotic helicopter that demonstrated powered, controlled flight in the extremely thin atmosphere of Mars.',
      mission: 'Mars 2020 / Ingenuity',
      date: 'April 19, 2021',
      location: 'Jezero Crater, Mars',
      status: 'Mission ended in January 2024',
      story:
        'Ingenuity arrived on Mars attached to the Perseverance rover. Its first flight marked the first powered, controlled flight on another planet. Originally planned for only five flights, it completed 72 flights before rotor damage brought its flying mission to an end.',
      fact:
        'Ingenuity made 72 flights on Mars, far exceeding its original five-flight technology demonstration.',
    },
  },
  {
    id: 'insight-lander',
    translationKey: 'insight',
    image: insightLander,
    x: 78,
    y: 55,
    credit: 'NASA/JPL-Caltech',
    source:
      'https://science.nasa.gov/mission/insight/',
    info: {
      name: 'NASA InSight Lander',
      description:
        'InSight was a stationary Mars lander designed to investigate the planet’s interior by studying marsquakes, heat, and other geophysical activity.',
      mission: 'InSight',
      date: 'November 26, 2018',
      location: 'Elysium Planitia, Mars',
      status: 'Mission ended in December 2022',
      story:
        'Unlike rovers that travel across the surface, InSight stayed in one place to listen to Mars. Its seismometer detected marsquakes, helping scientists learn about the planet’s crust, mantle, and core. Dust accumulating on its solar panels eventually reduced its power supply.',
      fact:
        'InSight detected more than 1,300 marsquakes during its mission.',
    },
  },
];

function MarsExploration({ onBackToEarth }) {
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
  // TRANSLATIONS
  // ========================================

  const translateRelic = (relic, field) =>
    t(`relics.${relic.translationKey}.${field}`, {
      defaultValue: relic.info[field],
    });

  const translate = (key, fallback, options = {}) =>
    t(key, {
      defaultValue: fallback,
      ...options,
    });

  // ========================================
  // DISCOVERY PROGRESS
  // ========================================

  const discoveredCount = discovered.length;
  const totalLocations = relics.length;
  const allDiscovered = discoveredCount === totalLocations;

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
    if (phase !== 'idle' || allDiscovered) return;

    setSelectedRelic(relic);

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
  // MARS EXPLORATION SCREEN
  // ========================================

  return (
    <main
      className="mars-exploration"
      style={{
        backgroundImage: `url(${marsLandscape})`,
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
            className={`mars-discovery-pin ${
              isDiscovered
                ? 'mars-discovery-pin--found'
                : ''
            }`}
            style={{
              left: `${relic.x}%`,
              top: `${relic.y}%`,
            }}
            onClick={() => openRelic(relic)}
            aria-label={translateRelic(relic, 'name')}
            disabled={phase !== 'idle' || allDiscovered}
          >
            <span className="mars-discovery-pin-glow" />

            <svg
              className="mars-discovery-pin-shape"
              viewBox="0 0 110 135"
              aria-hidden="true"
            >
              <path
                className="mars-discovery-pin-outline"
                d="M55 3 C26 3 3 26 3 55 C3 91 55 130 55 130 C55 130 107 91 107 55 C107 26 84 3 55 3 Z"
              />

              <circle
                className="mars-discovery-pin-ring"
                cx="55"
                cy="55"
                r="44"
              />

              <circle
                className="mars-discovery-pin-inner"
                cx="55"
                cy="55"
                r="31"
              />

              <text
                className="mars-discovery-pin-symbol"
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

      <section className="mars-progress-panel">
        <p className="mars-progress-instruction">
          {allDiscovered
            ? translate(
                'marsAllDiscovered',
                'All objects have been discovered'
              )
            : phase === 'scanning'
              ? translate(
                  'marsScanningInstruction',
                  'Please wait while we scan this object'
                )
              : translate(
                  'marsSelectMarker',
                  'Select a discovery marker to investigate an object'
                )}
        </p>

        {phase !== 'scanning' && (
          <div className="mars-progress-row">
            <span className="mars-progress-count">
              {translate(
                'marsDiscoveredCount',
                '{{count}} of {{total}} discovered',
                {
                  count: discoveredCount,
                  total: totalLocations,
                }
              )}
            </span>

            <div
              className="mars-progress-track"
              role="progressbar"
              aria-valuenow={discoveredCount}
              aria-valuemin={0}
              aria-valuemax={totalLocations}
              aria-label={translate(
                'marsDiscoveryProgress',
                'Mars discovery progress'
              )}
            >
              {relics.map((relic, index) => {
                const completed = discovered.includes(relic.id);

                return (
                  <span
                    key={relic.id}
                    className={`mars-progress-dot ${
                      completed
                        ? 'mars-progress-dot--complete'
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
        <div className="mars-scan-overlay">
          <section
            className="mars-scan-card"
            role="status"
            aria-label={translate('marsScanning', 'Scanning')}
          >
            <img
              src={selectedRelic.image}
              alt=""
              className="mars-scan-image"
            />

            <div className="mars-scan-glass" />

            <div className="mars-scan-content">
              <h2>
                {translate('marsScanning', 'Scanning')}
              </h2>

              <div
                className="mars-scan-track"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(scanProgress)}
                aria-label={translate(
                  'marsScanning',
                  'Scanning'
                )}
              >
                <div
                  className="mars-scan-fill"
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
        <div className="mars-details-overlay">
          <section
            className="mars-details-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mars-relic-name"
          >
            <button
              type="button"
              className="mars-details-close"
              onClick={closeDetails}
              aria-label={translate('moonClose', 'Close')}
            >
              ×
            </button>

            {/* EQUIPMENT IMAGE */}

            <div className="mars-details-image-column">
              <img
                src={selectedRelic.image}
                alt={translateRelic(selectedRelic, 'name')}
                className="mars-details-image"
              />

              <span className="mars-image-credit">
                {translate(
                  'moonImageCredit',
                  'Image credit'
                )}: {selectedRelic.credit}
              </span>
            </div>

            {/* EQUIPMENT INFORMATION */}

            <div className="mars-details-content">
              <h2 id="mars-relic-name">
                {translateRelic(selectedRelic, 'name')}
              </h2>

              <h3>{t('moonWhatIsIt')}</h3>

              <p>
                {translateRelic(
                  selectedRelic,
                  'description'
                )}
              </p>

              <h3>{t('moonMissionDetails')}</h3>

              <dl className="mars-mission-facts">
                <div>
                  <dt>{t('moonMission')}:</dt>
                  <dd>
                    {translateRelic(
                      selectedRelic,
                      'mission'
                    )}
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
                    {translateRelic(
                      selectedRelic,
                      'location'
                    )}
                  </dd>
                </div>

                <div>
                  <dt>{t('moonStatus')}:</dt>
                  <dd>
                    {translateRelic(
                      selectedRelic,
                      'status'
                    )}
                  </dd>
                </div>
              </dl>

              <h3>{t('moonItsStory')}</h3>

              <p>
                {translateRelic(selectedRelic, 'story')}
              </p>

              <h3>{t('moonFunFact')}</h3>

              <p>
                {translateRelic(selectedRelic, 'fact')}
              </p>

              <a
                className="mars-nasa-source"
                href={selectedRelic.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('moonViewNasaSource')} ↗
              </a>

              <button
                type="button"
                className="mars-finish-button"
                onClick={closeDetails}
              >
                {t('moonFinishExploring')} ✓
              </button>
            </div>
          </section>
        </div>
      )}

      {/* =====================================
          MARS EXPLORATION COMPLETE
      ===================================== */}

      {allDiscovered && phase === 'idle' && (
        <div className="mars-complete-overlay">
          <section
            className="mars-complete-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mars-complete-heading"
          >
            <h2
              id="mars-complete-heading"
              className="mars-complete-heading"
            >
              {translate(
                'marsExplorationComplete',
                'Mars Exploration Complete'
              )}
            </h2>

            <div
              className="mars-complete-rocket"
              role="img"
              aria-label="Rocket"
            >
              🚀
            </div>

            <button
              type="button"
              className="mars-continue-button"
              onClick={onBackToEarth}
              disabled={!onBackToEarth}
            >
              <span>
                {translate(
                  'marsBackToEarth',
                  'Back To Earth'
                )}
              </span>

              <span aria-hidden="true">→</span>
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default MarsExploration;
