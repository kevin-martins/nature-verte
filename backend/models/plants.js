const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    name: { type: String },
    imageUrl: { type: String },
    description: { type: String },
    favory: { type: Boolean },
    review: { type: Number },
    price: { type: Number },
});

module.export = mongoose.model('Plant', plantSchema);