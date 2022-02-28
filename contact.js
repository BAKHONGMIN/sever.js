var express = require('express');
var router = express();


router.get('/', (req, res) => {
    res.send( '면접제안');
});
// router.get('/company', (req, res) => {
//     res.send( '/user라고 하면 내가옴');
// });


module.exports = router;