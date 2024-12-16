const express = require('express')
const app = express()



app.get('/', (req, res) => {
  res.send(`
      <div>
      <h1>Register</h1>
        <form method="POST">
          <input name="email" placeholder= 'email' />
          <input name="password" placeholder= 'password' />
          <input name="passwordConfirm" placeholder= 'confirm password' />
          <button>Register</button>
        </form>
      </div>
    `)
})

app.post('/', (req, res) => {
  res.send('Account created')
})

app.listen(3000, () => {
  console.log('Listening on Port 3000')
})