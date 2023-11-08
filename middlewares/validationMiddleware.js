import { body, validationResult } from 'express-validator'
import { BadRequestError } from '../errors/customError.js'
import User from '../models/UserMolde.js'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((error) => error.msg)
        throw new BadRequestError(errorMessage)
      }
      next()
    },
  ]
}

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email })
      if (user) {
        throw new BadRequestError('email already exists')
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('location').notEmpty().withMessage('location is required'),
])

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
])

export const validateUpdateUser = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('lastName').notEmpty().withMessage('lastName is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email })
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('email already exists')
      }
    }),
  body('location').notEmpty().withMessage('location is required'),
])

export const validateAddEvent = withValidationErrors([
  body('tournamentState').notEmpty().withMessage('tournamentState is required'),
  body('name').notEmpty().withMessage('name is required'),
  body('eventType').notEmpty().withMessage('eventType is required'),
  body('playerSize').notEmpty().withMessage('playerSize is required'),
  body('tournamentFormat')
    .notEmpty()
    .withMessage('tournamentFormat is required'),
  body('tournamentHandicapFormat')
    .notEmpty()
    .withMessage('tournamentHandicapFormat is required'),
  body('winnersRaceTo').notEmpty().withMessage('winnersRaceTo is required'),
  body('looserRaceTo').notEmpty().withMessage('looserRaceTo is required'),
  body('finalsRaceTo').notEmpty().withMessage('finalsRaceTo is required'),
  body('startDate').notEmpty().withMessage('startDate is required'),
  body('endDate').notEmpty().withMessage('endDate is required'),
  body('venue').notEmpty().withMessage('venue is required'),
  body('visibility').notEmpty().withMessage('visibility is required'),
  body('entryFee').notEmpty().withMessage('entryFee is required'),
  body('prizeDetails').notEmpty().withMessage('prizeDetails is required'),
  body('additionalInformation')
    .notEmpty()
    .withMessage('additionalInformation is required'),
  body('description').notEmpty().withMessage('description is required'),
])
