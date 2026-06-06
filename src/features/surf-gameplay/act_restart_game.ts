import { GameRuntime } from '../../game/game-runtime';

export function actRestartGame(runtime: GameRuntime): void {
  runtime.actions.reset();
  runtime.actions.start();
}
