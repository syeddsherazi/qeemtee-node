const express = require('express');
const bodyParser = require('body-parser');
const traveller = require('./routes/traveller.route');

const app = express();

app.use(function (req, res, next) {
    // TODO: WHEN REACT SERVING FROM BUILD FROM SAME ORIGIN, NO NEED TO ALLOW CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

// Set up mongoose connection
// TODO : DB CONNECTIONS IN SEPARATE FILE AND URLS AND CONFIGURATIONS TO COME FROM .ENV FILES
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/qeemtee', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/travellers', traveller);

let port = 3003;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});