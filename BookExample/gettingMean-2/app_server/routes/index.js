const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlPizza = require('../controllers/pizza');

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/pizza', ctrlPizza.pizzaPlaces);
router.get('/pizzaLocation', ctrlPizza.pizzaLocationInfo);
router.get('/pizzaLocation/review/new', ctrlPizza.addReview)

router.get('/about', ctrlOthers.about);

module.exports = router;
