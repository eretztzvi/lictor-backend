global.config = require(process.env.NODE_ENV === "production" ? "./config-prod.json" : "./config-dev.json");
const path = require('path')

const authController = require('./controllers-layer/auth-controller')
const personsController = require('./controllers-layer/persons-controller')
const likesController = require('./controllers-layer/likes-controller')

const express = require('express')
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "./frontend")))

// ----------------------------------------------------
// Routes
app.use('/auth', authController)
app.use('/persons', personsController)
app.use('/likes', likesController)
// ----------------------------------------------------

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/index.html"))
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`))