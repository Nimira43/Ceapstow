const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const usersRepo = require('./repositories/users')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
  keys: ['gkogfklsktodkslf']
}))

app.listen(3000, () => {
  console.log('Server listening on Port 3000')
})