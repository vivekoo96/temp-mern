import Venue from './Venue'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useAllVenueContext } from '../pages/Venue'
const VanueContainer = () => {
  const { data } = useAllVenueContext()
  const { venues } = data
  if (venues.length === 0) {
    return (
      <Wrapper>
        <h2>No Vanue to display</h2>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div className='jobs'>
        {venues.map((venue) => {
          return <Venue key={venue._id} {...venue} />
        })}
      </div>
    </Wrapper>
  )
}

export default VanueContainer
