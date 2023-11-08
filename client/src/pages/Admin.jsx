import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa'

import { useLoaderData, redirect } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import Wrapper from '../assets/wrappers/StatsContainer'
import { toast } from 'react-toastify'

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats')
    return response.data
  } catch (error) {
    toast.error('yo are not authorize to view this page')
    return redirect('/dashboard')
  }
}
const Admin = () => {
  const { users, events } = useLoaderData()
  return <Wrapper>Admin</Wrapper>
}

export default Admin
