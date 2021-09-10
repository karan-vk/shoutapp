const { Router } = require("express");
const { client } = require("../db");


const router = Router();

router.get('/', (req, res) => {
    res.render('addUser');
})
var upsertUser = 'INSERT INTO shoutapp.users(username, email, password,name) VALUES(?,?,?,?)';
router.post('/', (req, res) => {
    client.execute(upsertUser, [req.body.username, req.body.email, req.body.password, req.body.name], (err, result) => {
        if (err) {
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.redirect('/users');
        }
    })
})

module.exports = router;