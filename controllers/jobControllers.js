import { nanoid } from 'nanoid'
let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'apple', position: 'back-end' },
]
import StatusCodes from 'http-status-codes'
import { NotFoundError } from '../errors/customError.js'
export const getAllEvent = async (req, res) => {
  console.log(req.user)
  res.status(200).json({ jobs })
}

export const createEvent = async (req, res) => {
  const { company, position } = req.body
  if (!company || !position) {
    res.status(400).json({ msg: 'please provide company and position' })
    return
  }
  const id = nanoid(10)
  const job = { id, company, position }
  jobs.push(job)
  res.status(200).json({ job })
}

export const findEvent = async (req, res) => {
  const { id } = req.params
  const job = jobs.find((job) => job.id === id)
  if (!job) throw new NotFoundError(`event not fond on this id: ${id}`)
  res.status(StatusCodes.OK).json({ job })
}

export const updateEvent = async (req, res) => {
  if (!company || !position) {
    res.status(404).json({ mag: 'Provide company and position' })
    return
  }

  const { id } = req.params
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    res.status(404).json({ msg: `event not fond on this id: ${id}` })
    return
  }
  job.company = company
  job.position = position
  res.status(200).json({ msg: 'job modified', job })
}
export const deleteEvent = async (req, res) => {
  const { id } = req.params
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    res.status(404).json({ msg: `job not found with id:${id}` })
  }
  const newJob = jobs.filter((job) => job.id !== id)
  res.status(200).json({ msg: 'job deleted', newJob })
}
