const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <div>
      <h1>Ceapstow Wholesalers</h1>
      <hr />
      <h2>Register</h2>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Password Confirm" />
        <button>Register</button>
      </form>
    </div>
  `)
})

app.listen(3000, () => {
  console.log('Server listening on Port 3000')
})