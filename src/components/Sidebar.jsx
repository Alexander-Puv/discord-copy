import React from 'react'
import { BsDiscord, BsGearFill, BsPlus, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaCompass } from 'react-icons/fa'
import useDarkMode from '../hooks/useDarkMode'

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()

  return (
    <div className='sidebar'>
      <SidebarIcon icon={<BsDiscord />} />
      <SidebarIcon icon={<BsPlus />} />
      <SidebarIcon icon={<FaCompass />} />
      <div className='mb-auto' />
      <SidebarIcon
        onClick={() => setDarkTheme(!darkTheme)}
        icon={darkTheme ?
          <BsMoonFill />
        : <BsSunFill />
        }
      />
      <SidebarIcon icon={<BsGearFill />} />
    </div>
  )
}

const SidebarIcon = ({icon, text = 'tooltip', onClick}) => {
  return (
    <div className='sidebar-icon group' onClick={onClick}>
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
  )
}

export default Sidebar