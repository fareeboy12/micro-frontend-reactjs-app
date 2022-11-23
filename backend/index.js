const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');

const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("./controllers/"))

app.use('/api/products', require('./routes/productRoutes'))

app.get('/', (req, res) => {
    res.send()
    console.log(res)
})

// app.post('/', (req, res) => {
//     res.send()
//     console.log(res)
// })

app.listen(port, () => console.log(`Server started on port ${port}`))