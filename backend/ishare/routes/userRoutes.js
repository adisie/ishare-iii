const {Router} = require('express')

const router = Router()

// controllers
const {
    signup,
    login,
    check,
    logout,
} = require('../controllers/userControllers')

// private route
const {
    privateRoute,
} = require('../middlewares/privateRoute')

// signup user
router.post('/signup',signup)

// login
router.post('/login',login)

// logout 
router.get('/logout',logout)

// check
router.get('/check',privateRoute,check)

module.exports = router