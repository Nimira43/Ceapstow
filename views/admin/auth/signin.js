const layout = require('../layout')

module.exports = () => {
  return layout({
    content: `
      <div>
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
    `
  })
}