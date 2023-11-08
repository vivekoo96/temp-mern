import { Router } from 'express'
const router = Router()
import {
  getAllEvent,
  createEvent,
  deleteEvent,
  updateEvent,
  getEvent,
} from '../controllers/eventController.js'
router.route('/').get(getAllEvent).post(createEvent)
router.route('/:id').get(getEvent).patch(updateEvent).delete(deleteEvent)

export default router
