const { check } = require('express-validators')
const usersRepo = require('../../repositories')

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
}
