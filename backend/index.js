const express = require('express')
const app = express()
const db = require('./config/db')
const cors = require('cors')
const consign = require('consign')


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    optionsSuccessStatus: 200,
    credentials: true,
};

app.use(cors(corsOptions))



consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db


app.listen(3000, () => {
    console.log('Backend executando...')
})