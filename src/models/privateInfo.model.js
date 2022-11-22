const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    birthday: Date,
    img: {
        type: String,
       
    },
    gender: {
        type:Boolean,
        default: true
    },
    cloudinary_id :{type:String},
}, {timestamps: true})

module.exports = mongoose.model('info', infoSchema);