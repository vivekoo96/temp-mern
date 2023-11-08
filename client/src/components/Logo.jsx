import logo from '../assets/images/logo.jpg'
const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt='poolevent'
        className='logo'
        style={{ width: '100%', maxWidth: '80px' }}
      />
    </div>
  )
}

export default Logo
