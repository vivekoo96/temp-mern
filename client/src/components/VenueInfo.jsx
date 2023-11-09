import Wrapper from '../assets/wrappers/JobInfo'
const VenueInfo = ({ icon, text, label }) => {
  return (
    <Wrapper>
      <span className='job-icon'>{icon}</span>
      <span className='job-label'>{label}</span>
      <span className='job-text'>{text}</span>
    </Wrapper>
  )
}

export default VenueInfo
