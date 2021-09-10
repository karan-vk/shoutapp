var express = require('express');
const { client } = require('../db');
var router = express.Router();

var getAllUsers = 'SELECT * FROM shoutapp.users'

/* GET users listing. */
router.get('/', function (req, res, next) {
  client.execute(getAllUsers, [], (err, result) => {
    if (err) {
      res.status(404).send({ error: err });
    } else {
      // console.log(result);
      // res.json(result.rows);
      res.render('users', {
        users: result.rows
      })
    }
  })
});

module.exports = router;
