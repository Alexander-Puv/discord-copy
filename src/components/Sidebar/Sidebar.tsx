import React, { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsDiscord, BsGearFill, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaCompass } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import SidebarIcon, { SidebarIconNames, SidebarIconProps } from './SidebarIcon'
import { AppContext } from '../../contexts/AppContext'

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const appContext = useContext(AppContext)
  if (!appContext) return <></>
  const {chosen, setChosen} = appContext

  const SidebarIcons: SidebarIconProps[] = [
    {name: SidebarIconNames.discord, Icon: BsDiscord, text: 'Direct messages'},
    {name: SidebarIconNames.plus, Icon: AiOutlinePlus, text: 'Add a server'},
    {name: SidebarIconNames.compass, Icon: FaCompass, text: 'Explore public servers'},
    {name: SidebarIconNames.theme, Icon: darkTheme ? BsMoonFill : BsSunFill,
      text: 'Change theme', onClick: () => setDarkTheme(!darkTheme)},
    {name: SidebarIconNames.settings, Icon: BsGearFill, text: 'User settings'},
  ]

  return (
    <div className='sidebar'>
      {SidebarIcons.map((icon, index) => <React.Fragment key={index}>
        {icon.name === SidebarIconNames.theme && <div className='mt-auto'></div>}
        <SidebarIcon
          {...icon} chosen={chosen === icon.name}
          onClick={() => icon.onClick ? icon.onClick() : setChosen(icon.name)}
          // if there is onClick it can't be chosen
        />
        {icon.name == SidebarIconNames.discord && <>
          <span className="dividing-line"></span>
        </>}
      </React.Fragment>)}
    </div>
  )
}

export default Sidebar