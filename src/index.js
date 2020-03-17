const server = require('./server');


const start = async () => {
    console.log("The connection is initializing...");

    // trycatch block to avoid errors unhandled exception
    try {
        await server();
    } catch (error) {
        console.error(error);
    }
};

start();