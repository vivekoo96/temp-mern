import { toast } from 'react-toastify'
import { EventContainer, SearchContainer } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { useContext, createContext } from 'react'

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/events')
    return { data }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const AllEventContext = createContext()
const AllEvent = () => {
  const { data } = useLoaderData()
  return (
    <AllEventContext.Provider value={{ data }}>
      <SearchContainer />
      <EventContainer />
    </AllEventContext.Provider>
  )
}
export const useAllEventContext = () => useContext(AllEventContext)
export default AllEvent
