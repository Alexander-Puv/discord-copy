import React, { useContext, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsDiscord, BsGearFill, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaCompass } from 'react-icons/fa'
import useDarkMode from '../../hooks/useDarkMode'
import SidebarIcon, { SidebarIconNames, SidebarIconProps } from './SidebarIcon'
import { useAppContext } from '../../contexts/AppContext'
import Popup from '../UI/Popup/Popup'
import RadioGroup, { RadioOption } from '../UI/RadioGroup'
import {BiHash} from 'react-icons/bi'

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
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
      <Popup {...{isOpen, setIsOpen}} popupContent={{
        title: 'Create a server',
        subtitle: 'Your server is where you and your friends hang out. Make yours and start talking.',
        close: {text: 'Close'}
      }}>
        <Popup.Block title='check1'>
          <RadioGroup>
            <RadioOption
              title="Option 1"
              subtitle="Description of option 1"
              icon={<BiHash />}
              value="option1"
              defaultValue
            />
            <RadioOption
              title="Option 2"
              subtitle="Description of option 2"
              icon={<BiHash />}
              value="option2"
            />
          </RadioGroup>
        </Popup.Block>
        <Popup.Block title='check2'>
          <Popup.Input icon={<BiHash />} placeholder='Check'
          {...{value, setValue}}/>
        </Popup.Block>
      </Popup>
    </div>
  )
}

export default Sidebar