import { useState } from "react"
import { IconType } from "react-icons/lib"

export enum SidebarIconNames {
  discord = 'Discord',
  plus = 'Plus',
  compass = 'Compass',
  theme = 'Theme',
  settings = 'Settings'
}

export interface SidebarIconProps {
  name: string,
  Icon: IconType,
  text?: string,
  onClick?: Function,
  chosen?: boolean
}

const SidebarIcon = ({name, Icon, text, onClick, chosen}: SidebarIconProps) => {

  return (
    <div className={`sidebar-icon group${chosen ? ' chosen' : ''}`} onClick={() => onClick && onClick()}>
      <Icon />
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text ?? name}
      </span>
      <span className="sidebar-bar"></span>
    </div>
  )
}

export default SidebarIcon