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

const badyParser = (req, res, next) => {
  if (req.method === 'POST') {
    req.on('data', data => {
      console.log(data)
      console.log(data.toString('utf8'))
      const parsed = data.toString('utf8').split('&')
      const formData = {}
      for (let pair of parsed) {
        const [key, value] = pair.split('=')
        formData[key] = value}
      console.log(formData)
    })
  }
}

app.post('/', (req, res) => {

  res.send('Account created')
})

app.listen(3000, () => {
  console.log('Listening on Port 3000')
})