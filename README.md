# Botanic - Contract Nutraceutical Manufacturing

A professional Node.js website for Botanic, a contract nutraceutical manufacturer based in Carroll County, Georgia. FDA registered and GMP certified facility specializing in capsules, powders, and liquid products.

## Features

### Public Pages
- **Home Page**: Hero section, trust bar, services overview, process steps, CTA
- **About Page**: Company story, facility showcase, values, statistics
- **Services Page**: Capsule manufacturing, powder blending, liquid products, detailed process
- **Certifications Page**: FDA registration, GMP certification, quality assurance
- **Careers Page**: Open positions with electronic application form and resume upload
- **Contact Page**: Contact form with inquiry types, business information, map placeholder
- **Private Label**: Coming soon placeholder page

### Client Portal (Password Protected)
- **Login System**: Session-based authentication for existing clients
- **Dashboard**: Client overview and quick actions
- **Purchase Order Form**: Multi-step form for order submission

### Technical Features
- **Responsive Design**: Mobile-friendly layout with hamburger navigation
- **EJS Templating**: Modular views with partials for header/footer
- **File Uploads**: Resume upload for job applications (multer)
- **Session Management**: Secure client portal authentication

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Session**: express-session
- **File Upload**: multer
- **Styling**: Custom CSS with CSS variables
- **Fonts**: Google Fonts (Montserrat, Lora)

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
├── server.js              # Express server with all routes
├── package.json           # Project dependencies
├── .gitignore             # Git ignore rules
├── uploads/               # Resume uploads directory
├── public/
│   ├── css/
│   │   └── style.css      # Main stylesheet (1900+ lines)
│   └── images/            # Image assets
└── views/
    ├── partials/
    │   ├── header.ejs     # Header with navigation
    │   └── footer.ejs     # Footer with contact info
    ├── portal/
    │   ├── login.ejs      # Client login page
    │   ├── dashboard.ejs  # Client dashboard
    │   └── order.ejs      # Purchase order form
    ├── index.ejs          # Home page
    ├── about.ejs          # About page
    ├── services.ejs       # Services page
    ├── certifications.ejs # Certifications page
    ├── careers.ejs        # Careers page
    ├── contact.ejs        # Contact page
    ├── private-label.ejs  # Private label (coming soon)
    ├── 404.ejs            # Not found page
    └── error.ejs          # Error page
```

## Demo Client Portal Access

For testing the client portal:
- **Username**: `demo`
- **Password**: `demo123`

Or:
- **Username**: `client1`
- **Password**: `botanic2024`

## Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home page |
| `/about` | GET | About page |
| `/services` | GET | Services page |
| `/certifications` | GET | Certifications page |
| `/careers` | GET | Careers page |
| `/careers/apply` | POST | Submit job application |
| `/contact` | GET/POST | Contact page and form |
| `/private-label` | GET | Private label (coming soon) |
| `/portal/login` | GET/POST | Client login |
| `/portal` | GET | Client dashboard (protected) |
| `/portal/order` | GET/POST | Purchase order form (protected) |
| `/portal/logout` | GET | Logout |

## Environment Variables

For production, set these environment variables:
- `PORT` - Server port (default: 3000)
- `SESSION_SECRET` - Secret for session encryption
- `NODE_ENV` - Set to "production" for secure cookies

## Company Information

**Botanic**
- Contract Nutraceutical Manufacturing
- Carroll County, Georgia
- FDA Registered | GMP Certified
- Founded: 2024

## License

MIT

## Author

Developed by Cameron @ Ashbi (cameron@ashbi.ca)
