import { HiHashtag } from 'react-icons/hi'
import { HiSpeakerWave } from 'react-icons/hi2'
import { IChannel } from '../types/categoriesTypes'
import { useChannelSidebarContext } from '../../../contexts/ChannelSidebarContext'

interface ChannelProps {
  channel: IChannel,
  isOpen: boolean
}

const Channel = ({channel, isOpen}: ChannelProps) => {
  const {chosenChnl, setChosenChnl} = useChannelSidebarContext()

  return (
    <li onClick={() => setChosenChnl(channel.title)}
      className={`flex ml-2 py-[7px] px-2 rounded
        h4 text-base leading-5 cursor-pointer ${
          chosenChnl === channel.title ?
            'h4-chosen bg-gray-500 bg-opacity-[0.45] dark:bg-gray-600 dark:bg-opacity-[0.55]'
          : `h4-hover hover:bg-gray-500 hover:bg-opacity-30
            active:bg-gray-500 active:bg-opacity-40
            hover:dark:bg-gray-600 hover:dark:bg-opacity-[0.25]
            active:dark:bg-gray-600 active:dark:bg-opacity-40 ${
              !isOpen ? 'hidden' : ''}`}`}>
      <div className='mr-[6px] icon-parent w-5 h-5 text-secondary'>
        {channel.type === 'text' ? <HiHashtag /> : <HiSpeakerWave />}
      </div>
      <h4>{channel.title}</h4>
    </li>
  )
}

export default Channel