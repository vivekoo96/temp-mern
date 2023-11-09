import { Router } from 'express'
const router = Router()
import {
  getAllVanue,
  createVanue,
  deleteVanue,
  updateVanue,
  getVanue,
  searchVanue,
} from '../controllers/vanueController.js'
router.route('/search').get(searchVanue)
router.route('/').get(getAllVanue).post(createVanue)
router.route('/:id').delete(deleteVanue)

export default router
