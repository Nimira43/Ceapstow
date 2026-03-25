// REGISTER

const layout = require('../layout')
const { getError } = require('../../helpers')

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="auth-wrapper">
        <div class="auth-card">
          <form method='POST' class="auth-form">
            <h1 class="auth-title">Register</h1>

            <div class="auth-group">
              <label class="auth-label">Email</label>
              <input 
                required 
                placeholder='Email'
                name='email'
                class="auth-input"
              />
              <p class="auth-error">${getError(errors, 'email')}</p>
            </div>

            <div class="auth-group">
              <label class="auth-label">Password</label>  
              <input 
                required 
                placeholder='Password' 
                name='password' 
                type='password'
                class="auth-input"
              />
              <p class="auth-error">${getError(errors, 'password')}</p>
            </div>

            <div class="auth-group">
              <label class="auth-label">Confirm Password</label>  
              <input 
                required  
                placeholder='Confirm Password' 
                name='passwordConfirmation' 
                type='password'
                class="auth-input"
              />
              <p class="auth-error">${getError(errors, 'passwordConfirmation')}</p>
            </div>

            <button class="btn btn-orange btn-block">
              Submit
            </button>

            <p class="auth-switch">
              Already have an account? 
              <a href='/signin' class="auth-link">Login</a>
            </p>
          </form> 
        </div>
      </div>    
    `
  })
}
