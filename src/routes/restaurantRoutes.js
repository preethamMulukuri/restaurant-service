const express = require('express');
const { addRestaurant, getAllRestaurants, getRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurantController');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

// router.post('/add', addRestaurant); // For debugging only
// router.get('/', getAllRestaurants);
// router.get('/:id', getRestaurant);
// router.put('/:id', updateRestaurant);
// router.delete('/:id', deleteRestaurant);
router.post('/add', verifyToken, addRestaurant);
router.get('/', verifyToken, getAllRestaurants);
router.get('/:id', verifyToken, getRestaurant);
router.put('/:id', verifyToken, updateRestaurant);
router.delete('/:id', verifyToken, deleteRestaurant);

module.exports = router;
