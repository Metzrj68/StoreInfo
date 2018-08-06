var express = require('express')
var authRoutes = express.Router()
var Mongoose = require('mongoose')
var User = require('../models/user')
var jwt = require('jsonwebtoken')
var config = require('../db/config')
authRoutes.get('/', (req, res) => {
    res.json({message: 'Router Works'})
})

authRoutes.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    })
})
authRoutes.post('/login', (req, res) => {
    console.log(req.body.name)
    User.findOne({
        name: req.body.name
    }, (err, user) => {
        console.log("user:")
        console.log(user)
        if (err) throw err;
        if (!user) {
            res.json({success: false, message: "FAILED no user"})
        } else if (user) {
            if (user.password != req.body.password) {
                res.json({success: false, message: "bad password"})
            }
            else {
                const payload = {
                    admin: user.admin
                }
                var token = jwt.sign(payload,config.secret , {
                    expiresIn: "1d"
                })
                console.log("ReadOnly: " +user.readonly)
                req.session.views=1

                res.json({success: true, message: 'Fart it', token: token, readonly: user.readonly})
            }

        }
    })
})
module.exports = authRoutes
