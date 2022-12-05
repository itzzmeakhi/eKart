const User = require('./../models/User');

const tokenUtils = require('./../utils/tokenUtils');

// @desc Authenticate user and get token
// @route GET /api/users/login
// @access Public

const authUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && await user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: tokenUtils.generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

};

// @desc Register a new user
// @route GET /api/users
// @access Public

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error('User already registerd');
    }

    const user = User.create({
        name, 
        email,
        password
    });

    if(user) {
        res.status(201);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: tokenUtils.generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
};


// @desc Get user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id);

    if(user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
};

module.exports = {
    authUser,
    getUserProfile,
    registerUser
};