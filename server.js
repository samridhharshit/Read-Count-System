const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()
const port = process.env.PORT || 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}


app.listen(port, () => console.log(`listening to port ${port}`))
