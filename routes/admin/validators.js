const { check } = require('express-validator')
const usersRepo = require('../../repositories/users')

module.exports = {
  requireEmail: check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must be a valid email.')
    .custom(async email => {
      const existingUser = await usersRepo.getOneBy({ email })  
      if (existingUser) {
        throw new Error('Email is already in use.')
      }    
    }),
  requirePassword: check('password')
    .trim()
    .isLength({ min: 8, max: 20 })
    .withMessage('Password must be between 8 and 20 characters'),
  requirePasswordConfirmation: check('passwordConfirmation')
    .trim()
    .isLength({ min: 8, max: 20 })
    .withMessage('Password must be between 8 and 20 characters')
    .custom((passwordConfirmation, { req }) => {
      if (passwordConfirmation !== req.body.password) {
        throw new Error('Passwords must match.')
      }
    })
}
