import React, { useContext, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsDiscord, BsGearFill, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaCompass } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import SidebarIcon, { SidebarIconNames, SidebarIconProps } from './SidebarIcon'
import { useAppContext } from '../../contexts/AppContext'
import Popup from '../UI/Popup/Popup'

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const [isOpen, setIsOpen] = useState(false)
  const {chosen, setChosen} = useAppContext()

  const SidebarIcons: SidebarIconProps[] = [
    {name: SidebarIconNames.discord, Icon: BsDiscord, text: 'Direct messages'},
    {name: SidebarIconNames.plus, Icon: AiOutlinePlus, text: 'Add a server',
      onClick: () => setIsOpen(true)},
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
      {/* <Popup {...{isOpen, setIsOpen}} popupContent={{
        title: 'Create a server',
        subtitle: 'Your server is where you and your friends hang out. Make yours and start talking.',
        content: [<Popup.Block title='aaaaaaaaa' />],
        close: {text: 'Close'}
      }} /> */}
    </div>
  )
}

export default Sidebar