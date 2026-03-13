'use client';
import Particles from 'react-particles';
import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';

export default function Stars({ id }: { id: string }) {
  const customInit = useCallback(async (engine: Engine): Promise<void> => {
    loadStarsPreset(engine);
  }, []);
  return (
    <Particles
      id={id + '-container'}
      options={{
        id,
        preset: 'stars',
        fullScreen: { enable: true, zIndex: -10 },
        background: {
          color: {
            value: '',
          },
        },
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.25,
          },
          move: {
            speed: 0.5,
          },
        },
      }}
      init={customInit}
    />
  );
}
