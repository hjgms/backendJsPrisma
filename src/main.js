const express = require('express');
const app = express();

const router = require('./data/router');

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('rodando...');
});

app.listen(3000, () => {
    console.log('start..');
});