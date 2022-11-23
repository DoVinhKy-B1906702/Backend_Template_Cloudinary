const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        match: /((09|03|07|08|05)+([0-9]{8})\b)/g,
        unique:true,
        required: true
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
        default: "https://res.cloudinary.com/dkzebfbq2/image/upload/v1667321172/avatardefault_zo3shv.png"
    },
    cash:{
        type: Number,
        default: 0
    },
    gender: {
        type:Boolean,
        default: true
    },
    cloudinary_id :{type:String},
    user: {
        type: Schema.Types.ObjectId, ref: 'users' 
   }
}, {timestamps: true})

module.exports = mongoose.model('info', infoSchema);