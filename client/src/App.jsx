import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  DashboardLayout,
  AddEvent,
  Admin,
  AllEvent,
  EditEvent,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
  Venue,
  Players,
  Payment,
  Game,
  Tournament,
  AddVenue,
} from './pages'
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { loader as DashboardLoader } from './pages/DashboardLayout'
import { action as addEvent } from './pages/AddEvent'
import { loader as AllEventLoader } from './pages/AllEvent'
import { action as editEventAction } from './pages/EditEvent'
import { loader as editEventLoader } from './pages/EditEvent'
import { action as deleteEventAction } from './pages/DeleteEvent'
import { action as deleteVenueAction } from './pages/DeleteVenue'
import { loader as adminLoader } from './pages/Admin'
import { loader as vanueLoader } from './pages/Venue'
import { action as addVenueAction } from './pages/AddVenue'
import { loader as getVenue } from './pages/AddEvent'
import { loader as venueLoader } from './pages/AddVenue'
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}

checkDefaultTheme()
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: DashboardLoader,
        children: [
          {
            index: true,
            element: <AddEvent />,
            loader: getVenue,
            action: addEvent,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-tournaments',
            element: <AllEvent />,
            loader: AllEventLoader,
          },
          {
            path: 'players',
            element: <Players />,
          },
          {
            path: 'create-venue',
            element: <AddVenue />,
            action: addVenueAction,
            loader: venueLoader,
          },
          {
            path: 'venues',
            element: <Venue />,
            loader: vanueLoader,
          },
          {
            path: 'payment',
            element: <Payment />,
          },
          {
            path: 'tournament',
            element: <Tournament />,
          },
          {
            path: 'game',
            element: <Game />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-event/:id',
            element: <EditEvent />,
            loader: editEventLoader,
            action: editEventAction,
          },
          {
            path: 'delete-event/:id',
            action: deleteEventAction,
          },
          {
            path: 'delete-venue/:id',
            action: deleteVenueAction,
          },
        ],
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
