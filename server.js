
const express = require('express');
var projectlink = require('./router.js');

var meme = require('./me.js');
var portfoliome = require('./portfolio.js');
var preinterviewme = require('./preinterview.js');
var contactme = require('./contact.js');

const app = express();
const port = process.env.PORT || 5000;
// process.env는 nodeJS에서 환경 변수를 가져올 때 사용됩니다.

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.get('/df', (req, res) => {
    res.send(
        'dfdfd'
    );
});

app.use('/user', projectlink);

app.use('/me', meme);
app.use('/portfolio', portfoliome);
app.use('/preinterview', preinterviewme);
app.use('/contact', contactme);

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});