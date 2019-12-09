const express = require('express');
const router = express.Router();
const ctrlInput = require('../controllers/stock');

router
  //based on https://flightaware.com/commercial/flightxml/explorer/#op_Departed
  .route('/inputs')
  .get(ctrlInput.name);

router
  //based on https://flightaware.com/commercial/flightxml/explorer/#op_Arrived  
  .route('/price')
  .get(ctrlInput.price);

router
  //based on https://flightaware.com/commercial/flightxml/explorer/#op_FlightInfo
  .route('/inputinfo/:symbol')
  .get(ctrlInput.inputinfo);

module.exports = router;