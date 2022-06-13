require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const user = require('./routes/user')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use("/user", user)

connectDB()


const PORT = process.env.PORT || process.env.port

app.listen(PORT, err => {
    err ? console.log(`Server connection failed`, err)
        : console.log(`The server is runnin on port ${PORT}`)
})