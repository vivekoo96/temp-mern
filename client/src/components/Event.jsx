import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Job'
import EventInfo from './EventInfo'
import { Form } from 'react-router-dom'
import day from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
day.extend(advancedFormat)
const Event = ({
  tournamentState,
  name,
  eventType,
  playerSize,
  tournamentFormat,
  tournamentHandicapFormat,
  winnersRaceTo,
  looserRaceTo,
  finalsRaceTo,
  startDate,
  endDate,
  venue,
  venueInfo,
  visibility,
  entryFee,
  prizeDetails,
  additionalInformation,
  description,
  eventStatus,
  createdAt,
  _id,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY')
  const startedDate = day(startDate).format('MMM Do,YYYY')
  const endedDate = day(endDate).format('MMM Do,YYYY')
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
          <p>{tournamentState}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <EventInfo
            icon={<FaLocationArrow />}
            text={venueInfo.name}
            label='Vanue'
          />
          <EventInfo icon={<FaCalendarAlt />} text={date} label='created at' />
          <EventInfo
            icon={<FaCalendarAlt />}
            text={startedDate}
            label='Start Date'
          />
          <EventInfo
            icon={<FaCalendarAlt />}
            text={endedDate}
            label='End Date'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={eventType}
            label='Event Type'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={playerSize}
            label='Player size'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={tournamentFormat}
            label='Tournament Format'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={tournamentHandicapFormat}
            label='Handicap Format'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={winnersRaceTo}
            label='Winners Race To'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={looserRaceTo}
            label='Looser Race To'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={finalsRaceTo}
            label='Finals Race To'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={visibility}
            label='visibility'
          />
          <EventInfo icon={<FaBriefcase />} text={entryFee} label='entry Fee' />
          <EventInfo
            icon={<FaBriefcase />}
            text={prizeDetails}
            label='prize Details'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={additionalInformation}
            label='Information'
          />
          <EventInfo
            icon={<FaBriefcase />}
            text={description}
            label='description'
          />
          <div className={`status ${eventStatus}`}>{eventStatus}</div>
        </div>
        <footer className='actions'>
          <Link to={`../edit-event/${_id}`} className='btn edit-btn'>
            Edit
          </Link>
          <Form method='post' action={`../delete-event/${_id}`}>
            <button type='submit' className='btn delete-btn'>
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Event
