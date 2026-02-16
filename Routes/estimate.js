const express = require('express');
const router = express.Router();
const fareEngine = require('../services/fareEngine');


router.post('/', (req, res) => {
const { distanceKm, durationMin } = req.body;


const result = fareEngine.calculate(distanceKm, durationMin);
res.json(result);
});


module.exports = router;