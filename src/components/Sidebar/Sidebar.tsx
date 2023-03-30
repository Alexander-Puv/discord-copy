import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsDiscord, BsGearFill, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaCompass } from 'react-icons/fa'
import { useAppContext } from '../../contexts/AppContext'
import useDarkMode from '../../hooks/useDarkMode'
import Popup from '../UI/Popup/Popup'
import UploadPhoto from '../UI/UploadPhoto'
import SidebarIcon, { SidebarIconNames, SidebarIconProps } from './SidebarIcon'

const Servers = ['New Server']

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const {chosen, setChosen} = useAppContext()

  const SidebarIcons: SidebarIconProps[] = [
    {name: SidebarIconNames.discord, Icon: <BsDiscord />, text: 'Direct messages'},
    {name: SidebarIconNames.plus, Icon: <AiOutlinePlus />, text: 'Add a server',
      onClick: () => setIsOpen(true)},
    {name: SidebarIconNames.compass, Icon: <FaCompass />, text: 'Explore public servers'},
    {name: SidebarIconNames.theme, Icon: darkTheme ? <BsMoonFill /> : <BsSunFill />,
      text: 'Change theme', onClick: () => setDarkTheme(!darkTheme)},
    {name: SidebarIconNames.settings, Icon: <BsGearFill />, text: 'User settings'},
  ]

  const PopupOnClick = () => {
    setTimeout(() => {
      setValue('');
    }, 150)
  }

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
          {Servers.map(server =>
            <SidebarIcon Icon={<div>{server[0]}</div>} name={server}
              onClick={() => setChosen(server)} chosen={chosen === server}
              key={server} />
          )}
        </>}
      </React.Fragment>)}
      <Popup {...{isOpen, setIsOpen}} popupContent={{
        title: 'Create a server',
        subtitle: 'Your server is where you and your friends hang out. Make yours and start talking.',
        close: {text: 'Create', disabled: !value, onClick: PopupOnClick}
      }}>
        <div className='flex justify-center mb-6 mt-5'>
          <UploadPhoto isOpen={isOpen} />
        </div>
        <Popup.Block title='Server name'>
          <Popup.Input {...{value, setValue}} />
          <h4 className='h4 mt-2 pb-1'>By creating a server, you agree to agree (by the way, the button below doesn't create server, this is not a bug)</h4>
        </Popup.Block>
      </Popup>
    </div>
  )
}

export default Sidebar