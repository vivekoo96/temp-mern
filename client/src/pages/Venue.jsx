import { toast } from 'react-toastify'
import { VanueContainer, SearchContainer } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useContext, createContext } from 'react'
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/venues')
    return { data }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const AllVenueContext = createContext()
const Venue = () => {
  const { data } = useLoaderData()
  return (
    <AllVenueContext.Provider value={{ data }}>
      <SearchContainer />
      <VanueContainer />
    </AllVenueContext.Provider>
  )
}
export const useAllVenueContext = () => useContext(AllVenueContext)
export default Venue
