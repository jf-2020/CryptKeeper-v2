const express = require('express');
const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
    res.send("<h1>Welcome to CryptoNative's Backend!</h1>");
});

module.exports = router;
