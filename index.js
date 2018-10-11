const express = require('express');
const app = express();

app.use(express.static('../app/www'));

const server = app.listen(
    3000, 
    () => console.log("listening at: http://%s:%s", server.address().address, server.address().port)
);