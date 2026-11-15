
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import spaceship from '../assets/spaceship.png';
import moon from '../assets/moon.png';
import mars from '../assets/mars.png';
import stars from '../assets/stars.png';

import './MarsLaunch.css';

function MarsLaunch({ onComplete }) {
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
      className={`mars-launch-screen ${
        phase === 'travelling' ? 'travelling' : ''
      }`}
      style={{ backgroundImage: `url(${stars})` }}
    >
      <img
        src={moon}
        alt=""
        className="mars-launch-moon"
      />

      <img
        src={mars}
        alt=""
        className="mars-launch-planet"
      />

      <img
        src={spaceship}
        alt={t('spaceshipAlt')}
        className="mars-launch-spaceship"
      />

      {phase === 'loading' && (
        <div className="mars-launch-loading">
          <h1>{t('marsLaunchDestination')}</h1>

          <p>{t('marsPreparingLaunch')}</p>

          <div
            className="mars-launch-progress-track"
            role="progressbar"
            aria-label={t('marsPreparingLaunch')}
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="mars-launch-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default MarsLaunch;
