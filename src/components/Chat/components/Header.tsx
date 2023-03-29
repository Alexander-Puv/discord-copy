import React, {useEffect, useRef, useState} from 'react'
import { BsBellFill, BsBellSlashFill, BsPinAngleFill } from 'react-icons/bs'
import { HiHashtag, HiInbox, HiUserGroup, HiOutlineSearch } from 'react-icons/hi'
import { HiSpeakerWave } from 'react-icons/hi2'
import { MdHelp, MdModeComment } from 'react-icons/md'
import { useChannelSidebarContext } from '../../../contexts/ChannelSidebarContext'
import { IconType } from 'react-icons/lib'

const icons = [
  MdModeComment,
  BsBellFill,
  BsPinAngleFill,
  HiUserGroup,
  HiInbox,
  MdHelp
]

const Header = () => {
  const {chosenChnl} = useChannelSidebarContext()
  const [isWide, setIsWide] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [chosen, setChosen] = useState('');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsWide(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [divRef])

  const handleClick = () => {
    setIsWide(true)
  };

  return (
    <header className="h-12 w-full min-w-0 flex items-center px-2 h3 chat-header-shadow dark:header-shadow">
      <div className="flex-1 flex items-center">
        <div className="icon-parent mx-2 text-secondary">
          {chosenChnl.type === 'text' ? <HiHashtag /> : <HiSpeakerWave />}
        </div>
        <h3 className="h3 mr-2">{chosenChnl.title}</h3>
      </div>
      <div className="flex items-center">
        {icons.map(Icon => <React.Fragment key={Icon.name}>
          <HeaderIcon {...{chosen, setChosen, Icon}} />
          {Icon === HiUserGroup &&
          <div className={`flex h-6 mx-2 px-[2px] rounded cursor-text bg-gray-300
            transition-[width] duration-[250ms] dark:bg-gray-950 ${isWide ? 'w-60' : 'w-36'}`}
            onClick={handleClick} ref={divRef}>
            <input className="w-full p-[2px] bg-transparent outline-0 text-normal
              text-sm font-normal placeholder:pl-[2px] placeholder:text-secondary group"
              placeholder='Search' />
            <div className="w-6 h-6 mr-[2px] flex items-center justify-center">
              <div className="icon-parent w-4 h-4 text-secondary">
                <HiOutlineSearch />
              </div>
            </div>
          </div>}
        </React.Fragment>)}
      </div>
    </header>
  )
}

interface HeaderIconProps {
  Icon: IconType,
  chosen: string,
  setChosen: (prop: string) => void
}

const HeaderIcon = ({chosen, setChosen, Icon}: HeaderIconProps) => {
  return (
    <div className={"icon-parent mx-2 text-secondary cursor-pointer h4-hover" +
      (chosen === Icon.name ? ' h4-chosen' : '')} onClick={() => setChosen(Icon.name)}>
      <Icon />
    </div>
  )
}

export default Header