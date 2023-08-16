const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session'); // Agrega la importación de express-session
require('dotenv').config();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Configuración de la sesión
app.use(session({
    secret: process.env.SESSION_SECRETO,
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.render('index');
});

// Rutas para cada sesión
app.get('/sesion/:numero', (req, res) => {
    const numeroSesion = req.params.numero;
    res.render(`sesion${numeroSesion}`, { numeroSesion });
});

app.get('/sesion/:numero/pdfs/:pdfNombre', (req, res) => {
    const pdfNombre = req.params.pdfNombre;
    const numeroSesion = req.params.numero;
    const pdfPath = path.join(__dirname, 'public', 'sesion', numeroSesion, 'pdfs', pdfNombre);
    res.download(pdfPath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
