# Bionic Botanics

A modern Node.js botanical website showcasing plants and nature.

## Features

- **Home Page**: Hero section, featured plants, features overview, newsletter signup
- **About Page**: Company story, mission, team, and statistics
- **Products Page**: Plant catalog with filtering, care tips, and product cards
- **Contact Page**: Contact form, business information, FAQ section
- **Responsive Design**: Mobile-friendly layout with hamburger menu
- **EJS Templating**: Modular views with partials for header/footer

## Tech Stack

- **Backend**: Node.js with Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with CSS variables
- **Fonts**: Google Fonts (Playfair Display, Open Sans)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/camster91/Bionic-site.git
   cd Bionic-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and visit: `http://localhost:3000`

## Development

For development with auto-reload:
```bash
npm run dev
```

## Project Structure

```
Bionic-site/
├── server.js           # Express server configuration
├── package.json        # Project dependencies
├── public/
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   └── images/         # Image assets
└── views/
    ├── partials/
    │   ├── header.ejs  # Header partial
    │   └── footer.ejs  # Footer partial
    ├── index.ejs       # Home page
    ├── about.ejs       # About page
    ├── products.ejs    # Products page
    ├── contact.ejs     # Contact page
    └── 404.ejs         # Error page
```

## License

MIT
