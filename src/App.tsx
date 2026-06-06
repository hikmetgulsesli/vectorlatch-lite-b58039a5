import { useEffect, useMemo, useState } from 'react';
import { GameplayVectorlatchLite, GameSettingsVectorlatchLite } from './screens';
import { createGameRuntime } from './game/game-runtime';
import { actStartGame } from './features/surf-gameplay/act_start_game';
import { actPauseGame } from './features/surf-gameplay/act_pause_game';
import { actRestartGame } from './features/surf-gameplay/act_restart_game';
import type { VectorLatchStore } from './features/vectorlatch-lite/vectorlatch-lite.store';

export default function App() {
  const runtime = useMemo(() => createGameRuntime(), []);
  const [, forceRender] = useState(0);

  useEffect(() => {
    runtime.startLoop();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') runtime.actions.moveLeft();
      if (e.key === 'ArrowRight') runtime.actions.moveRight();
      if (e.key === 'p' || e.key === 'P') actPauseGame(runtime);
      if (e.key === 'r' || e.key === 'R') actRestartGame(runtime);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      runtime.stopLoop();
      window.removeEventListener('keydown', handleKey);
    };
  }, [runtime]);

  const store = runtime.store as VectorLatchStore;

  const gameplayActions = {
    'act-pause-game-1': () => actPauseGame(runtime),
    'act-start-game-2': () => {
      actStartGame(runtime);
      forceRender((n) => n + 1);
    },
    'act-restart-game-3': () => {
      actRestartGame(runtime);
      forceRender((n) => n + 1);
    },
  };

  const settingsActions = {
    'close-1': () => runtime.actions.closeSettings(),
    'reset-preferences-2': () => runtime.actions.resetPreferences(),
    'cancel-3': () => runtime.actions.closeSettings(),
    'save-and-return-4': () => {
      runtime.actions.saveSettings(store.settings);
      runtime.actions.closeSettings();
    },
  };

  const runtimeProp = {
    player: store.player,
    obstacles: store.obstacles,
    shards: store.shards,
    score: store.score,
    energy: store.energy,
    lives: store.lives,
    paused: store.paused,
    level: store.level,
    gameOver: store.gameOver,
  };

  return (
    <div
      data-setfarm-root="app"
      data-testid="setfarm-app-root"
      className="relative min-h-screen w-full overflow-hidden bg-surface-container-lowest text-on-surface"
    >
      {store.screen === 'gameplay' && (
        <GameplayVectorlatchLite actions={gameplayActions} runtime={runtimeProp} />
      )}
      {store.screen === 'settings' && (
        <GameSettingsVectorlatchLite actions={settingsActions} />
      )}
      {store.screen === 'boot' && (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-unit">
          <h1 className="font-headline-lg text-headline-lg glow-cyan">VectorLatch Lite</h1>
          <button
            type="button"
            data-action-id="act-start-game-2"
            onClick={() => {
              actStartGame(runtime);
              forceRender((n) => n + 1);
            }}
            className="rounded-DEFAULT bg-primary-container px-8 py-4 font-label-caps text-label-caps text-on-primary-container hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-colors active:scale-95"
          >
            START GAME
          </button>
        </div>
      )}
    </div>
  );
}
