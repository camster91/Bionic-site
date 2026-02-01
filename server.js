const express = require('express');
const session = require('express-session');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = /pdf|doc|docx/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        if (extname) {
            return cb(null, true);
        }
        cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
});

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session middleware for client portal
app.use(session({
    secret: process.env.SESSION_SECRET || 'botanic-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Demo client accounts (in production, use a database)
const clients = [
    { username: 'client1', password: 'botanic2024', company: 'Demo Company' },
    { username: 'demo', password: 'demo123', company: 'Test Client Inc.' }
];

// Middleware to check if user is authenticated
const requireAuth = (req, res, next) => {
    if (req.session && req.session.client) {
        next();
    } else {
        res.redirect('/portal/login');
    }
};

// Make session available to all views
app.use((req, res, next) => {
    res.locals.client = req.session ? req.session.client : null;
    next();
});

// ==========================================
// PUBLIC ROUTES
// ==========================================

// Home
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Contract Nutraceutical Manufacturing',
        currentPage: 'home'
    });
});

// About Us
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        currentPage: 'about'
    });
});

// Services
app.get('/services', (req, res) => {
    res.render('services', {
        title: 'Our Services',
        currentPage: 'services'
    });
});

// Certifications
app.get('/certifications', (req, res) => {
    res.render('certifications', {
        title: 'Certifications',
        currentPage: 'certifications'
    });
});

// Careers
app.get('/careers', (req, res) => {
    const openPositions = [
        {
            id: 1,
            title: 'Production Operator',
            type: 'Full-time',
            description: 'Operate encapsulation and bottling equipment in our manufacturing facility. Experience with GMP environments preferred.'
        },
        {
            id: 2,
            title: 'Quality Control Technician',
            type: 'Full-time',
            description: 'Perform quality inspections, documentation, and compliance checks. Knowledge of FDA regulations required.'
        },
        {
            id: 3,
            title: 'Warehouse Associate',
            type: 'Full-time',
            description: 'Handle inventory management, shipping, and receiving of raw materials and finished products.'
        }
    ];

    res.render('careers', {
        title: 'Careers',
        currentPage: 'careers',
        positions: openPositions,
        applicationSent: false
    });
});

// Careers - Application submission
app.post('/careers/apply', upload.single('resume'), (req, res) => {
    const { name, email, phone, position, experience, coverLetter } = req.body;
    const resume = req.file;

    // Log application (in production, save to database and send email)
    console.log('Job Application Received:', {
        name,
        email,
        phone,
        position,
        experience,
        coverLetter,
        resume: resume ? resume.filename : 'No file uploaded'
    });

    res.render('careers', {
        title: 'Careers',
        currentPage: 'careers',
        positions: [],
        applicationSent: true
    });
});

// Contact
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        currentPage: 'contact',
        messageSent: false
    });
});

// Contact - Form submission
app.post('/contact', (req, res) => {
    const { name, company, email, phone, inquiryType, message } = req.body;

    // Log inquiry (in production, send email notification)
    console.log('Contact Form Submission:', { name, company, email, phone, inquiryType, message });

    res.render('contact', {
        title: 'Contact Us',
        currentPage: 'contact',
        messageSent: true
    });
});

// Private Label (Coming Soon)
app.get('/private-label', (req, res) => {
    res.render('private-label', {
        title: 'Private Label',
        currentPage: 'private-label'
    });
});

// ==========================================
// CLIENT PORTAL ROUTES
// ==========================================

// Portal Login Page
app.get('/portal/login', (req, res) => {
    if (req.session && req.session.client) {
        return res.redirect('/portal');
    }
    res.render('portal/login', {
        title: 'Client Login',
        currentPage: 'portal',
        error: null
    });
});

// Portal Login Handler
app.post('/portal/login', (req, res) => {
    const { username, password } = req.body;

    const client = clients.find(c => c.username === username && c.password === password);

    if (client) {
        req.session.client = {
            username: client.username,
            company: client.company
        };
        res.redirect('/portal');
    } else {
        res.render('portal/login', {
            title: 'Client Login',
            currentPage: 'portal',
            error: 'Invalid username or password'
        });
    }
});

// Portal Dashboard
app.get('/portal', requireAuth, (req, res) => {
    res.render('portal/dashboard', {
        title: 'Client Portal',
        currentPage: 'portal'
    });
});

// Purchase Order Form
app.get('/portal/order', requireAuth, (req, res) => {
    res.render('portal/order', {
        title: 'Submit Purchase Order',
        currentPage: 'portal',
        orderSubmitted: false
    });
});

// Purchase Order Submission
app.post('/portal/order', requireAuth, (req, res) => {
    const orderData = req.body;

    // Log order (in production, save to database and send notifications)
    console.log('Purchase Order Submitted:', {
        client: req.session.client,
        order: orderData,
        timestamp: new Date().toISOString()
    });

    res.render('portal/order', {
        title: 'Submit Purchase Order',
        currentPage: 'portal',
        orderSubmitted: true,
        orderNumber: 'PO-' + Date.now()
    });
});

// Portal Logout
app.get('/portal/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// ==========================================
// ERROR HANDLERS
// ==========================================

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Page Not Found',
        currentPage: ''
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', {
        title: 'Error',
        currentPage: '',
        message: err.message || 'Something went wrong'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Botanic server running at http://localhost:${PORT}`);
});
