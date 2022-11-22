const InfoModel = require('../models/privateInfo.model')
const cloudinary = require('../utils/cloudinary');



exports.update = async (req, res, next) => {
    try {
        const {gender} = req.body
        let updateInfo = {
            gender,
        };
        
        const infoUpdateCondition = {_id: req.params.id, user: req.userId};

            updateInfo = await InfoModel.findOneAndUpdate(infoUpdateCondition, updateInfo, {new: true});


            // user not authorised to update post or post not found
            if (!updateInfo) {
                return res.status(401).json({success: false, message:'Post not found or user not authorised '})
            }


        res.status(200).json({success: true, message: 'Congratulation !!!', info: updateInfo});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}
exports.updateImage = async (req, res, next) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path,{ folder: "backend_web" });
        let updateInfo = {
            img: result.secure_url,
            cloudinary_id: result.public_id,
        };
        const infoUpdateCondition = {_id: req.params.id, user: req.userId};

            updateInfo = await InfoModel.findOneAndUpdate(infoUpdateCondition, updateInfo, {new: true});


            // user not authorised to update post or post not found
            if (!updateInfo) {
                return res.status(401).json({success: false, message:'Post not found or user not authorised '})
            }


        res.status(200).json({success: true, message: 'Congratulation !!!', info: updateInfo});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}
exports.updateCash = async (req, res, next) => {
    try {
        const {cash} = req.body
        let updateInfo = {
            cash,
        };
        
        const infoUpdateCondition = {_id: req.params.id, user: req.userId};

            updateInfo = await InfoModel.findOneAndUpdate(infoUpdateCondition, updateInfo, {new: true});


            // user not authorised to update post or post not found
            if (!updateInfo) {
                return res.status(401).json({success: false, message:'Post not found or user not authorised '})
            }


        res.status(200).json({success: true, message: 'Congratulation !!!', info: updateInfo});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}