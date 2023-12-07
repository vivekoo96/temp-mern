import Event from './Event'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useAllEventContext } from '../pages/AllEvent'
const EventContainer = () => {
  const { data } = useAllEventContext()
  const { events } = data
  if (events.length === 0) {
    return (
      <Wrapper>
        <h2>No User to display</h2>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div className='jobs'>
        {events.map((event) => {
          return <Event key={event._id} {...event} />
        })}
      </div>
    </Wrapper>
  )
}

export default EventContainer
