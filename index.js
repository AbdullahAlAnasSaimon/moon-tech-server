const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors());

const products = require('./products.json');

app.get("/", (req, res) => {
    res.status(200).send("Moon tech Server running");
})

app.get("/products", (req, res) =>{
    res.send(products);
})

app.listen(port, () => {
    console.log('Moon tech Server running on port:', port);
})