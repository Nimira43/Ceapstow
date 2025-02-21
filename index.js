const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const usersRepo = require('./repositories/users')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
  keys: ['RandomSeriesOfCharacters']
}))

app.get('/', (req, res) => {
  res.send(`
    <div>
    <link rel="stylesheet" type="text/css" href="styles.css">
      <h1>Ceapstow Wholesalers</h1>
      <hr />
      <h2>Register</h2>
      <form method="POST">
        <input 
          name="name" 
          placeholder="Name" 
        />
        <input 
          name="email" 
          placeholder="Email" 
        />
        <input 
          name="password" 
          placeholder="Password" 
        />
        <input 
          name="passwordConfirmation"
          placeholder="Password Confirm" 
        />
        <button>Register</button>
      </form>
    </div>
  `)
})

app.post('/', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body
  
  const existingUser = await usersRepo.getOneBy({ email })
  
  if (existingUser) {
    return res.send('Email is already in use.')
  }

  if (password !== passwordConfirmation) {
    return res.send('Password must match.')
  }

  const user = await usersRepo.create({ email, password })

  res.send('Account Created!')
})

app.listen(3000, () => {
  console.log('Server listening on Port 3000')
}) 