const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },  
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    phone: {
        type: String,
        match: /((09|03|07|08|05)+([0-9]{8})\b)/g,
        unique:true,
        required: true
    },
    cash:{
        type: Number,
        default: 0
    },
    password: {type: String, required: true, minlength: 8,},
    admin:{
        type: Boolean,
        default: false,
    },
}, {timestamps: true});


module.exports = mongoose.model('user', UserSchema);