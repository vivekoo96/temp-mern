import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Job'
import VenueInfo from './VenueInfo'
import { Form } from 'react-router-dom'
import day from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
day.extend(advancedFormat)
const Venue = ({
  name,
  address,
  country,
  description,
  vanueType,
  access,
  createdAt,
  _id,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
          <p>{country}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <VenueInfo
            icon={<FaLocationArrow />}
            text={vanueType}
            label='Vanue Type'
          />
          <VenueInfo icon={<FaBriefcase />} text={access} label='Access' />
          <VenueInfo
            icon={<FaBriefcase />}
            text={address}
            label='description'
          />
          <VenueInfo
            icon={<FaBriefcase />}
            text={description}
            label='Address'
          />
          <VenueInfo icon={<FaCalendarAlt />} text={date} label='Created At' />
        </div>
        <footer className='actions'>
          <Form method='post' action={`../delete-venue/${_id}`}>
            <button type='submit' className='btn delete-btn'>
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Venue
