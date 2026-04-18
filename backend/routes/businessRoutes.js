const express = require('express');
const router = express.Router();

// GET all businesses
router.get('/', (req, res) => {
    res.json({ message: 'Get all businesses (placeholder)' });
});

// GET a single business by ID
router.get('/:id', (req, res) => {
    const businessId = req.params.id;
    res.json({ message: `Get business with ID: ${businessId}` });
});

// CREATE a new business
router.post('/', (req, res) => {
    const newBusiness = req.body;
    res.json({ message: 'Create business (placeholder)', data: newBusiness });
});

// UPDATE a business
router.put('/:id', (req, res) => {
    const businessId = req.params.id;
    const updatedData = req.body;
    res.json({ message: `Update business ${businessId}`, data: updatedData });
});

// DELETE a business
router.delete('/:id', (req, res) => {
    const businessId = req.params.id;
    res.json({ message: `Delete business ${businessId}` });
});

module.exports = router;
