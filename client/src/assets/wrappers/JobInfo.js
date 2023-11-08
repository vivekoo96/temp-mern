import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .job-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--text-secondary-color);
    }
  }
  .job-label {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary-800);
    margin-right: 1rem;
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .job-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
`
export default Wrapper
