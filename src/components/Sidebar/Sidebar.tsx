import { AiOutlinePlus } from 'react-icons/ai'
import { BsDiscord, BsGearFill, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaCompass } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import SidebarIcon from './SidebarIcon'
import { useState } from 'react'

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()

  return (
    <div className='sidebar'>
      <SidebarIcon Icon={BsDiscord} chosen />
      <SidebarIcon Icon={AiOutlinePlus} />
      <SidebarIcon Icon={FaCompass} />
      <div className='mb-auto' />
      <SidebarIcon
        onClick={() => setDarkTheme(!darkTheme)}
        Icon={darkTheme ?
          BsMoonFill
        : BsSunFill
        }
      />
      <SidebarIcon Icon={BsGearFill} />
    </div>
  )
}

export default Sidebar