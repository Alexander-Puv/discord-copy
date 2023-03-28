import React, {useEffect, useRef, useState} from 'react'
import { BsBellFill, BsBellSlashFill, BsPinAngleFill } from 'react-icons/bs'
import { HiHashtag, HiInbox, HiUserGroup, HiOutlineSearch } from 'react-icons/hi'
import { HiSpeakerWave } from 'react-icons/hi2'
import { MdHelp, MdModeComment } from 'react-icons/md'
import { useChannelSidebarContext } from '../../../contexts/ChannelSidebarContext'

const Header = () => {
  const {chosenChnl} = useChannelSidebarContext()
  const [isWide, setIsWide] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

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
    <header className="h-12 w-full min-w-0 flex items-center px-2 h3 chat-header-shadow">
      <div className="flex-1 flex items-center">
        <div className="icon-parent mx-2 text-secondary">
          {chosenChnl.type === 'text' ? <HiHashtag /> : <HiSpeakerWave />}
        </div>
        <h3 className="h3 mr-2">{chosenChnl.title}</h3>
      </div>
      <div className="flex items-center">
        <HeaderIcon icon={<MdModeComment className='py-[2px]' />} />
        <HeaderIcon icon={<BsBellFill className='py-[2px]' />} />
        <HeaderIcon icon={<BsPinAngleFill />} />
        <HeaderIcon icon={<HiUserGroup />} />
        <div className={`flex h-6 mx-2 px-[2px] rounded cursor-text bg-gray-300
          transition-[width] duration-[250ms] ${isWide ? 'w-60' : 'w-36'}`}
          onClick={handleClick} ref={divRef}>
          <input className="w-full p-[2px] bg-transparent outline-0 text-normal
            text-sm font-normal placeholder:pl-[2px] placeholder:text-secondary group"
            placeholder='Search' />
          <div className="w-6 h-6 mr-[2px] flex items-center justify-center">
            <div className="icon-parent w-4 h-4 text-secondary">
              <HiOutlineSearch />
            </div>
          </div>
        </div>
        <HeaderIcon icon={<HiInbox />} />
        <HeaderIcon icon={<MdHelp />} />
      </div>
    </header>
  )
}

const HeaderIcon = ({icon}: {icon: React.ReactNode}) => {
  return (
    <div className="icon-parent mx-2 text-secondary cursor-pointer">
      {icon}
    </div>
  )
}

export default Header