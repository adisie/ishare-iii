const bcryptjs = require('bcryptjs')

// modules
const User = require('../models/userModel')

// utils
const {
    MAX_AGE,
    errorHandler,
    generateToken,
} = require('../utils/userUtils')

// signup 
const signup = async (req,res) => {
    try{
        const {username,email,password} = req.body 
        const user = await User.create({username,email,password})
        const token = generateToken(user._id)
        res.cookie('token',token,{
            maxAge: MAX_AGE * 1000,
            secure: true,
            sameSite: 'lax'
        })
        res.status(200).json({
            username,
            email,
        })
    }catch(err){
        const errors = errorHandler(err)
        res.status(400).json({
            errors
        })
    }
}

// login
const login = async (req,res) => {
    try{
        const {username,password} = req.body
        if(!username.trim()){
            throw new Error('username required')
        }

        if(!password){
            throw new Error('password required')
        }

        const user = await User.findOne({username})

        if(!user){
            throw new Error('username not exist')
        }

        const isPassMatch = bcryptjs.compareSync(password,user.password)

        if(!isPassMatch){
            throw new Error('wrong password')
        }

        // generate token
        const token = generateToken(user._id)
        res.cookie('token',token,{
            maxAge: MAX_AGE * 1000,
            sameSite: 'lax',
            secure: true,
        })
        res.status(200).json({
            username,
            email: user.email
        })
    }catch(err){
        const errors = errorHandler(err)
        res.status(401).json({errors})
    }
}

// logout
const logout = (req,res) => {
    try{
        res.cookie('token','',{maxAge: 1})
        res.status(200).json({
            message: 'logged out'
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            error: 'logout error'
        })
    }
}

// check
const check = (req,res)=> {
    try{
        res.status(200).json({
            message: 'authorized',
            user: req.user,
        })
    }catch(err){
        console.log(err)
        res.status(401).json({
            error: 'unauthorized'
        })
    }
}

module.exports = {
    signup,
    login,
    check,
    logout,
}