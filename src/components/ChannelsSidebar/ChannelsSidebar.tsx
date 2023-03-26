import { IoIosArrowDown } from 'react-icons/io'
import Category from './components/Category'
import { categories } from './utils/categories'
import Popup from '../UI/Popup/Popup'
import RadioGroup from '../UI/RadioGroup'
import { HiHashtag } from 'react-icons/hi'
import { HiSpeakerWave } from 'react-icons/hi2'
import { useChannelSidebarContext } from '../../contexts/ChannelSidebarContext'
import { useState } from 'react'
import UserArea from './components/UserArea'

const ChannelsSidebar = () => {
  const [value, setValue] = useState('')
  const {chosenChnl, setChosenChnl, isPopupOpen, setIsPopupOpen, popupTitle} = useChannelSidebarContext()

  return <>
    <div className='flex flex-col w-60 h-full bg-gray-100 dark:bg-gray-800 transition-background'>
      <nav>
        <header className='flex h-12 py-3 px-4 header-shadow cursor-pointer'>
          <h2 className='h2 text-base flex-1'>New Chat</h2>
          <div className="w-[18px] h-[18px] self-center ml-1 icon-parent h3"><IoIosArrowDown /></div>
        </header>
        <ul className='pr-2'>
          {categories.map(category =>
            <Category {...{category, chosenChnl, setChosenChnl}} key={category.title} />
          )}
        </ul>
      </nav>
      <UserArea />
    </div>
    <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen}
      popupContent={{title: 'Create Channel', subtitle: `in ${popupTitle}`,
        close: {text: 'Create Channel', disabled: value ? false : true}}}>
      <Popup.Block title='Channel type'>
        <RadioGroup>
          <RadioGroup.Option title='Text' subtitle='Send messages, images, GIFs, emoji, opinions, and puns'
            value='text' defaultValue icon={<HiHashtag />} />
          <RadioGroup.Option title='Voice' subtitle='Hang out together with voice, video, and screen share'
            value='voice' icon={<HiSpeakerWave />} />
        </RadioGroup>
      </Popup.Block>
      <Popup.Block title='Channel Name'>
        <Popup.Input {...{value, setValue}} icon={<HiHashtag />} placeholder='new-channel' />
      </Popup.Block>
    </Popup>
  </>
}

export default ChannelsSidebar