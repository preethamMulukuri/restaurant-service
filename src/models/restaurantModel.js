const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
