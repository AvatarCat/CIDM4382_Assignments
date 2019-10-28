var express = require('express');
var router = express.Router();

const client = [
{
  id: 100,
  name: "Dude",
  role: "Pilot"
},
{
  id: 101,
  name: "Dude2",
  role: "Pilot"
}
]

/*
howMany
filter
offset
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET a single client object */

router.get('/api/one', function(reg, res, next){
  // what do we do here?
  res.send(`${client.name} is a ${client.role}`);
});

router.get('/api/json/one', function(reg, res, next){
  // what do we do here?
  res.json(client);
});

module.exports = router;
