# TD Phaser Starter

A cleaned Phaser, React, TypeScript, and Vite starter for top-down Tiled map
tutorials.

This project is based on the official Phaser React TypeScript template, with
the demo controls, sample scenes, and sample logo/star assets removed. It starts
with one simple Phaser scene so students can begin with a quiet project.

## Requirements

Install Node.js first:

https://nodejs.org

Check it from a terminal:

```bash
node --version
npm --version
```

## Run The Project

```bash
npm install
npm run dev
```

The development server runs at:

```text
http://localhost:8080
```

## Project Shape

- `src/App.tsx` renders only the Phaser game.
- `src/PhaserGame.tsx` mounts Phaser inside React.
- `src/game/main.ts` contains the Phaser game config.
- `src/game/scenes/Boot.ts` is the first Phaser scene.
- `src/game/scenes/Preloader.ts` is where tutorial assets are loaded.
- `src/game/scenes/Game.ts` is the main game scene.
- `public/assets/tilesets/` is ready for tilesheet PNG files.
- `public/assets/maps/` is ready for exported Tiled JSON maps.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Build the production files into `dist/` |

## Original Template

This starter was cleaned up from:

https://github.com/phaserjs/template-react-ts
