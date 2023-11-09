import StatusCodes from 'http-status-codes'
import { NotFoundError } from '../errors/customError.js'
import Vanue from '../models/VanueModel.js'

export const createVanue = async (req, res) => {
  req.body.createdBy = req.user.userId
  const vanue = await Vanue.create(req.body)
  res.status(StatusCodes.CREATED).json({ vanue })
}

export const getAllVanue = async (req, res) => {
  const venues = await Vanue.find({})
  res.status(StatusCodes.OK).json({ venues })
}

export const getVanue = async (req, res) => {
  const vanue = await Vanue.findById(req.params.id)
  res.status(StatusCodes.OK).json({ vanue })
}

export const updateVanue = async (req, res) => {
  console.log(req.params.id)
  const updateVanue = await Vanue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(StatusCodes.OK).json({ msg: 'Vanue Updated', event: updateVanue })
}

export const deleteVanue = async (req, res) => {
  const removeVanue = await Vanue.findByIdAndDelete(req.params.id)
  res.status(StatusCodes.OK).json({ msg: 'Vanue deleted', removeVanue })
}

export const searchVanue = async (req, res) => {
  const { name } = req.query
  if (!name) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'name is required' })
  }
  const queryObject = {
    name: { $regex: name },
  }
  const searchVanue = await Vanue.find(queryObject)

  res.status(StatusCodes.OK).json({ msg: 'Vanue get', searchVanue })
}
