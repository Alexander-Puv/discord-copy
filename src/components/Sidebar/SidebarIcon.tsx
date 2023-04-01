import React from "react"

export enum SidebarIconNames {
  discord = 'Discord',
  plus = 'Plus',
  compass = 'Compass',
  theme = 'Theme'
}

export interface SidebarIconProps {
  name: SidebarIconNames | string,
  Icon: React.ReactNode,
  text?: string,
  onClick?: Function,
  chosen?: boolean
}

const SidebarIcon = ({name, Icon, text, onClick, chosen}: SidebarIconProps) => {
  const greenColor = Object.values(SidebarIconNames).includes(name as SidebarIconNames)
    && name !== SidebarIconNames.discord

  return (
    <div
      className={'sidebar-icon group' +
        (chosen ? ' chosen' : '') +
        (greenColor ? ' green' : '') +
        (name === SidebarIconNames.discord ? ' text-2xl' : '')}
      onClick={() => onClick && onClick()}
    >
      {Icon}
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text ?? name}
      </span>
      <span className="sidebar-bar"></span>
    </div>
  )
}

export default SidebarIcon