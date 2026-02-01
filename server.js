const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        currentPage: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        currentPage: 'about'
    });
});

app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Monstera Deliciosa',
            description: 'The Swiss Cheese Plant with iconic split leaves',
            price: 45.00,
            image: '/images/monstera.jpg',
            category: 'Indoor Plants'
        },
        {
            id: 2,
            name: 'Fiddle Leaf Fig',
            description: 'Elegant tree with large, violin-shaped leaves',
            price: 65.00,
            image: '/images/fiddle-leaf.jpg',
            category: 'Indoor Plants'
        },
        {
            id: 3,
            name: 'Snake Plant',
            description: 'Low-maintenance air purifier, perfect for beginners',
            price: 25.00,
            image: '/images/snake-plant.jpg',
            category: 'Indoor Plants'
        },
        {
            id: 4,
            name: 'Pothos Golden',
            description: 'Trailing vine with heart-shaped variegated leaves',
            price: 18.00,
            image: '/images/pothos.jpg',
            category: 'Hanging Plants'
        },
        {
            id: 5,
            name: 'Peace Lily',
            description: 'Elegant white blooms and glossy green foliage',
            price: 35.00,
            image: '/images/peace-lily.jpg',
            category: 'Flowering Plants'
        },
        {
            id: 6,
            name: 'Succulent Collection',
            description: 'Assorted mini succulents in decorative pots',
            price: 30.00,
            image: '/images/succulents.jpg',
            category: 'Succulents'
        }
    ];

    res.render('products', {
        title: 'Our Plants',
        currentPage: 'products',
        products: products
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        currentPage: 'contact',
        messageSent: false
    });
});

app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // In production, you would send an email or save to database here
    console.log('Contact form submission:', { name, email, subject, message });

    res.render('contact', {
        title: 'Contact Us',
        currentPage: 'contact',
        messageSent: true
    });
});

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
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Bionic Botanics server running at http://localhost:${PORT}`);
});
