import mongoose from 'mongoose'
import {
  TOURNAMENT_STATE,
  EVENT_TYPE,
  TOURNAMENT_FORMAT,
  VISIBILITY,
  HANDICAP_FORMAT,
  STATUS,
} from '../utils/constants.js'
const EventSchema = new mongoose.Schema(
  {
    tournamentState: {
      type: String,
      enum: Object.values(TOURNAMENT_STATE),
      default: TOURNAMENT_STATE.SINGLE_STATE,
    },
    name: String,
    eventType: {
      type: String,
      enum: Object.values(EVENT_TYPE),
      default: EVENT_TYPE.SINGLE_ELIMINATION,
    },
    playerSize: String,
    tournamentFormat: {
      type: String,
      enum: Object.values(TOURNAMENT_FORMAT),
      default: TOURNAMENT_FORMAT.SINGLES,
    },
    tournamentHandicapFormat: {
      type: String,
      enum: Object.values(HANDICAP_FORMAT),
      default: HANDICAP_FORMAT.HANDICAP_FORMAT,
    },
    winnersRaceTo: String,
    looserRaceTo: String,
    finalsRaceTo: String,
    startDate: Date,
    endDate: Date,
    venue: String,
    visibility: {
      type: String,
      enum: Object.values(VISIBILITY),
      default: VISIBILITY.INVITE_ONLY,
    },
    entryFee: Number,
    prizeDetails: String,
    additionalInformation: String,
    description: String,
    eventStatus: {
      type: String,
      enum: Object.values(STATUS),
      default: STATUS.PENDING,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    venue: {
      type: mongoose.Types.ObjectId,
      ref: 'Vanue',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Event', EventSchema)
