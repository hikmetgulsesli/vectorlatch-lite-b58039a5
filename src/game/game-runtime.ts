import { createStore, VectorLatchStore } from '../features/vectorlatch-lite/vectorlatch-lite.store';
import { readSettings, writeSettings, readHighScore, writeHighScore } from '../features/vectorlatch-lite/vectorlatch-lite.repo';

declare global {
  interface Window {
    app: { state: VectorLatchStore; actions: VectorLatchRuntimeActions };
  }
}

export interface VectorLatchRuntimeActions {
  start: () => void;
  pause: () => void;
  tick: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  reset: () => void;
  saveSettings: (settings: Parameters<VectorLatchStore['saveSettings']>[0]) => void;
  loadSettings: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  resetPreferences: () => void;
}

export interface GameRuntime {
  store: VectorLatchStore;
  actions: VectorLatchRuntimeActions;
  startLoop: () => void;
  stopLoop: () => void;
}

export function createGameRuntime(): GameRuntime {
  let rafId: number | null = null;
  let lastTick = 0;

  const initialSettings = readSettings();
  const initialHighScore = readHighScore();

  const store = createStore(() => {
    if (store.highScore > 0) {
      writeHighScore(store.highScore);
    }
  });

  store.loadSettings(initialSettings);
  if (initialHighScore > 0) {
    store.setStorageStatus('loaded');
  }

  const actions: VectorLatchRuntimeActions = {
    start: () => store.start(),
    pause: () => store.pause(),
    tick: () => store.tick(),
    moveLeft: () => store.moveLeft(),
    moveRight: () => store.moveRight(),
    reset: () => store.reset(),
    saveSettings: (partial) => {
      store.saveSettings(partial);
      writeSettings(store.settings);
    },
    loadSettings: () => {
      const loaded = readSettings();
      store.loadSettings(loaded);
    },
    openSettings: () => store.openSettings(),
    closeSettings: () => store.closeSettings(),
    resetPreferences: () => {
      store.loadSettings({});
      writeSettings(store.settings);
    },
  };

  const tick = (ts: number) => {
    if (lastTick === 0) lastTick = ts;
    if (ts - lastTick >= 50) {
      actions.tick();
      lastTick = ts;
    }
    rafId = requestAnimationFrame(tick);
  };

  const startLoop = () => {
    if (rafId !== null) return;
    lastTick = 0;
    rafId = requestAnimationFrame(tick);
  };

  const stopLoop = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const runtime: GameRuntime = { store, actions, startLoop, stopLoop };

  const appRef = { state: store, actions };
  window.app = appRef;
  (globalThis as unknown as Record<string, typeof appRef>).app = appRef;

  return runtime;
}
