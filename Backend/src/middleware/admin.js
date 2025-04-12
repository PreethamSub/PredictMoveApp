const jwt = require('jsonwebtoken')
const User = require('../models/user')

const Admin = async(req, res, next) => {
    try {
        // console.log(req)
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })
        if(!user) {
            throw new Error
        }
        if(!user.isAdmin){
            console.log(user.isAdmin)
            throw new Error
        }
        req.token = token
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({error: "Admin authentication required"})
    }
}

module.exports = Admin