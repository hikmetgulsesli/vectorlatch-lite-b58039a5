import { createStore, VectorLatchStore, createInitialState, VectorLatchState } from '../features/vectorlatch-lite/vectorlatch-lite.store';
import { createGameRuntime, GameRuntime } from '../game/game-runtime';

export interface TestBridge {
  store: VectorLatchStore;
  runtime: GameRuntime;
  reset: () => void;
  setState: (state: VectorLatchState) => void;
}

export function createTestBridge(initialState?: VectorLatchState): TestBridge {
  const store = createStore(undefined, () => initialState ?? createInitialState());
  const runtime = createGameRuntime();

  const reset = () => {
    runtime.stopLoop();
    runtime.store.reset();
  };

  const setState = (state: VectorLatchState) => {
    Object.assign(runtime.store, state);
  };

  return { store, runtime, reset, setState };
}

export { createInitialState, createStore, createGameRuntime };
export type { VectorLatchStore, VectorLatchState, GameRuntime };
