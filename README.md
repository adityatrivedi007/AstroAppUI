# AstroAppUI

A modern, minimal astrological dashboard designed to manage, visualize, and print Lagna and Varsha Kundli charts.

Originally scaffolded in Angular 15, this project has been fully upgraded to **Angular 17** to utilize the high-performance `esbuild` compilation engine, and restyled from the ground up using **Tailwind CSS**.

## Features

- **Modern SaaS Aesthetic:** A clean, warm beige and terracotta interface (`#F9F6F0`) replacing standard browser defaults with custom-drawn interactive elements.
- **Pure CSS Chart Geometry:** The Kundli diamond charts are rendered entirely using CSS Grid and absolute positioning, removing the need for static SVGs and allowing mathematical precision for text alignment.
- **Auto-Saving State:** Planet selections automatically save to the active chart's memory in real-time, allowing seamless toggling between the Lagna and Varsha views.
- **Optimized Print Layout:** Includes a custom `@media print` configuration that perfectly scales the charts to a single page, strips unnecessary UI controls, and forces browsers to render the exact aesthetic background colors.

## Tech Stack

- **Framework:** Angular 17
- **Build System:** `@angular-devkit/build-angular:application` (esbuild/Vite)
- **Styling:** Tailwind CSS (v3)

## Quick Start

### 1. Install Dependencies

Because this project was upgraded across major Node and Angular versions, you may need to use the legacy peer dependencies flag during your first clean installation:

```bash
npm install --legacy-peer-deps
```

### 2. Development Server

Run the local development server:

```Bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. The new esbuild engine ensures startup and hot-reloads happen in milliseconds.

### 3. Build for Production

To compile the application into an output directory (dist/astro-app-ui):

```Bash
npm run build
```

Running Unit Tests
Run `npm test` (or `ng test`) to execute the unit tests via Jasmine and Karma.

Project Structure
`src/app/home/` - Contains the core dashboard, data grid, chart rendering logic, and print layout configurations.

`src/styles.css` - Contains the Tailwind directives, base theme colors, custom SaaS checkbox styling, and print-specific CSS modifiers.

`tailwind.config.js` - The Tailwind engine configuration.
