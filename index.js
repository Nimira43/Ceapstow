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

const bodyParser = (req, res, next) => {
  if (req.method === 'POST') {
    req.on('data', data => {
      console.log(data)
      console.log(data.toString('utf8'))
      const parsed = data.toString('utf8').split('&')
      const formData = {}
      for (let pair of parsed) {
        const [key, value] = pair.split('=')
        formData[key] = value
      }
      console.log(formData)
      req.body = formData
      next()
    })
  } else {
    next()
  }
}

app.post('/', bodyParser, (req, res) => {
  console.log(req.body)
  res.send('Account created')
})

app.listen(3000, () => {
  console.log('Listening on Port 3000')
})