import { AiOutlinePlus } from 'react-icons/ai'
import { BsDiscord, BsGearFill, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaCompass } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import SidebarIcon from './SidebarIcon'

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()

  return (
    <div className='sidebar'>
      <SidebarIcon Icon={BsDiscord} text='Direct messages' chosen />
      <SidebarIcon Icon={AiOutlinePlus} text='Add a server' />
      <SidebarIcon Icon={FaCompass} text='Explore public servers' />
      <div className='mb-auto' />
      <SidebarIcon
        onClick={() => setDarkTheme(!darkTheme)}
        Icon={darkTheme ?
          BsMoonFill
        : BsSunFill
        }
        text='Change theme'
      />
      <SidebarIcon Icon={BsGearFill} text='User settings' />
    </div>
  )
}

export default Sidebar