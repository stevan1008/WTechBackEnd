const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./db/connect')
const data = require('./routes/datos')
require('dotenv').config()

const app = express()
const port = 3000

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.use('/api/data', data)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server running on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()