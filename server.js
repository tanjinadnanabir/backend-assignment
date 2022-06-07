// tanjin- node express mongoose redis app

const express = require("express");
const bodyParser = require('body-parser');

// middleware that can be used to enable CORS with various options
const cors = require('cors');

// create express app
const app = express();

// path to route
const category = require("./routes/category.routes")

// const port = process.env.PORT || 3000; (alternative)

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((err, req, res, next) => {
    if (err) {
        return res.status(400).send(
            {
                "status": 400,
                'message': "error parsing data, request is not in a JSON format",
                "success": true
            })
    } else {
        next();
    }
});

// define a route
app.use('/category', category);

app.get('/*', (req, res) => {
    return res.status(404).send({
        "status": 404,
        'message': "unknown route",
        "success": true
    })
});

app.post('/*', (req, res) => {
    return res.status(404).send({
        "status": 404,
        'message': "unknown route",
        "success": true
    })
});

app.put('/*', (req, res) => {
    return res.status(404).send({
        "status": 404,
        'message': "unknown route",
        "success": true
    })
});

app.patch('/*', (req, res) => {
    return res.status(404).send({
        "status": 404,
        'message': "unknown route",
        "success": true
    })
});

app.delete('/*', (req, res) => {
    return res.status(404).send({
        "status": 404,
        'message': "unknown route",
        "success": true
    })
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});