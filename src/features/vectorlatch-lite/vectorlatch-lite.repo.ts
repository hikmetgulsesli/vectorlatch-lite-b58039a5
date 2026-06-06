import { VectorLatchSettings, DEFAULT_SETTINGS } from './vectorlatch-lite.store';

const STORAGE_KEY = 'vectorlatch-lite:settings';
const HIGH_SCORE_KEY = 'vectorlatch-lite:highScore';

export interface PersistedSettings {
  settings: VectorLatchSettings;
  highScore: number;
}

export function readSettings(): Partial<VectorLatchSettings> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<VectorLatchSettings>;
    return {
      speed: typeof parsed.speed === 'number' ? parsed.speed : DEFAULT_SETTINGS.speed,
      sound: typeof parsed.sound === 'boolean' ? parsed.sound : DEFAULT_SETTINGS.sound,
      particles: typeof parsed.particles === 'boolean' ? parsed.particles : DEFAULT_SETTINGS.particles,
    };
  } catch {
    return {};
  }
}

export function writeSettings(settings: VectorLatchSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // ignore storage errors
  }
}

export function readHighScore(): number {
  try {
    const raw = localStorage.getItem(HIGH_SCORE_KEY);
    if (!raw) return 0;
    const parsed = parseInt(raw, 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
  } catch {
    return 0;
  }
}

export function writeHighScore(highScore: number): void {
  try {
    localStorage.setItem(HIGH_SCORE_KEY, String(highScore));
  } catch {
    // ignore storage errors
  }
}

export function clearPersistence(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(HIGH_SCORE_KEY);
  } catch {
    // ignore
  }
}
