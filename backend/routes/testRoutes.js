const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
    res.json({ message: 'Backend route is working' });
});

module.exports = router;

