export type ScreenName = 'boot' | 'gameplay' | 'settings';

export interface VectorLatchSettings {
  speed: number;
  sound: boolean;
  particles: boolean;
}

export interface Entity {
  lane: number;
  position: number;
}

export interface VectorLatchState {
  screen: ScreenName;
  score: number;
  highScore: number;
  lives: number;
  energy: number;
  paused: boolean;
  gameOver: boolean;
  level: number;
  player: Entity;
  obstacles: Entity[];
  shards: Entity[];
  settings: VectorLatchSettings;
  storageStatus: 'idle' | 'saving' | 'loaded' | 'error';
  lastError: string | null;
}

export const DEFAULT_SETTINGS: VectorLatchSettings = {
  speed: 1,
  sound: true,
  particles: true,
};

export function createInitialState(): VectorLatchState {
  return {
    screen: 'boot',
    score: 0,
    highScore: 0,
    lives: 3,
    energy: 100,
    paused: true,
    gameOver: false,
    level: 1,
    player: { lane: 1, position: 0 },
    obstacles: [],
    shards: [],
    settings: { ...DEFAULT_SETTINGS },
    storageStatus: 'idle',
    lastError: null,
  };
}

export interface VectorLatchActions {
  start: () => void;
  pause: () => void;
  tick: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  reset: () => void;
  saveSettings: (settings: Partial<VectorLatchSettings>) => void;
  loadSettings: (settings: Partial<VectorLatchSettings>) => void;
  openSettings: () => void;
  closeSettings: () => void;
  setStorageStatus: (status: VectorLatchState['storageStatus'], error?: string | null) => void;
}

export type VectorLatchStore = VectorLatchState & VectorLatchActions;

export function createStore(
  onChange?: (state: VectorLatchState) => void,
  getInitial?: () => VectorLatchState
): VectorLatchStore {
  let state: VectorLatchState = getInitial ? getInitial() : createInitialState();

  const notify = () => {
    if (onChange) onChange(state);
  };

  const set = (partial: Partial<VectorLatchState>) => {
    state = { ...state, ...partial };
    notify();
  };

  const clampLane = (lane: number) => Math.max(0, Math.min(2, lane));

  const store: VectorLatchStore = {
    get screen() { return state.screen; },
    get score() { return state.score; },
    get highScore() { return state.highScore; },
    get lives() { return state.lives; },
    get energy() { return state.energy; },
    get paused() { return state.paused; },
    get gameOver() { return state.gameOver; },
    get level() { return state.level; },
    get player() { return { ...state.player }; },
    get obstacles() { return state.obstacles.map((o) => ({ ...o })); },
    get shards() { return state.shards.map((s) => ({ ...s })); },
    get settings() { return { ...state.settings }; },
    get storageStatus() { return state.storageStatus; },
    get lastError() { return state.lastError; },

    start: () => {
      if (state.gameOver) {
        state = createInitialState();
      }
      set({ paused: false, screen: 'gameplay' });
    },

    pause: () => {
      set({ paused: true });
    },

    tick: () => {
      if (state.paused || state.gameOver) return;

      const speed = 0.5 + state.settings.speed * 0.5 + state.level * 0.1;
      const nextObstacles = state.obstacles
        .map((o) => ({ ...o, position: o.position + speed }))
        .filter((o) => o.position < 100);

      const nextShards = state.shards
        .map((s) => ({ ...s, position: s.position + speed }))
        .filter((s) => s.position < 100);

      let nextScore = state.score + 1;
      let nextEnergy = Math.max(0, state.energy - 0.05);
      let nextLives = state.lives;
      let nextGameOver: boolean = state.gameOver;
      let nextLevel: number = state.level;

      if (nextObstacles.some((o) => o.lane === state.player.lane && o.position >= 90 && o.position <= 100)) {
        nextLives = Math.max(0, nextLives - 1);
        nextEnergy = Math.max(0, nextEnergy - 20);
      }

      if (nextShards.some((s) => s.lane === state.player.lane && s.position >= 90 && s.position <= 100)) {
        nextEnergy = Math.min(100, nextEnergy + 10);
        nextScore += 50;
      }

      if (nextLives <= 0 || nextEnergy <= 0) {
        nextGameOver = true;
      }

      if (nextScore > 0 && nextScore % 500 === 0) {
        nextLevel += 1;
      }

      const highScore = Math.max(state.highScore, nextScore);

      if (Math.random() < 0.02 && nextObstacles.length < 4) {
        nextObstacles.push({ lane: Math.floor(Math.random() * 3), position: 0 });
      }
      if (Math.random() < 0.01 && nextShards.length < 2) {
        nextShards.push({ lane: Math.floor(Math.random() * 3), position: 0 });
      }

      set({
        obstacles: nextObstacles,
        shards: nextShards,
        score: nextScore,
        energy: nextEnergy,
        lives: nextLives,
        gameOver: nextGameOver,
        level: nextLevel,
        highScore,
        paused: nextGameOver ? true : state.paused,
      });
    },

    moveLeft: () => {
      set({ player: { ...state.player, lane: clampLane(state.player.lane - 1) } });
    },

    moveRight: () => {
      set({ player: { ...state.player, lane: clampLane(state.player.lane + 1) } });
    },

    reset: () => {
      state = createInitialState();
      notify();
    },

    saveSettings: (partial) => {
      set({ settings: { ...state.settings, ...partial } });
    },

    loadSettings: (partial) => {
      set({ settings: { ...DEFAULT_SETTINGS, ...partial } });
    },

    openSettings: () => {
      set({ screen: 'settings', paused: true });
    },

    closeSettings: () => {
      set({ screen: 'gameplay' });
    },

    setStorageStatus: (status, error = null) => {
      set({ storageStatus: status, lastError: error ?? null });
    },
  };

  return store;
}
