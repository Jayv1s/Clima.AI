require('dotenv').config();
const http = require('http');
const express = require('express');

const initialize = () => {
    const app = express();

    const server = http.createServer(app);

    // app.use(/* rota */);

    server.listen(process.env.SERVER_PORT)
    .on('listening', () => {
        console.log("The server is listening, enjoy! :)");
    })
    .on('error', error => {
        console.error(error);
    });
};

module.exports = initialize;
