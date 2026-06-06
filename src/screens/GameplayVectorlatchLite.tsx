// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - VectorLatch Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Pause } from "lucide-react";


export type GameplayVectorlatchLiteActionId = "act-pause-game-1" | "act-start-game-2";

export interface GameplayVectorlatchLiteProps {
  actions?: Partial<Record<GameplayVectorlatchLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayVectorlatchLite({ actions, runtime }: GameplayVectorlatchLiteProps) {
  void runtime;
  return (
    <>
      {/* HUD Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none p-safe-area flex flex-col justify-between">
      {/* Top HUD */}
      <div className="flex justify-between items-start pointer-events-auto">
      {/* Score & Level */}
      <div className="bg-surface/70 backdrop-blur-md border border-primary/20 p-hud-padding rounded-DEFAULT scanline relative overflow-hidden flex items-center gap-6">
      <div>
      <div className="font-label-caps text-label-caps text-outline-variant mb-1">SCORE</div>
      <div className="font-display-score text-display-score text-primary glow-cyan">01459</div>
      </div>
      <div className="h-10 w-px bg-primary/20"></div>
      <div className="text-right">
      <div className="font-label-caps text-label-caps text-outline-variant mb-1">LVL</div>
      <div className="font-data-point text-data-point text-secondary-container">04</div>
      </div>
      </div>
      {/* Top Right Controls & Status */}
      <div className="flex gap-4 items-center">
      {/* Latch Power Meter */}
      <div className="bg-surface/70 backdrop-blur-md border border-primary/20 p-hud-padding rounded-DEFAULT scanline flex flex-col gap-2 w-48 hidden md:flex">
      <div className="flex justify-between font-label-caps text-label-caps">
      <span className="text-outline-variant">LATCH POWER</span>
      <span className="text-tertiary-container">85%</span>
      </div>
      <div className="h-2 bg-surface-container-high rounded-full overflow-hidden w-full relative">
      <div className="absolute top-0 left-0 h-full w-[85%] bg-tertiary-container shadow-[0_0_10px_rgba(255,201,244,0.5)]"></div>
      </div>
      </div>
      {/* Pause Button */}
      <button aria-label="ACT_PAUSE_GAME" className="bg-surface/70 backdrop-blur-md border border-primary/20 p-3 rounded-DEFAULT hover:bg-primary/10 transition-colors text-primary" type="button" data-action-id="act-pause-game-1" onClick={actions?.["act-pause-game-1"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Bottom HUD */}
      <div className="flex justify-center pointer-events-auto">
      {/* Mobile Latch Power Meter */}
      <div className="md:hidden bg-surface/70 backdrop-blur-md border border-primary/20 p-hud-padding rounded-DEFAULT scanline flex flex-col gap-2 w-full max-w-xs">
      <div className="flex justify-between font-label-caps text-label-caps">
      <span className="text-outline-variant">PWR</span>
      <span className="text-tertiary-container">85%</span>
      </div>
      <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden w-full relative">
      <div className="absolute top-0 left-0 h-full w-[85%] bg-tertiary-container shadow-[0_0_10px_rgba(255,201,244,0.5)]"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Playfield (Canvas Area) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-safe-area">
      {/* The Vector Rail */}
      <div className="w-full h-1 bg-primary/30 relative shadow-[0_0_20px_rgba(0,240,255,0.4)]">
      {/* Central Line Brightness */}
      <div className="absolute inset-0 h-px bg-primary/80 top-1/2 -translate-y-1/2"></div>
      {/* Vector Nodes (Green) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-4 h-4 rounded-full border-2 border-secondary-container bg-secondary-container/10 glow-green"></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-[50%] w-6 h-6 rounded-full border-2 border-secondary-container bg-secondary-container/20 glow-green flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-secondary-container rounded-full"></div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-[80%] w-4 h-4 rounded-full border-2 border-secondary-container bg-secondary-container/10 glow-green"></div>
      {/* The Latch (Magenta) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-8 h-12 md:w-12 md:h-16 border-2 border-[#ff00ff] bg-[#ff00ff]/20 glow-magenta latch-animation flex flex-col justify-between items-center py-1">
      <div className="w-full h-0.5 bg-[#ff00ff]"></div>
      <div className="w-2 h-2 rounded-full bg-[#ff00ff] shadow-[0_0_5px_#ff00ff]"></div>
      <div className="w-full h-0.5 bg-[#ff00ff]"></div>
      </div>
      </div>
      </div>
      {/* Pre-game / Start Overlay (Hidden during active gameplay, shown here for state requirement) */}
      <div className="absolute inset-0 z-40 bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center flex-col gap-8 hidden" id="startScreen">
      <h1 className="font-headline-lg text-headline-lg md:text-[64px] text-primary tracking-widest glow-cyan">VECTORLATCH LITE</h1>
      <button aria-label="ACT_START_GAME" className="bg-primary-container text-on-primary-container px-8 py-4 font-label-caps text-label-caps rounded-DEFAULT hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-colors active:scale-95" type="button" data-action-id="act-start-game-2" onClick={actions?.["act-start-game-2"]}>
                  START GAME
              </button>
      </div>
    </>
  );
}
