const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors/index');

const register = async (req,res) => {
    //basic password hashing code
    // const {name, email, password} = req.body
    // const salt = await bcrypt.genSalt(10)
    // const hashPassword = await bcrypt.hash(password, salt)
    // const tempUser = { name, email, password: hashedPassword }

    // await User.deleteMany()
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name}, token })
}

const login =  async (req,res) => {
    const {email,password} = req.body
    if (!email || !password) {
        throw new BadRequestError('Please input email and password');
    }
    
    const user = await User.findOne({email})
    if (!user) {
        throw new UnauthenticatedError('invalid Credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJWT()
    
    res.status(StatusCodes.OK).json({ user: { name: user.name}, userId: { _di: user._id}, token })
    

}


module.exports = {
    register,
    login
}