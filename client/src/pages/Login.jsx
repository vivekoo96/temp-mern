import {
  Form,
  redirect,
  useNavigation,
  Link,
  useActionData,
} from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../components'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const errors = { msg: '' }
  if (data.password.length < 3) {
    errors.msg = 'password too short'
    return errors
  }
  try {
    const user = await customFetch.post('/auth/login', data)
    toast.success('Login successful')
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const Login = () => {
  const errors = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Login</h4>

        {errors?.msg && <p style={{ color: 'red' }}>{errors.msg}</p>}

        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : 'Login'}
        </button>
      </Form>
    </Wrapper>
  )
}

export default Login
