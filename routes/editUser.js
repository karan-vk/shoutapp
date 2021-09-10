const { Router } = require("express");
const { client } = require("../db");

const router = Router()



router.get('/:username', (req, res) => {
    client.execute(`SELECT * FROM shoutapp.users WHERE username = ?`, [req.params.username], (err, result) => {
        if (err) {
            res.status(404).send(err);
        } else {
            console.log(result.rows[0])
            res.render('editUser', {
                username: result.rows[0].username,
                email: result.rows[0].email,
                name: result.rows[0].name,
                password: result.rows[0].password,
            })
        }
    })
})


var upsertUser = 'INSERT INTO shoutapp.users(username, email, password,name) VALUES(?,?,?,?)';
router.post('/', (req, res) => {
    client.execute(upsertUser, [req.body.username, req.body.email, req.body.password, req.body.name], (err, result) => {
        if (err) {
            console.log(err);
            res.status(404).send(err);
        }
        else {
            res.redirect('/user/' + req.body.username);
        }
    })
})


module.exports = router;