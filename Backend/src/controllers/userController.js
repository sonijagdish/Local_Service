const userSchema = require('../models/userModel');

const register = async (req, res) => {
    try {
        const isExistingUser = await userSchema.findOne({ email: req.body.email });
        
        if (isExistingUser) {
            return res.status(400).json({ message: 'Email already exists, please login' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newUser = await userSchema.create( req.body );
        
        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

module.exports = {
    register
};