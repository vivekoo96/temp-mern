import { StatusCodes } from 'http-status-codes'
import User from '../models/UserMolde.js'
import bcrypt from 'bcryptjs'
import { comparePassword, hashPassword } from '../utils/passwordUtils.js'
import { UnauthenticatedError } from '../errors/customError.js'
import { createJWT } from '../utils/tokenUtils.js'
export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0
  const hashedPassword = await hashPassword(req.body.password)
  req.body.password = hashedPassword
  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ msg: 'User Created' })
}

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (!user) throw new UnauthenticatedError('invalid credentials')
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password))
  if (!isValidUser) throw new UnauthenticatedError('invalid credentials')
  const token = createJWT({
    userId: user._id,
    role: user.role,
  })
  const oneDay = 1000 * 60 * 60 * 24
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  })
  res.status(StatusCodes.OK).json({ msg: 'user log in' })
}
export const logout = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json({ msg: 'user Logout!' })
}
