const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    thumbnail: {
        type: String,
        required: [true, 'Please add an image']
    },
},
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Products', productsSchema)