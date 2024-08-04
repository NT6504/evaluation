const express = require('express');
const morgan = require('morgan');
const http = require('http');
const port = 8001;

const app = express();

app.use(morgan('dev'));


app.get('/',(req,res,next) => {
    console.log('Middleware 1');
    next();
})

app.get('/',(req,res,next) => {
    console.log('Middleware 2');
    res.end();
})

app.listen(port,() => {
    console.log('Successfully enrolled in the course');
}
)