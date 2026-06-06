import { createInitialState, VectorLatchState, VectorLatchSettings, DEFAULT_SETTINGS } from '../features/vectorlatch-lite/vectorlatch-lite.store';

export const fixtureSettings: VectorLatchSettings = {
  speed: 2,
  sound: false,
  particles: false,
};

export const fixtureState: VectorLatchState = {
  ...createInitialState(),
  screen: 'gameplay',
  score: 1200,
  highScore: 3500,
  lives: 2,
  energy: 75,
  paused: false,
  level: 3,
  player: { lane: 1, position: 50 },
  obstacles: [
    { lane: 0, position: 20 },
    { lane: 2, position: 60 },
  ],
  shards: [
    { lane: 1, position: 80 },
  ],
  settings: fixtureSettings,
  storageStatus: 'loaded',
  lastError: null,
};

export const fixtureBootState: VectorLatchState = {
  ...createInitialState(),
  screen: 'boot',
};

export const fixtureSettingsState: VectorLatchState = {
  ...createInitialState(),
  screen: 'settings',
  paused: true,
};
