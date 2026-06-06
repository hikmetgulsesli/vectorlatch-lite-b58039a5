import { GameRuntime } from '../../game/game-runtime';

export function actPauseGame(runtime: GameRuntime): void {
  runtime.actions.pause();
}
