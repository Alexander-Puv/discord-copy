import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { ICategory } from '../types/categoriesTypes'
import Channel from './Channel'
import { useChannelSidebarContext } from '../../../contexts/ChannelSidebarContext'

interface CategoryProps {
  category: ICategory,
}

const Category = ({category}: CategoryProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const {setIsPopupOpen, setPopupTitle} = useChannelSidebarContext()

  const openPopup = () => {
    setIsPopupOpen(true)
    setPopupTitle(category.title)
  }

  return (
    <li className='pt-4'>
      <div className="relative flex items-center justify-between pl-4 pr-1
        h4 font-semibold tracking-wide h4-hover cursor-pointer">
        <div className="absolute inset-0" onClick={() => setIsOpen(!isOpen)}/>
        <div className={`absolute left-[2px] top-[6px] w-3 h-3 icon-parent
          transition-all ease-linear ${!isOpen ? '-rotate-90' : ''}`}>
          <IoIosArrowDown />
          </div>
        <h4>{category.title.toUpperCase()}</h4>
        <div className='icon-parent relative' onClick={openPopup}>
          <BsPlus />
        </div>
      </div>
      <ul>
        {category.channels.map(channel =>
          <Channel {...{channel, isOpen}} key={channel.title} />
        )}
      </ul>
    </li>
  )
}

export default Category