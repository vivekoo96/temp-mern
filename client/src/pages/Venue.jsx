import { toast } from 'react-toastify'
import { VanueContainer, SearchContainer } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData, redirect } from 'react-router-dom'
import { useContext, createContext, useEffect, useState } from 'react'
export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats')
    return response.data
  } catch (error) {
    toast.error('yo are not authorize to view this page')
    return redirect('/dashboard')
  }
}
const AllVenueContext = createContext()

const Venue = () => {
  const [venue, setVenue] = useState(null)
  useEffect(() => {
    const getVenue = async () => {
      const { data } = await customFetch.get('/venues')
      setVenue[data]
    }
    getVenue()
  }, [])
  const { data } = venue
  return (
    <AllVenueContext.Provider value={{ data }}>
      <SearchContainer />
      <VanueContainer />
    </AllVenueContext.Provider>
  )
}
export const useAllVenueContext = () => useContext(AllVenueContext)
export default Venue
