import React from 'react'
import { IoBarChartSharp, IoGameControllerOutline } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { AiOutlineCloud, AiOutlineUser, AiFillBank } from 'react-icons/ai'
import { MdAdminPanelSettings } from 'react-icons/md'
import { TbTournament } from 'react-icons/tb'

const links = [
  {
    text: 'Create tournaments',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'all tournaments',
    path: 'all-tournaments',
    icon: <MdQueryStats />,
  },
  {
    text: 'venues',
    path: 'venues',
    icon: <AiOutlineCloud />,
  },
  {
    text: 'players',
    path: 'players',
    icon: <AiOutlineUser />,
  },
  {
    text: 'payment',
    path: 'payment',
    icon: <AiFillBank />,
  },
  {
    text: 'mamange game',
    path: 'game',
    icon: <IoGameControllerOutline />,
  },
  {
    text: 'tournament types',
    path: 'tournament',
    icon: <TbTournament />,
  },
  {
    text: 'stats',
    path: 'stats',
    icon: <IoBarChartSharp />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
]

export default links
