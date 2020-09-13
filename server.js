const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const path = require('path')

const sequelize = require('./database/models')

const app = express()
const port = process.env.PORT || 5000
const csrfMiddleware = csrf({ cookie: true })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(csrfMiddleware)

app.all('*', (req, res, nxt) => {
    res.cookie("XSRF-TOKEN", req.csrfToken())
    nxt()
})

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch((e) => console.log('Error: ' + e))


app.use('/', require('./routes/index'))


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}


app.listen(port, () => console.log(`listening to port ${port}`))
