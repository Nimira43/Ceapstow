const layout = require('../layout')

module.exports = ({ req }) => {
  return layout({
    content: `
      <div>
      <link rel="stylesheet" type="text/css" href="/styles.css">
        <h1>Ceapstow Wholesalers</h1>
        <hr />
        <h4>Your ID is ${req.session.userId}</h4>
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
    `
  })
}