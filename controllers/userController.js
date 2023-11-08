import { StatusCodes } from 'http-status-codes'
import User from '../models/UserMolde.js'
import Event from '../models/EventModel.js'
export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId })
  const userWithoutPassword = user.toJSON()
  res.status(StatusCodes.OK).json({ user: userWithoutPassword })
}
export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments()
  const events = await Event.countDocuments()
  res.status(StatusCodes.OK).json({ users, events })
}
export const updateUser = async (req, res) => {
  const obj = { ...req.body }
  delete obj.password
  const updateUser = await User.findByIdAndUpdate(req.user.userId, req.body)
  res.status(StatusCodes.OK).json({ msg: updateUser })
}
