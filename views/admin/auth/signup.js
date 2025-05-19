const layout = require('../layout')

const getError = (errors, prop) => {
  try {
    return errors.mapped()[prop].msg
  } catch (err) {
    return ''
  }
}

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div>
        <h1>Ceapstow Wholesalers</h1>
        <hr />
        // <h4>Your ID is ${req.session.userId}</h4>
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