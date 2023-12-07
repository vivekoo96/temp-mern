import StatusCodes from 'http-status-codes'
import { NotFoundError } from '../errors/customError.js'
import Event from '../models/EventModel.js'
import Vanue from '../models/VanueModel.js'
import mongoose from 'mongoose'
export const getAllEvent = async (req, res) => {
  if (req.user.role === 'admin') {
    Event.aggregate([
      {
        $lookup: {
          from: 'vanues',
          localField: 'venue',
          foreignField: '_id',
          as: 'venueInfo',
        },
      },
    ])
      .exec()
      .then((events) => {
        res.status(StatusCodes.OK).json({ events })
      })
      .catch((error) => {
        console.error(error)
      })
  } else {
    const eventPipeline = [
      {
        $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) },
      },
    ]

    const venuePipeline = [
      {
        $lookup: {
          from: 'vanues', // Make sure this matches your collection name
          localField: 'venue',
          foreignField: '_id',
          as: 'venueInfo',
        },
      },
    ]

    Event.aggregate(eventPipeline)
      .exec()
      .then((events) => {
        Vanue.aggregate(venuePipeline) // Change 'Vanue' to 'Venue' if that's the correct model name
          .exec()
          .then((vanues) => {
            const eventsWithVenueInfo = events.map((event) => {
              const venueInfo = vanues.find(
                (venue) => venue._id.toString() === event.venue.toString()
              )
              event.venueInfo = venueInfo
              return event
            })
            res.status(StatusCodes.OK).json({ events: eventsWithVenueInfo })
          })
          .catch((venueError) => {
            console.error(venueError)
          })
      })
      .catch((eventError) => {
        console.error(eventError)
      })
  }
}

export const createEvent = async (req, res) => {
  req.body.createdBy = req.user.userId
  const { venue } = req.body
  if (!venue) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'venue is required' })
  }
  const queryObject = {
    name: { $regex: venue },
  }
  const searchVanue = await Vanue.findOne(queryObject)

  req.body.venue = searchVanue._id
  const event = await Event.create(req.body)
  res.status(StatusCodes.CREATED).json({ event })
}

export const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id)
  res.status(StatusCodes.OK).json({ event })
}

export const updateEvent = async (req, res) => {
  console.log(req.params.id)
  const updateEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  console.log(updateEvent)
  res.status(StatusCodes.OK).json({ msg: 'Event Updated', event: updateEvent })
}
export const deleteEvent = async (req, res) => {
  const removeEvent = await Event.findByIdAndDelete(req.params.id)
  res.status(StatusCodes.OK).json({ msg: 'event deleted', removeEvent })
}
