import { GameRuntime } from '../../game/game-runtime';

export function actReturnToGameplay(runtime: GameRuntime): void {
  runtime.actions.closeSettings();
}
