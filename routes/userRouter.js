import { Router } from 'express'
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controllers/userController.js'
import { validateUpdateUser } from '../middlewares/validationMiddleware.js'
import { authorizePermissions } from '../middlewares/authMiddleware.js'
const router = Router()

router.get('/current-user', getCurrentUser)
router.get('/admin/app-stats', [
  authorizePermissions('admin'),
  getApplicationStats,
])
router.patch('/update-user', validateUpdateUser, updateUser)

export default router
