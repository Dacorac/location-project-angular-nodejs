//Import modules
const express = require('express'); //Server for NodeJS
const cors = require('cors');//Config CORS
const bodyParser = require('body-parser');

//Load Routes 
const locationRoutes = require('./routes/location');

//Create server express
const app = express();

// Database configuration
const db = require('./models');
db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Recreando base de datos.");
    });

//Config CORS
const corsOptions = {
    origin: '*',
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions));

// Parsers for POST data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Config routes API REST
app.use('/api/v1/locations', locationRoutes);
app.use('*', (req, res) => res.status(404).json({ error: 'Not Found' }));

module.exports = app;