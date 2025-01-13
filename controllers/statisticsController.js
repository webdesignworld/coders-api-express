// controllers/statisticsController.js
const Joi = require('joi');

// Mock data (replace with your actual data source/database queries)
const mockSubmissions = [] // ... (same mock data as before) ];

const getSolvedChallengesStats = (req, res) => {
    try {
        // ... (same logic as before)
    } catch (error) {
        // ... (same error handling as before)
    }
};

const getTrendingCategories = (req, res) => {
    try {
        // ... (same logic as before)
    } catch (error) {
        // ... (same error handling as before)
    }
};

const getHeatmap = (req, res) => {
    try {
        const schema = Joi.object({
            start_date: Joi.date().iso().required(),
            end_date: Joi.date().iso().required().greater(Joi.ref('start_date')),
        });

        const { error, value } = schema.validate(req.query);
        if (error) {
            return res.status(400).json({ error: error.details });
        }

        const { start_date, end_date } = value;
        // ... (same heatmap logic as before)
    } catch (error) {
        // ... (same error handling as before)
    }
};

module.exports = {
    getSolvedChallengesStats,
    getTrendingCategories,
    getHeatmap,
};