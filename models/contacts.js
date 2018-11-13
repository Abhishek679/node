const mongoose = require('mongoose');

const PanelSchema = mongoose.Schema({
    panel_data:{
        type: Object,
    },
});

module.exports = mongoose.model('Panel', PanelSchema);