// controllers/businessController.js

// Import your Business model (we will create this next)
const Business = require('../models/businessModel');

// @desc    Get all businesses
// @route   GET /api/businesses
// @access  Public
exports.getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Get a single business by ID
// @route   GET /api/businesses/:id
// @access  Public
exports.getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.status(200).json(business);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Create a new business
// @route   POST /api/businesses
// @access  Public (or Protected later)
exports.createBusiness = async (req, res) => {
  try {
    const newBusiness = await Business.create(req.body);
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
};

// @desc    Update a business
// @route   PUT /api/businesses/:id
// @access  Public (or Protected later)
exports.updateBusiness = async (req, res) => {
  try {
    const updatedBusiness = await Business.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }

    res.status(200).json(updatedBusiness);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error });
  }
};

// @desc    Delete a business
// @route   DELETE /api/businesses/:id
// @access  Public (or Protected later)
exports.deleteBusiness = async (req, res) => {
  try {
    const deletedBusiness = await Business.findByIdAndDelete(req.params.id);

    if (!deletedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }

    res.status(200).json({ message: 'Business deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

