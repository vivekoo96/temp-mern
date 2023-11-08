import { Router } from 'express'
const router = Router()
import {
  getAllEvent,
  createEvent,
  deleteEvent,
  updateEvent,
  findEvent,
} from '../controllers/jobControllers.js'
router.route('/').get(getAllEvent).post(createEvent)
router.route('/:id').get(findEvent).patch(updateEvent).delete(deleteEvent)

export default router
