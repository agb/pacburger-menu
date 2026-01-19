# PacBurgerMenu

PacBurgerMenu is a playful and animated alternative to the traditional hamburger menu, featuring a Pac-Man inspired transformation.

## Features

*   **Animated Toggle:** Smooth transition from hamburger bars to a Pac-Man shape.
*   **Customizable Menu:** Easily pass your menu items.
*   **Accessible:** Includes ARIA labels for accessibility.
*   **Responsive:** Works well on mobile and desktop.

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/pacburger-menu.git
    cd pacburger-menu
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Usage

### Development

To start the development server (watcher):

```bash
npm start
```

### Production Build

To build the project for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Testing

To run the unit tests:

```bash
npm test
```

### Integration

You can import the `PacBurgerMenu` class and use it in your project.

```typescript
import { PacBurgerMenu } from './PacBurgerMenu';

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

new PacBurgerMenu(menuItems);
```

Ensure you have the necessary CSS loader setup if you are bundling it yourself, or include the compiled CSS.

## Project Structure

*   `PacBurgerMenu.ts`: The main component logic.
*   `style.css`: The styling and animations.
*   `index.ts`: Entry point for the demo/example.
*   `PacBurgerMenu.test.ts`: Unit tests.

## License

MIT
