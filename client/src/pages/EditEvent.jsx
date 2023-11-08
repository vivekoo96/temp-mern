import { FormRow, FormRowSelect } from '../components'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { useLoaderData, useParams } from 'react-router-dom'
import {
  TOURNAMENT_STATE,
  EVENT_TYPE,
  TOURNAMENT_FORMAT,
  HANDICAP_FORMAT,
  VISIBILITY,
} from '../../../utils/constants'
import { Form, useNavigation, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`events/${params.id}`)
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return redirect('/dashboard/all-tournaments')
  }
}
export const action = async ({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.log(data)
  try {
    await customFetch.patch(`/events/${params.id}`, data)
    toast.success('tournaments updated successfully')
    return redirect('/dashboard/all-tournaments')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const EditEvent = () => {
  const { event } = useLoaderData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>edit event</h4>
        <div className='form-center'>
          <FormRowSelect
            labelText='Tournament state'
            name='tournamentState'
            defaultValue={event.tournamentState}
            list={Object.values(TOURNAMENT_STATE)}
          />
          <FormRow type='text' name='name' defaultValue={event.name} />
          <FormRowSelect
            labelText='Event Type'
            name='eventType'
            defaultValue={event.eventType}
            list={Object.values(EVENT_TYPE)}
          />
          <FormRow
            type='number'
            name='playerSize'
            labelText='Field/Player size'
            defaultValue={event.playerSize}
          />
          <FormRowSelect
            labelText=' Tournament format'
            name='tournamentFormat'
            defaultValue={event.tournamentFormat}
            list={Object.values(TOURNAMENT_FORMAT)}
          />
          <FormRowSelect
            labelText=' Tournament handicap format'
            name='tournamentHandicapFormat'
            defaultValue={event.tournamentHandicapFormat}
            list={Object.values(HANDICAP_FORMAT)}
          />
          <FormRow
            type='number'
            name='winnersRaceTo'
            labelText='Winners race to'
            defaultValue={event.winnersRaceTo}
          />
          <FormRow
            type='number'
            name='looserRaceTo'
            labelText='Losers race to'
            defaultValue={event.looserRaceTo}
          />
          <FormRow
            type='number'
            name='finalsRaceTo'
            labelText='Finals race to'
            defaultValue={event.finalsRaceTo}
          />
          <FormRow
            type='datetime-local'
            name='startDate'
            labelText='start date and time'
            defaultValue={event.startDate}
          />
          <FormRow
            type='datetime-local'
            name='endDate'
            labelText='end date and time'
            defaultValue={event.endDate}
          />
          <div className='form-row'>
            <label htmlFor='venue' className='form-label'>
              venue
            </label>
            <input
              type='text'
              name='venue'
              id='venue'
              defaultValue={event.venue}
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
            defaultValue={event.visibility}
            list={Object.values(VISIBILITY)}
          />
          <FormRow
            type='text'
            name='entryFee'
            defaultValue={event.entryFee}
            labelText='Entry fee'
          />
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
            >
              {event.prizeDetails}
            </textarea>
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
            >
              {event.additionalInformation}
            </textarea>
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
            >
              {event.description}
            </textarea>
          </div>
        </div>
        <button
          type='submit'
          className='btn'
          style={{ marginTop: '20px' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating...' : 'Update'}
        </button>
      </Form>
    </Wrapper>
  )
}

export default EditEvent
