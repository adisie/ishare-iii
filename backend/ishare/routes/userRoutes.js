const {Router} = require('express')

const router = Router()

// controllers
const {
    signup,
    login,
    logout,
} = require('../controllers/userControllers')

// signup user
router.post('/signup',signup)

// login
router.post('/login',login)

// logout 
router.get('/logout',logout)

module.exports = router