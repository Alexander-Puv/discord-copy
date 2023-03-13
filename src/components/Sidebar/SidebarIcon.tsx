import { useState } from "react"
import { FaCompass } from 'react-icons/fa'

interface SidebarIconProps {
  Icon: typeof FaCompass,
  text: string,
  onClick?: Function,
  chosen?: boolean
}

const SidebarIcon = ({Icon, text, onClick, chosen}: SidebarIconProps) => {
  const [isChosen, setIsChosen] = useState(chosen ?? false)

  const clickHandle = () => {
    if (onClick) {
      // for now only dark theme change has it's own onClick but it doesn't need to be chosen
      onClick()
    } else {
      // setIsChosen(isChosen ? false : true)
    }
  }

  return (
    <div className={`sidebar-icon group${isChosen ? ' chosen' : ''}`} onClick={clickHandle}>
      <Icon />
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
      <span className="sidebar-bar"></span>
    </div>
  )
}

export default SidebarIcon