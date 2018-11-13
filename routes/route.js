const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const Contact = mongoose.model('Contact');

const Panel = require('../models/contacts');

//retrieving contact
router.get('/panels', (req, res, next) => {
    Panel.find(function (err, Panels) {
        res.json(Panels);
    });
});
//add contact
router.post('/panel', (req, res, next) => {
    let newPanel = new Panel({
        panel_data: req.body,
    });

    newPanel.save((err, panel) => {
        if (err) {
            res.json({msg: 'Failed to add contact'});
        } else {
            res.json({msg: 'Add panel successfully', response: panel.panel_data});
        }
    });
});
router.delete('panel/:id', (req, res, next) => {
    Panel.remove({_id: req.params.id}, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

module.exports = router;
