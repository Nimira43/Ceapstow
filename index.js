const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Ceapstow Wholesalers')
})

app.listen(3000, () => {
  console.log('Server listening on Port 3000')
})