// import express
const express = require('express');

// make an instance of express as a customisable server
const app = express();

const PORT =  process.env.PORT || 3001;

app.get("/", (request, response) => {
    response.json({
        message: "Hello World!"
    });
});

// Configuration goes here
app.use(express.json());

// Router goes below

app.post("/", (request, response)=> {
    // Just copy what the posted data is
    // Attach it to response.body.received 
    response.json({
        received: request.body.message
    })
})

module.exports = {
    app, PORT
}



