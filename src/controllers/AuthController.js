const mongoose = require('mongoose')
const User = mongoose.model('User')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

function generateToken (params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  })
}

module.exports = {
  async register (req, res) {
    const { email } = req.body

    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: 'The user already exists' })
      }

      const user = await User.create(req.body)
      user.password = undefined

      return res.send({ user, token: generateToken({ id: user.id }) })
    } catch (err) {
      return res.status(400).send({ error: 'The registration had been failed' })
    }
  },

  async login (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.status(400).send({ error: 'User not found' })
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Invalid password' })
    }

    user.password = undefined

    return res.send({ user, token: generateToken({ id: user.id }) })
  }
}
