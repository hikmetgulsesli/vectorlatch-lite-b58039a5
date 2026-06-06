import { GameRuntime } from '../../game/game-runtime';

export function actSavePreferences(runtime: GameRuntime): void {
  runtime.actions.saveSettings(runtime.store.settings);
}
