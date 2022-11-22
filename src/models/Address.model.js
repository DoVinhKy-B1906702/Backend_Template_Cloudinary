const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    ward: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
}, {timestamps: true})

module.exports = mongoose.model('address', addressSchema);