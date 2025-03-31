const express = require('express')
const usersRepo = require('../../repositories/users')

const router = express.Router()

app.get('/signup', (req, res) => {
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

app.post('/signup', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body
  
  const existingUser = await usersRepo.getOneBy({ email })
  
  if (existingUser) {
    return res.send('Email is already in use.')
  }

  if (password !== passwordConfirmation) {
    return res.send('Password must match.')
  }

  const user = await usersRepo.create({ email, password })

  req.session.userId = user.id

  res.send('Accounted Created.')
})  

app.get('/signout', (req, res) => {
  req.session = null
  res.send('You are now logged out.')
})

app.get('/signin', (req, res) => {
  res.send(`
    <div>
      <link rel="stylesheet" type="text/css" href="styles.css">
      <h1>Ceapstow Wholesalers</h1>
      <hr />
      <h2>Login</h2>
      <form method="POST">
        <input 
          name="email" 
          placeholder="Email" 
        />
        <input 
          name="password" 
          placeholder="Password" 
        />
        <button>Login</button>
      </form>
    </div>
  `)
})

app.post('/signin', async (req, res) => {
  const { email, password } = req.body
  
  const user = await usersRepo.getOneBy({ email })
  
  if (!user) {
    return res.send('Email not found.')
  }

  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  )
  if (!validPassword) {
    return res.send('Invalid password.')
  }

  req.session.userId = user.id

  res.send('You are now signed in.')
}) 