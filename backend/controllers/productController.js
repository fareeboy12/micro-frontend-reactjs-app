const asyncHandler = require('express-async-handler');
const Products = require('../models/productModel');
const path = require("path");


// @desc GET AllPosts 
// @route GET /api/posts
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Products.find({})

    res.status(200).json(products)
})

// @desc SET Posts 
// @route SET /api/posts
// @access Private
const setProduct = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    else{

        const file = req.files.thumbnail;
        const fileName = file.name;

        const files = req.files;
        let filepath;
        Object.keys(files).forEach(key => {
            filepath = path.join(__dirname, 'files', files[key].name)
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({ status: "error", message: err })
            })
        })

        
        // console.log(files.file.md5)
        const product = await Products.create({
            title: req.body.title,
            thumbnail: "http://localhost:5000/files/" + fileName,
        })
    
        res.status(200).json(product)
    }

})


module.exports = {
    getAllProducts,
    setProduct,
}