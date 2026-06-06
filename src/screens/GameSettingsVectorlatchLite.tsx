// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - VectorLatch Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { X } from "lucide-react";


export type GameSettingsVectorlatchLiteActionId = "close-1" | "reset-preferences-2" | "cancel-3" | "save-and-return-4";

export interface GameSettingsVectorlatchLiteProps {
  actions?: Partial<Record<GameSettingsVectorlatchLiteActionId, () => void>>;

}

export function GameSettingsVectorlatchLite({ actions }: GameSettingsVectorlatchLiteProps) {
  return (
    <>
      {/* Blurred Gameplay Background Simulation */}
      <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center" style={{boxShadow: "0 0 20px rgba(0,240,255,0.2)"}}>
      <div className="w-24 h-24 rounded-full border border-primary/50 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-primary/10"></div>
      </div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-secondary-fixed/20 flex items-center justify-center" style={{boxShadow: "0 0 30px rgba(121,255,91,0.1)"}}>
      <div className="w-40 h-40 rounded-full border border-secondary-fixed/40"></div>
      </div>
      {/* Simulated nodes and paths */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 200 300 Q 400 100 600 500 T 1000 400" fill="none" stroke="#00F0FF" strokeWidth="1"></path>
      <path d="M 100 600 L 300 500 L 500 700 L 800 600" fill="none" stroke="#79ff5b" strokeDasharray="4 4" strokeWidth="1"></path>
      </svg>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
      </div>
      {/* Main Settings Modal (SURF_GAME_SETTINGS) */}
      <div className="relative z-10 glass-panel w-full max-w-md mx-hud-padding md:mx-0 flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="relative px-safe-area py-hud-padding border-b border-primary/20 bg-surface-container-lowest/50 scanline">
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary tracking-tight">SYSTEM CONFIG</h1>
      <p className="font-label-caps text-on-surface-variant mt-unit">VECTORLATCH LITE // V1.0</p>
      <button aria-label="Close" className="absolute top-hud-padding right-safe-area text-on-surface-variant hover:text-primary transition-colors focus:outline-none" type="button" data-action-id="close-1" onClick={actions?.["close-1"]}>
      <X  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Content Body */}
      <div className="p-safe-area flex flex-col gap-safe-area">
      {/* Performance Section */}
      <div className="flex flex-col gap-hud-padding">
      <div className="flex justify-between items-center">
      <h2 className="font-label-caps text-primary">CORE SPEED / DIFFICULTY</h2>
      <span className="font-data-point text-primary-fixed-dim bg-primary/10 px-2 py-1 rounded">LVL 4</span>
      </div>
      <div className="relative w-full mt-unit">
      <input className="range-slider w-full h-1 bg-surface-bright rounded-full outline-none appearance-none cursor-pointer" max="10" min="1" type="range" defaultValue="4" />
      <div className="flex justify-between w-full mt-2 font-data-point text-on-surface-variant text-[10px]">
      <span>SLOW</span>
      <span>NORMAL</span>
      <span>OVERDRIVE</span>
      </div>
      </div>
      </div>
      {/* Audio Section */}
      <div className="flex flex-col gap-hud-padding pt-hud-padding border-t border-primary/10">
      <h2 className="font-label-caps text-primary">AUDIO SYSTEMS</h2>
      <div className="flex justify-between items-center">
      <span className="font-data-point text-on-surface">SFX Feedback</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer toggle-checkbox" type="checkbox" defaultValue="" />
      <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all toggle-label border border-outline-variant"></div>
      </label>
      </div>
      <div className="flex justify-between items-center">
      <span className="font-data-point text-on-surface">Atmospheric Track</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer toggle-checkbox" type="checkbox" defaultValue="" />
      <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all toggle-label border border-outline-variant"></div>
      </label>
      </div>
      </div>
      {/* Input Help Section */}
      <div className="flex flex-col gap-hud-padding pt-hud-padding border-t border-primary/10">
      <h2 className="font-label-caps text-primary">INPUT TELEMETRY</h2>
      <div className="grid grid-cols-2 gap-unit bg-surface-container-lowest p-hud-padding border border-primary/10">
      <div className="flex items-center gap-2">
      <span className="px-2 py-1 bg-surface-bright text-on-surface font-data-point rounded border border-outline-variant text-xs">SPACE</span>
      </div>
      <div className="flex items-center justify-end font-data-point text-on-surface-variant text-sm text-right">
                              RELEASE LATCH
                          </div>
      <div className="flex items-center gap-2 mt-2">
      <span className="px-2 py-1 bg-surface-bright text-on-surface font-data-point rounded border border-outline-variant text-xs">P</span>
      </div>
      <div className="flex items-center justify-end font-data-point text-on-surface-variant text-sm text-right mt-2">
                              PAUSE SIMULATION
                          </div>
      </div>
      </div>
      {/* Reset */}
      <div className="flex justify-end pt-unit">
      <button className="font-label-caps text-error hover:text-error-container hover:underline decoration-1 underline-offset-4 transition-colors focus:outline-none text-[10px]" type="button" data-action-id="reset-preferences-2" onClick={actions?.["reset-preferences-2"]}>
                          [ RESET PREFERENCES ]
                      </button>
      </div>
      </div>
      {/* Footer Actions */}
      <div className="p-safe-area pt-0 flex gap-hud-padding">
      <button className="flex-1 py-3 px-4 border border-primary text-primary font-label-caps hover:bg-primary/20 transition-colors focus:outline-none text-center bg-transparent" type="button" data-action-id="cancel-3" onClick={actions?.["cancel-3"]}>
                      CANCEL
                  </button>
      <button className="flex-1 py-3 px-4 bg-primary text-background font-label-caps hover:shadow-[0_0_15px_#00F0FF] transition-shadow focus:outline-none text-center relative overflow-hidden group" type="button" data-action-id="save-and-return-4" onClick={actions?.["save-and-return-4"]}>
      <span className="relative z-10">SAVE &amp; RETURN</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
      </button>
      </div>
      </div>
    </>
  );
}
