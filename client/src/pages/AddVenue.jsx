import { FormRow, FormRowSelect } from '../components'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import countries from 'country-list'
import {
  Form,
  useNavigation,
  redirect,
  useOutletContext,
} from 'react-router-dom'
import {
  TOURNAMENT_STATE,
  EVENT_TYPE,
  TOURNAMENT_FORMAT,
  VISIBILITY,
  HANDICAP_FORMAT,
} from '../../../utils/constants.js'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/venues', data)
    toast.success('venue added successfully')
    return redirect('../venues')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const AddVenue = () => {
  const { user } = useOutletContext()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>add Venue</h4>
        <div className='form-center'>
          <FormRow type='text' name='name' />
          <FormRow type='text' name='address' />
          <FormRow type='text' name='vanueType' />
          <FormRowSelect
            labelText='country'
            name='country'
            list={Object.values(Object.values(countries.getNames()))}
          />
          <FormRowSelect
            labelText='access'
            name='access'
            list={Object.values(Object.values(VISIBILITY))}
          />
          <br></br>
          <div className='form-row'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <textarea
              className='form-input'
              name='description'
              id='description'
              cols='20'
              rows='10'
              style={{ height: 'auto' }}
            ></textarea>
          </div>
        </div>
        <button
          type='submit'
          className='btn'
          style={{ marginTop: '20px' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </Wrapper>
  )
}

export default AddVenue
