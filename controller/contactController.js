'use strict';

const mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.register = function(req, res) {
    const newUser = new User(req.body);
        newUser.hash_password = hash;
        newUser.save(function(err, user) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            } else {
                user.hash_password = undefined;
                return res.json(user);
            }
        });
};