// routes/statisticsRoutes.js
const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.get('/solved', statisticsController.getSolvedChallengesStats);
router.get('/trending', statisticsController.getTrendingCategories);
router.get('/heatmap', statisticsController.getHeatmap);

module.exports = router;