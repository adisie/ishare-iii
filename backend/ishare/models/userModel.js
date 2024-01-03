const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'username required'],
        unique: true,
    },
    email: {
        type: String,
        required: [true,'email address required'],
        validate: [isEmail,'invalid email address'],
        unique: true,
    },
    password: {
        type: String,
        required: [true,'password required'],
        minlength: [3,'too short password'],
    },
},{
    timestamps: true,
})

// hashing password
userSchema.pre('save',function(next){
    let salt = bcryptjs.genSaltSync(10);
    this.password = bcryptjs.hashSync(this.password,salt)
    next()
})

module.exports = mongoose.model('User',userSchema)