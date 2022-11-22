const InfoModel = require('../models/privateInfo.model')
const cloudinary = require('../utils/cloudinary');



exports.create = async (req, res, next) => {
    try {
       
        const result = await cloudinary.uploader.upload(req.file.path,{ folder: "backend_web" });
        const newInfo = new InfoModel({
            ...req.body,
            img: result.secure_url,
            cloudinary_id: result.public_id,

        });
        const info = new InfoModel(newInfo);
        await info.save()


        res.status(200).json(info);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}