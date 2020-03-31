const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json)
app.use(express.static('public'))

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

require('./routes/htmlroutes')(app)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})