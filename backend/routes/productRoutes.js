const express = require('express');
const router = express.Router();
const { setProduct, getAllProducts } = require('../controllers/productController');
const fileUpload = require('express-fileupload');
const filesPayloadExists = require('../middleware/filePayloadExists');
const fileExtLimiter = require('../middleware/fileExtLimiter');
const fileSizeLimiter = require('../middleware/fileSizeLimiter');

router.route('/').get(getAllProducts).post(fileUpload({createParentPath: true}), filesPayloadExists, setProduct)


 
module.exports = router