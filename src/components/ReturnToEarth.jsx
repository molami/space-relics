
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import spaceship from '../assets/spaceship.png';
import mars from '../assets/mars.png';
import moon from '../assets/moon.png';
import earth from '../assets/earth.png';
import stars from '../assets/stars.png';

import './ReturnToEarth.css';

function ReturnToEarth({ onComplete }) {
  const { t } = useTranslation();

  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');

  // Same 5-second preparation as the other launch screens.
  useEffect(() => {
    if (phase !== 'loading') return;

    const startTime = performance.now();
    const loadingDuration = 5000;
    let animationFrame;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;

      const percentage = Math.min(
        (elapsed / loadingDuration) * 100,
        100
      );

      setProgress(percentage);

      if (percentage < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setPhase('travelling');
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, [phase]);

  // Two 10-second journeys:
  // Mars -> Moon -> Earth.
  useEffect(() => {
    if (phase !== 'travelling') return;

    const timer = setTimeout(() => {
      onComplete?.();
    }, 20000);

    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <main
      className={`return-screen ${
        phase === 'travelling' ? 'travelling' : ''
      }`}
      style={{ backgroundImage: `url(${stars})` }}
    >
      <img
        src={mars}
        alt=""
        className="return-mars"
      />

      <img
        src={moon}
        alt=""
        className="return-moon"
      />

      <img
        src={earth}
        alt=""
        className="return-earth"
      />

      <img
        src={spaceship}
        alt={t('spaceshipAlt')}
        className="return-spaceship"
      />

      {phase === 'loading' && (
        <div className="return-loading">
          <h1>
            {t('returnDestination', {
              defaultValue: 'Destination: Earth',
            })}
          </h1>

          <p>
            {t('returnPreparingLaunch', {
              defaultValue:
                'Preparing for your journey home...',
            })}
          </p>

          <div
            className="return-progress-track"
            role="progressbar"
            aria-label={t('returnPreparingLaunch', {
              defaultValue:
                'Preparing for your journey home...',
            })}
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="return-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default ReturnToEarth;
