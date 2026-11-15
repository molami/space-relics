
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import spaceship from '../assets/spaceship.png';
import moon from '../assets/moon.png';
import earth from '../assets/earth.png';
import stars from '../assets/stars.png';

import './LaunchScreen.css';

function LaunchScreen({ onComplete }) {
  const { t } = useTranslation();

  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
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
        setPhase('travelling');
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    if (phase !== 'travelling') return;

    const timer = setTimeout(() => {
  onComplete?.();
}, 10000);

    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <main
      className={`launch-screen ${
        phase === 'travelling' ? 'travelling' : ''
      }`}
      style={{ backgroundImage: `url(${stars})` }}
    >
      <img
        src={earth}
        alt=""
        className="launch-earth"
      />

      <img
        src={moon}
        alt=""
        className="launch-moon"
      />

      <img
        src={spaceship}
        alt={t('spaceshipAlt')}
        className="launch-spaceship"
      />

      {phase === 'loading' && (
        <div className="launch-loading">
          <h1>{t('launchDestination')}</h1>
          <p>{t('preparingLaunch')}</p>

          <div
            className="launch-progress-track"
            role="progressbar"
            aria-label={t('preparingLaunch')}
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="launch-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default LaunchScreen;
