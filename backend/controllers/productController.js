const asyncHandler = require('express-async-handler');
const Products = require('../models/productModel');


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

        const files = req.files;

        // Object.keys(files).forEach(key => {
        //     const filepath = path.join(__dirname, 'files', files[key].name)
        //     files[key].mv(filepath, (err) => {
        //         if (err) return res.status(500).json({ status: "error", message: err })
        //     })
        // })

        // console.log(Object.keys(files).toString())
        // const products = await Products.create({
        //     title: req.body.title,
        //     thumbnail: req.body.thumbnail,
        // })
    
        // res.status(200).json(products)
    }

})


module.exports = {
    getAllProducts,
    setProduct,
}