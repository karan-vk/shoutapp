const { Router } = require("express");
const { client } = require("../db");

const router = Router()

const getByUsername = 'SELECT * FROM shoutapp.users WHERE username = ?'

router.get('/:username', async (req, res) => {
    const { username } = req.params
    client.execute(getByUsername, [username]).then(({ rows }) => {
        // res.send(rows[0])
        res.render('user', { username: rows[0].username, email: rows[0].email, name: rows[0].name })

    }).catch(err => {
        res.status(404).send(err)
    })

})

module.exports = router;