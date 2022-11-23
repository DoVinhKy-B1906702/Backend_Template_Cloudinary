const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },  
    password: {type: String, required: true, minlength: 8,},
    admin:{
        type: Boolean,
        default: false,
    },
}, {timestamps: true});


module.exports = mongoose.model('users', UserSchema);