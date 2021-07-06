const router = require('express').Router()
const {login, register} = require('../Controllers/userControllers')

// registration route

router.post('/register', register)


// login  route
router.post('/login', login)

module.exports = router;