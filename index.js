const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, (err) => {
    if(err) {
        console.log(`An error occured while starting the server ${err}`);
    }else {
        console.log(`Server is up and running on port ${PORT}!`);
    }
})