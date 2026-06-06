---
name: VectorLatch Lite
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2eb'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e1e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#d7ffc5'
  on-secondary: '#053900'
  secondary-container: '#2ff801'
  on-secondary-container: '#0f6d00'
  tertiary: '#fff3f9'
  on-tertiary: '#5b005b'
  tertiary-container: '#ffc9f4'
  on-tertiary-container: '#a900a9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#79ff5b'
  secondary-fixed-dim: '#2ae500'
  on-secondary-fixed: '#022100'
  on-secondary-fixed-variant: '#095300'
  tertiary-fixed: '#ffd7f5'
  tertiary-fixed-dim: '#ffabf3'
  on-tertiary-fixed: '#380038'
  on-tertiary-fixed-variant: '#810081'
  background: '#10131a'
  on-background: '#e1e2eb'
  surface-variant: '#32353c'
typography:
  display-score:
    fontFamily: Space Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  data-point:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  hud-padding: 16px
  gutter: 12px
  safe-area: 24px
  node-gap: 8px
---

## Brand & Style

The design system is engineered for high-octane, arcade-style gameplay within a browser environment. It channels a "Cyber-Industrial" aesthetic, blending the precision of vector graphics with the immersive depth of modern glassmorphism. The target audience consists of competitive players who value clarity, speed, and visual flair. 

The visual style leverages **Glassmorphism** and **Retro-Futurism**. Elements are treated as digital overlays—Heads-Up Display (HUD) components that feel projected onto the screen rather than fixed. The emotional response is one of urgency and focus, achieved through high-contrast neon accents against deep, technical backgrounds.

- **Primary Style:** Glassmorphism with neon accents.
- **Visual Weight:** Light and translucent for UI; solid and vibrant for gameplay nodes.
- **Motion Philosophy:** Kinetic. Every interaction should trigger a responsive glow or a sharp, geometric transition.

## Colors

The palette is rooted in a deep "Void" background to maximize the luminosity of the neon "Vector" accents.

- **Primary (Electric Blue):** Used for active vector nodes, primary action buttons, and player status indicators.
- **Success (Cyber Lime):** Reserved for score increases, power-up activations, and "Go" states.
- **Warning/Danger (Hot Magenta):** Used for enemy hazards, health depletion, and critical alerts.
- **Surface:** A mid-tone charcoal with alpha transparency (60-80%) to create the glass effect, allowing game-world motion to remain partially visible behind the HUD.

## Typography

This design system uses a triple-font approach to distinguish between navigation, information, and gameplay data.

1.  **Space Grotesk (Headlines):** Its geometric construction mirrors the "vector" theme. Use this for screen titles and major UI headers.
2.  **Inter (UI/Body):** A neutral, highly legible sans-serif for settings, descriptions, and tooltips where clarity is paramount.
3.  **Space Mono (Data/Scores):** A monospaced font used for the HUD, score counters, and technical readouts. The fixed character width ensures that rapidly changing numbers (like high scores) do not cause layout jitter.

**Note:** All "Label Caps" should be rendered in uppercase with wide letter spacing to mimic military-spec equipment readouts.

## Layout & Spacing

The layout follows a **Fixed HUD / Fluid Playfield** model. To maximize the 'playfield' area, the UI is pushed to the periphery with tight, efficient spacing.

- **The HUD Grid:** Use a 4px base unit. HUD elements are docked to the corners (Top-Left for Stats, Top-Right for Menu/Pause, Bottom-Center for Ability Cooldowns).
- **Margins:** A 24px "Safe Area" margin is maintained around the screen edges on Desktop, reducing to 16px on Mobile.
- **Breakpoints:**
    - **Mobile (<600px):** HUD elements collapse into condensed icons. Typography scales down 20%.
    - **Tablet/Desktop (>600px):** Full expanded data readouts and persistent side-bars for social/leaderboards.

## Elevation & Depth

Visual hierarchy is managed through **Glassmorphism and Glow**, rather than traditional shadows.

- **Layer 0 (Background):** Solid `#0B0E14`.
- **Layer 1 (The Playfield):** Dynamic game objects (Vector Nodes). These use an outer glow (bloom) of 10-20px using their respective neon colors.
- **Layer 2 (HUD Surfaces):** Surfaces use `#1A1F26` at 70% opacity with a `backdrop-filter: blur(12px)`.
- **Accents:** Every surface must have a 1px solid border. Use a low-opacity version of the Primary Cyan (`#00F0FF33`) for standard panels, and a high-opacity version for active/focused elements.

## Shapes

The shape language is "Soft-Tech." While the world is built on geometric vectors, the UI utilizes subtle rounding to prevent the interface from feeling overly "sharp" or hostile.

- **Base Radius:** 4px (Soft). Used for small buttons, input fields, and chips.
- **Large Radius:** 8px. Used for HUD containers and modal windows.
- **Interactive Elements:** Use chamfered (clipped) corners for primary action buttons to reinforce the industrial/arcade aesthetic.

## Components

### Buttons
- **Primary:** Solid Cyan (`#00F0FF`) background with black text. On hover, add a `box-shadow` glow of 15px in Cyan.
- **Ghost:** 1px Cyan border, transparent background. Fill with 20% Cyan on hover.

### HUD Chips
Small, monospaced data containers. Example: `[ LVL 99 ]`. These should have a slight inner glow and a dark semi-transparent background.

### Input Fields
Dark backgrounds (`#0B0E14`) with a Cyan bottom-border only. When focused, the bottom border glows and the label shifts upward.

### Cards / HUD Panels
Glassmorphic containers. Headers within these panels should have a subtle scanline pattern overlay (2px height, 5% opacity black stripes).

### Health & Progress Bars
Backgrounds are dark grey. The "Fill" is a solid neon color with a "pulse" animation when the value changes. Danger state (below 20%) triggers a Magenta flash.

### Vector Nodes (Gameplay)
Circles or Polygons with a 2px stroke of Primary/Success/Warning colors. Central fill should be 10% opacity of the stroke color.