import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Pool <span>Event</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laboriosam obcaecati magni quas tempora architecto nemo accusantium
            quia, qui fugit sed, non hic veniam blanditiis ad aspernatur aliquam
            minus nihil!
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login
          </Link>
        </div>
        <img src={main} alt='poolevent' className='img img-main' />
      </div>
    </Wrapper>
  )
}

export default Landing
