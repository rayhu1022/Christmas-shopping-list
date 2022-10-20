const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const xmasRoutes = require('./routes/xmas')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ exteded: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/xmas', xmasRoutes)

app.listen(process.env.PORT, () => {
    console.log('server is running')
})