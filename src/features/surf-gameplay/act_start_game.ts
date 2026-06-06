import { GameRuntime } from '../../game/game-runtime';

export function actStartGame(runtime: GameRuntime): void {
  runtime.actions.start();
}
