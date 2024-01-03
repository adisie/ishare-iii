const jwt = require('jsonwebtoken')

// models
const User = require('../models/userModel')

const privateRoute = async (req,res,next) => {
    try{
        const token = req.cookies.token 
        if(!token){
            return res.status(401).json({
                error: 'unauthorized'
            })
        }

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decodedToken._id) 
        
        if(!user){
            return res.status(401).json({
                error: 'unauthorized'
            })
        }

        req.user = {
            username: user.username,
            email: user.email
        }
        next()
    }catch(err){
        console.log(err)
        res.status(401).json({
            error: 'unauthorized'
        })
    }
}

module.exports = {
    privateRoute,
}