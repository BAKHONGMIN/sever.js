var express = require('express');
var router = express();


router.get('/', (req, res) => {
    res.send( '나의소개');
});
// router.get('/company', (req, res) => {
//     res.send( '/user라고 하면 내가옴');
// });


module.exports = router;