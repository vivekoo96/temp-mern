import { FormRow, FormRowSelect } from '../components'
import Wrapper from '../assets/wrappers/DashboardFormPage'
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
    await customFetch.post('/events', data)
    toast.success('event added successfully')
    return redirect('all-tournaments')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }
}

const AddEvent = () => {
  const { user } = useOutletContext()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>add Event</h4>
        <div className='form-center'>
          <FormRowSelect
            labelText='Tournament state'
            name='tournamentState'
            defaultValue={TOURNAMENT_STATE.SINGLE_STATE}
            list={Object.values(TOURNAMENT_STATE)}
          />
          <FormRow type='text' name='name' />
          <FormRowSelect
            labelText='Event Type'
            name='eventType'
            defaultValue={EVENT_TYPE.SINGLE_ELIMINATION}
            list={Object.values(EVENT_TYPE)}
          />
          <FormRow
            type='number'
            name='playerSize'
            labelText='Field/Player size'
            defaultValue='1'
          />
          <FormRowSelect
            labelText=' Tournament format'
            name='tournamentFormat'
            defaultValue={TOURNAMENT_FORMAT.SINGLES}
            list={Object.values(TOURNAMENT_FORMAT)}
          />
          <FormRowSelect
            labelText=' Tournament handicap format'
            name='tournamentHandicapFormat'
            defaultValue={HANDICAP_FORMAT.OPEN}
            list={Object.values(HANDICAP_FORMAT)}
          />
          <FormRow
            type='number'
            name='winnersRaceTo'
            labelText='Winners race to'
            defaultValue='1'
          />
          <FormRow
            type='number'
            name='looserRaceTo'
            labelText='Losers race to'
            defaultValue='1'
          />
          <FormRow
            type='number'
            name='finalsRaceTo'
            labelText='Finals race to'
            defaultValue='1'
          />
          <FormRow
            type='datetime-local'
            name='startDate'
            labelText='start date and time'
          />
          <FormRow
            type='datetime-local'
            name='endDate'
            labelText='end date and time'
          />
          <div className='form-row'>
            <label htmlFor='venue' className='form-label'>
              venue
            </label>
            <input
              type='text'
              name='venue'
              id='venue'
              className='form-input'
              style={{ width: '80%' }}
            />
            <button
              type='button'
              className='btn register-link'
              style={{ height: '35px' }}
            >
              + Venue
            </button>
          </div>
          <FormRowSelect
            labelText=' Visibility'
            name='visibility'
            defaultValue={VISIBILITY.PUBLIC}
            list={Object.values(VISIBILITY)}
          />
          <FormRow type='text' name='entryFee' labelText='Entry fee' />
          <div className='form-row'>
            <label htmlFor='prizeDetails' className='form-label'>
              Prize Details
            </label>
            <textarea
              className='form-input'
              name='prizeDetails'
              id='prizeDetails'
              cols='20'
              rows='10'
            ></textarea>
          </div>
          <div className='form-row'>
            <label htmlFor='additionalInformation' className='form-label'>
              Additional Information
            </label>
            <textarea
              className='form-input'
              name='additionalInformation'
              id='additionalInformation'
              cols='20'
              rows='10'
              style={{ height: 'auto' }}
            ></textarea>
          </div>
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

export default AddEvent
