const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <div>
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

const bodyParser = (req, res, next) => {
  if (req.method === 'POST') {
    req.on('data', data => {
      const parsed = data.toString('utf8').split('&')
      const formData = {}
      for (let pair of parsed) {
        const [key, value] = pair.split('=')
        formData[key] = decodeURIComponent(value)
      }
      console.log(formData)
    })
  }
}

app.post('/', (req, res) => {
  console.log(req)
  res.send('Account Created!')
})

app.listen(3000, () => {
  console.log('Server listening on Port 3000')
})