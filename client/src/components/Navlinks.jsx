import React from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'

const Navlinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext()
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link
        const { role } = user

        if (path === 'admin' && role !== 'admin') return
        if (path === 'venues' && role !== 'admin') return
        if (path === 'create-venue' && role !== 'admin') return
        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            onClick={isBigSidebar ? null : toggleSidebar}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default Navlinks
