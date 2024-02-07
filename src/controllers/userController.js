const router = require('express').Router()

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post()

module.exports = router;