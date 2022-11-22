const AddressModel = require('../models/Address.model');



exports.create = async (req, res, next) => {
    try {
        const newAddress = req.body;
        const address = new AddressModel(newAddress);
        await address.save()


        res.status(200).json(address);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}