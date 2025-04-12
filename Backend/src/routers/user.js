const express = require('express')
const User = require('../models/user')
const Auth = require('../middleware/auth')
const Admin = require('../middleware/admin')

const router = new express.Router()

//signup
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (error) {
        res.status(400).send(error)
    }

})

//login

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token})
    } catch (error) {
        res.status(400).send(error)
    }
})

//logout
router.post('/users/logout', Auth, async (req, res) => {
   
    try {
       req.user.tokens =  req.user.tokens.filter((token) => {
            return token.token !== req.token 
        })

        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

//Logout All 
router.post('/users/logoutAll', Auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()        
    }
})

// Get is admin
router.post('/users/admin', Admin, async(req, res) => {
    try {
        res.send({isAdmin: req.user.isAdmin})
    } catch (error) {
        res.status(500).send()        
    }
})

// Get all users
router.get('/Users/all', Admin, function(req, res) {
    try {
        User.find({}, function(err, userlist) {
            var users = [];
            userlist.forEach(function(user) {
              users.push({id:user._id, name:user.username, email:user.email, profilepic:user.profilepic});
            });
            console.log(users)
            res.send(users);  
        });
    } catch (error) {
        res.status(500).send()        
    }
});
module.exports = router