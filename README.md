# Pacburger Menu

A professional, animated hamburger menu that transforms into a Pac-Man character when toggled. This project uses TypeScript, CSS Animations, and Webpack.

## Features

- **Smooth Transformation**: The hamburger icon smoothly morphs into a Pac-Man shape.
- **Animations**: Includes a "chomping" animation when the menu is active.
- **TypeScript**: Written in strict TypeScript for type safety and maintainability.
- **Zero Runtime Dependencies**: (Apart from polyfills if needed) Lightweight and fast.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd pacburger-menu
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Building the Project

To compile the TypeScript and CSS into a bundle:

```bash
npm run build
```

This command uses Webpack to bundle `pacburger-menu.ts` and `style.css` into `dist/pacburger-menu.bundle.js`.

To watch for changes during development:

```bash
npm run watch
```

## Running locally

Since this is a client-side project, you can simply open the `index.html` file in your browser after building.

1.  Build the project (if you haven't already):
    ```bash
    npm run build
    ```

2.  Open `index.html`:
    -   **Double-click** `index.html` in your file explorer.
    -   OR use a simple local server (recommended):
        ```bash
        npx http-server .
        ```
        Then navigate to `http://localhost:8080`.

## Customization

-   **Menu Items**: Modify the `pacburgerList` array in `pacburger-menu.ts` to change the links.
-   **Styles**: Edit `style.css` to change colors, sizes, or animation speeds (variables are defined in `:root`).
