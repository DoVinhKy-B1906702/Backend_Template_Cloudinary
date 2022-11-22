const argon2 = require('argon2')
const jwt = require('jsonwebtoken');

const User = require('../models/User.model');
const Info = require('../models/privateInfo.model')

const dotenv = require('dotenv');

dotenv.config();

exports.register = async (req, res, next) => {
    const {username, password, email, phone} = req.body;
    // simple validation
    if (!username || !password || !email )
        return res.status(400).json({success:false, message: 'Missing username/password or email/phone'})
    else if ((!phone || phone.length !== 10)) {
        return res.status(400).json({success:false, message: 'Missing phone or phone invalid'})
    }
    try {
        // Check for exiting user
        const user = await User.findOne({username});
        const phoneUser = await User.findOne({phone});
        const emailUser = await User.findOne({email});
        if (user) {
            return res.status(400).json({success: false, message :'Username already exited'});
        } else if (phoneUser) {
            return res.status(400).json({success: false, message :'Phone already exited'});
        } else if (emailUser) {
            return res.status(400).json({success: false, message :'Email already exited'});
        } 

        // all Good

        const hashedPassword = await argon2.hash(password);
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            phone
        })

        
        await newUser.save();
       
        // Return token
        const secret = process.env.ACCESS_TOKEN_SECRECT
        const accessToken = jwt.sign({userId: newUser._id},secret )

        const infoUser = new Info({
            
            name:username,
            email,
            phone,
            user: newUser._id
        })
        await infoUser.save();

        res.status(200).json({success: true, message:'User has created successfully', accessToken})
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'Internal server error'})
    }
}

exports.login = async (req, res, next) => {
    const {username, password} = req.body;

    // simple validation
    if (!username || !password)
        return res.status(400).json({success:false, message: 'Missing username/password'})

    try {
        // Check for exiting user
        const user = await User.findOne({username});
       
        if (!user ) {
            return res.status(400).json({success: false, message: 'Incorrect username/email or password'});
        }

        // Username found
        const passwordValid = await argon2.verify(user.password, password);
        if(!passwordValid) {
            return res.status(400).json({success: false, message: 'Incorrect username or password'});
        }

        // All good
        
        // Return token
        const secret = process.env.ACCESS_TOKEN_SECRECT
        const accessToken = jwt.sign({userId: user._id},secret )
  
        res.status(200).json({success: true, message:'Logged in successfully', accessToken})

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'Internal server error'})
    }
}